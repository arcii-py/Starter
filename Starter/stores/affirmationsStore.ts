// import { defineStore } from 'pinia';

// export const useAffirmationsStore = defineStore('affirmations', {
//     state: () => ({
//       affirmations: [],
//       loading: true,
//       showEditModal: false,
//       editingAffirmation: {},
//     }),
//     actions: {
//       async fetchAffirmations() {
//         const client = useSupabaseClient();
//         const user = useSupabaseUser();
        
//         try {
//           const { data, error } = await client
//             .from('affirmations')
//             .select('*')
//             .eq('user_id', user.value.id.toString());
  
//           if (error) {
//             console.error('Error fetching affirmations:', error);
//           } else {
//             this.affirmations = data;
//           }
//         } catch (error) {
//           console.error('An error occurred:', error);
//         } finally {
//           this.loading = false;
//         }
//       },
      
//       // Add your other methods like updateAffirmation, deleteAffirmation here
//     },
//   });
  