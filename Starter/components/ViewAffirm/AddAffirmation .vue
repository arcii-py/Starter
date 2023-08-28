<template>
  <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-auto md:right-10">
    <button @click="showAddModal = true"
      class="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300">
      + Add Affirmation
    </button>

    <!-- Add Modal -->
    <div v-if="showAddModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white p-4 rounded shadow-lg w-80">
        <h2 class="text-xl mb-4">Add New Affirmation</h2>
        <textarea v-model="newAffirmation" rows="4" class="w-full p-2 rounded border"></textarea>
        <div class="flex justify-end mt-4">
          <button @click="addAffirmation" class="bg-green-500 text-white px-4 py-2 rounded mr-2">Add</button>
          <button @click="showAddModal = false" class="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const client = useSupabaseClient();
const showAddModal = ref(false);
const newAffirmation = ref('');

const addAffirmation = async () => {
  if (newAffirmation.value.trim() === '') return;

  const { error } = await client.from('affirmations').insert([{ text: newAffirmation.value }]);
  if (error) {
    console.error('Error adding affirmation:', error);
  } else {
    newAffirmation.value = '';
    showAddModal.value = false;
    // Emit an event or refresh the list of affirmations in the parent component if needed
  }
};
</script>
  