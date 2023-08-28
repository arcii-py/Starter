<template>
  <div class="flex items-center justify-center p-4">
    <div class="bg-white p-4 sm:p-8 rounded-lg shadow-md max-w-md w-full">
      <h1 class="text-2xl font-semibold mb-6">Add an Affirmation</h1>
      <form @submit.prevent="addAffirmation">
        <div class="mb-6">
          <label for="affirmation" class="block text-sm font-medium text-gray-600 mb-2">Affirmation:</label>
          <input type="text" id="affirmation" v-model="affirmationText" 
                 class="w-full p-2 border rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none">
        </div>
        <button type="submit" 
                class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out">
          Add Affirmation
        </button>
      </form>
    </div>
  </div>
</template>

  
  
  <script setup>
  import { ref } from 'vue';
  
  const affirmationText = ref('');
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  
  const addAffirmation = async () => {
    if (affirmationText.value.trim() === '') {
      return;
    }
  
    const newAffirmation = {
      text: affirmationText.value,
      user_id: user.value.id.toString()
    };
  
    try {
      const { data, error } = await client
        .from('affirmations')
        .insert([newAffirmation]);
  
      if (error) {
        console.error('Error adding affirmation:', error);
      } else {
        console.log('Affirmation added successfully!');
        affirmationText.value = ''; // Clear the input after adding
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  </script>