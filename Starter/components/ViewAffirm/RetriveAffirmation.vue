<template>
  <div class="flex flex-col items-center justify-center bg-gray-300 p-4">
    <!-- Loading State -->
    <div v-if="loading" class="text-blue-500">Loading affirmations...</div>

    <!-- No Affirmations State -->
    <div v-else-if="affirmations.length === 0" class="text-gray-500">Start your journey by adding an affirmation. What are you grateful for?</div>

    <!-- Display Affirmations -->
    <div v-else class="w-full max-w-2xl select-none no-tap-highlight">
      <div v-for="affirmation in affirmations" :key="affirmation.id" class="bg-white p-4 mb-4 rounded shadow">
        <p class="text-gray-700 cursor-pointer break-words" @click="openEditModal(affirmation)">{{ affirmation.text }}</p>
      </div>
    </div>
    <div class="flex justify-end">

    <!-- Button to open the modal -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <button @click="showAddModal = true"
        class="relative z-10 bg-blue-500 text-white w-10 h-10 flex items-center justify-center text-2xl rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300"
        style="line-height: 0.9;">
        <span class="relative" style="top: -1px;">+</span>
      </button>
    </div>

    <!-- Add Modal -->
    <div v-if="showAddModal" class="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div class="bg-white p-4 rounded shadow-lg max-w-full w-full sm:w-4/5 md:w-1/2 lg:w-1/3">
        <h2 class="text-xl mb-4">Add New Affirmation</h2>
        <textarea v-model="newAffirmation" rows="4" class="w-full p-2 rounded border resize-none"></textarea>
        <div class="flex justify-end mt-4">
          <button @click="addAffirmation" class="bg-green-500 text-white px-4 py-2 rounded mr-2">Add</button>
          <button @click="showAddModal = false" class="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
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
// import AddAffirmation from '~/components/ViewAffirm/AddAffirmation.vue';
import { ref, onMounted } from 'vue';

const client = useSupabaseClient();
const user = useSupabaseUser();
const affirmations = ref([]);
const loading = ref(true);
const showAddModal = ref(false);
const newAffirmation = ref('');
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


const addAffirmation = async () => {
  if (newAffirmation.value.trim() === '') return;

  const affirmationData = {
    text: newAffirmation.value,
    user_id: user.value.id  // Add the user_id to the data being sent
  };

  const { data, error } = await client.from('affirmations').insert([affirmationData]);
  if (error) {
    console.error('Error adding affirmation:', error);
  } else {
    newAffirmation.value = '';
    showAddModal.value = false;
    await fetchAffirmations();  // Fetch the latest data after adding a new affirmation
  }
};


const openEditModal = (affirmation) => {
  if (!affirmation.id) {
    console.error('Affirmation ID is missing:', affirmation);
    return;
  }
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
  if (!id) {
    console.error('ID is undefined or not valid');
    return;
  }
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


onMounted(async () => {
  await fetchAffirmations();
});
</script>

<style>
.no-tap-highlight {
  -webkit-tap-highlight-color: transparent;
}
</style>
