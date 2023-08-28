<template>
  <div class="flex flex-col items-center justify-center bg-gray-300 p-4">
    <!-- Loading State -->
    <div v-if="loading" class="text-blue-500">Loading affirmations...</div>

    <!-- No Affirmations State -->
    <div v-else-if="affirmations.length === 0" class="text-gray-500">No affirmations found.</div>

    <!-- Display Affirmations -->
    <div v-else class="w-full max-w-2xl select-none no-tap-highlight">
      <div v-for="affirmation in affirmations" :key="affirmation.id" class="bg-white p-4 mb-4 rounded shadow">
        <p class="text-gray-700 cursor-pointer" @click="openEditModal(affirmation)">{{ affirmation.text }}</p>
      </div>
    </div>

    <!-- Edit Modal -->
    <div v-if="showEditModal"
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      @click="showEditModal = false">
      <div class="bg-white p-4 rounded w-full max-w-xl" @click.stop>
        <label for="editAffirmation" class="block text-gray-700 font-bold mb-2">Edit Affirmation:</label>
        <textarea id="editAffirmation" v-model="editingAffirmation.text" rows="4"
          class="border p-2 w-full rounded resize-none"></textarea>
        <div class="flex justify-between mt-2">
          <button @click="updateAffirmation" class="bg-blue-500 text-white p-2 rounded">Save</button>
          <button @click="deleteAffirmation(editingAffirmation.id)"
            class="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const client = useSupabaseClient();
const user = useSupabaseUser();
const affirmations = ref([]);
const loading = ref(true);
const showEditModal = ref(false);
const editingAffirmation = ref({});

const fetchAffirmations = async () => {
  try {
    const { data, error } = await client
      .from('affirmations')
      .select('*')
      .eq('user_id', user.value.id.toString());

    if (error) {
      console.error('Error fetching affirmations:', error);
    } else {
      affirmations.value = data;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    loading.value = false;
  }
};

const openEditModal = (affirmation) => {
  editingAffirmation.value = { ...affirmation };
  showEditModal.value = true;
};

const updateAffirmation = async () => {
  try {
    const { error } = await client.from('affirmations').update(editingAffirmation.value).eq('id', editingAffirmation.value.id);
    if (error) {
      console.error('Error updating affirmation:', error);
    } else {
      const index = affirmations.value.findIndex(a => a.id === editingAffirmation.value.id);
      affirmations.value[index] = editingAffirmation.value;
      showEditModal.value = false;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

const deleteAffirmation = async (id) => {
  try {
    const { error } = await client.from('affirmations').delete().eq('id', id);
    if (error) {
      console.error('Error deleting affirmation:', error);
    } else {
      affirmations.value = affirmations.value.filter(a => a.id !== id);
      showEditModal.value = false;  // Close the edit modal after deleting
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

onMounted(fetchAffirmations);
</script>

<style>
.no-tap-highlight {
    -webkit-tap-highlight-color: transparent;
}
</style>