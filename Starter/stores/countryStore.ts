import { defineStore } from 'pinia'
import { SupabaseClient } from '@supabase/supabase-js'

// Define the type for a country
interface Country {
  id: number;
  name: string;
  // ... any other properties
}

export const useCountryStore = defineStore({
  id: 'countryStore',
  // Explicitly define the type for countries
  state: (): { countries: Country[] } => ({
    countries: []
  }),
  actions: {
    async fetchCountries(client: SupabaseClient) {
      const { data, error } = await client.from('countries').select('*')
      if (data) {
        // TypeScript should now know that this is an array of Country objects
        this.countries = data as Country[]
      }
      if (error) {
        console.error('Error fetching countries:', error)
      }
    }
  }
})
