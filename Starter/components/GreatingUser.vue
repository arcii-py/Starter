<template>
    <div v-if="showGreeting"
        class="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto flex items-start transition-all duration-500 ease-in-out"
        :class="{ 'opacity-100': showGreeting }">
        <img class="h-16 w-16 rounded-full object-cover mr-4" :src="user.user_metadata.profile_picture"
            alt="Profile Picture">
        <div class="flex-grow flex flex-col">
            <h1 class="text-2xl font-bold text-indigo-600 mb-2">{{ greetingTitle }}</h1>
            <div class="typing-container flex-grow">
                <p class="text-gray-500 overflow-clip">{{ greetingMessage }}</p> <!-- animate-typing -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const client = useSupabaseClient();
// const user = useSupabaseUser();
const loading = ref(false);

const logout = async () => {
    loading.value = true;
    const { error } = await client.auth.signOut();
    if (error) {
        loading.value = false;
        // Handle the error in a user-friendly way
    }
};

const user = ref({
    user_metadata: {
        first_name: 'John',
        profile_picture: 'https://cdn.vectorstock.com/i/1000x1000/22/17/antique-female-goddess-face-elegant-hairstyle-vector-42182217.webp', // Replace with actual URL
    },
});

const showGreeting = ref(true);
const greetingTitle = `Welcome Back, ${user.value.user_metadata.first_name}!`;
const greetingMessage = "We're thrilled to see you again! Enjoy your time here.";

setTimeout(() => {
    showGreeting.value = false;
}, 9000); // The greeting will disappear after 5 seconds


useHead({
    title: 'supaAuth',
    meta: [
        { name: 'description', content: 'Nisi prijevljen' }
    ]
});

defineExpose({
    logout
});
</script>

