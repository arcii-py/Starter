<template>
  <!-- Button to open the modal -->
  <div class="fixed">
    <button @click="showAddModal = true"
      class="bg-blue-500 text-white w-10 h-10 flex items-center justify-center text-2xl rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300"
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
</template>


<script setup>
import { ref } from 'vue';


const client = useSupabaseClient();
const user = useSupabaseUser();  // Make sure you have this imported to get the current user
const showAddModal = ref(false);
const newAffirmation = ref('');

const addAffirmation = async () => {
  if (newAffirmation.value.trim() === '') return;

  const affirmationData = {
    text: newAffirmation.value,
    user_id: user.value.id  // Add the user_id to the data being sent
  };

  const { error } = await client.from('affirmations').insert([affirmationData]);
  if (error) {
    console.error('Error adding affirmation:', error);
  } else {
    newAffirmation.value = '';
    showAddModal.value = false;
    

  }
};
</script>
