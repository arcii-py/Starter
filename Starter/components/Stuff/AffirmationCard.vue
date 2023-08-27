<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 class="text-2xl font-semibold mb-4">Add an Affirmation</h1>
        <form @submit.prevent="addAffirmation">
          <div class="mb-4">
            <label for="affirmation" class="block text-sm font-medium text-gray-600">Affirmation:</label>
            <input type="text" id="affirmation" v-model="affirmationText" class="w-full p-2 border rounded-md">
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Add Affirmation
          </button>
        </form>
      </div>
    </div>
    <StuffRetriveAffirmation />
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