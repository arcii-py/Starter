<template>
    <RetriveAffirmation />
    
    <!-- <Counter /> -->
   <!-- <WelcomingCard /> -->
   <br>
   <!-- <div>
        <h1 class="bg-red-700">Countries Test from pinia store and supabase</h1>
        <ul>
            <li v-for="country in countries" :key="country.id">
                {{ country.name }}
            </li>
        </ul>
    </div> -->
    <!-- <Disclamer /> -->
    <TextNumerology />
</template>


<script setup>
import { onMounted } from 'vue'
import { useCountryStore } from '~/stores/countryStore'
import { computed } from 'vue'

const countryStore = useCountryStore()
const client = useSupabaseClient()

onMounted(async () => {
    await countryStore.fetchCountries(client)
})

const countries = computed(() => countryStore.countries)

import RetriveAffirmation from '~/components/ViewAffirm/RetriveAffirmation.vue'
// import Counter from '~/components/Counter.vue';

definePageMeta({
    layout: 'default',
});
</script>
  