<template>
    <div class="flex items-center justify-center mt-10">
        <!-- Display Affirmations -->
        <div class="bg-slate-500 p-8 rounded-lg shadow-md">
            <h1 class="text-2xl font-semibold mb-4 text-gray-700">Affirmations</h1>
            <RetriveAffirmation />
        </div>
    </div>
    <div>
        
    </div>
</template>

<script>
import RetriveAffirmation from '~/components/ViewAffirm/RetriveAffirmation.vue';

export default {
  components: {
    RetriveAffirmation
  }
}
</script>
