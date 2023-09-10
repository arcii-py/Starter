import { SupabaseClient } from '@supabase/supabase-js';

export interface Affirmation {
  id: number;
  text: string;
  user_id: string;  
  // ... other fields
}

export const useAffirmationStore = defineStore('affirmation', {
  state: (): { affirmations: Affirmation[] } => ({
    affirmations: []
  }),
  actions: {
    async fetchAffirmations(supabaseClient: SupabaseClient) {
      const { data, error } = await supabaseClient
        .from('affirmations')
        .select('*');

      if (error) {
        console.error('Error fetching affirmations:', error);
        return;
      }

      if (data) {
        this.affirmations = data as Affirmation[];
      }
    },
    
    async addAffirmation(supabaseClient: SupabaseClient, affirmationData: { text: string, user_id: string }) {
      if (!affirmationData.text.trim()) {
        console.error('Affirmation text is empty');
        return;
      }

      const { data, error } = await supabaseClient
        .from('affirmations')
        .insert([affirmationData]);

      if (error) {
        console.error('Error adding affirmation:', error);
        return;
      }

      if (data) {
        this.affirmations.push(data[0] as Affirmation);
      }
    },
    async editAffirmation(supabaseClient: SupabaseClient, affirmationId: number, newText: string) {
      const { error } = await supabaseClient
        .from('affirmations')
        .update({ text: newText })
        .eq('id', affirmationId);
  
      if (error) {
        console.error('Error editing affirmation:', error);
      } else {
        // Update the affirmation in the local state as well
        const affirmation = this.affirmations.find(a => a.id === affirmationId);
        if (affirmation) {
          affirmation.text = newText;
        }
      }
    },
    async deleteAffirmation(supabaseClient: SupabaseClient, affirmationId: number) {
      const { error } = await supabaseClient
        .from('affirmations')
        .delete()
        .eq('id', affirmationId);
  
      if (error) {
        console.error('Error deleting affirmation:', error);
      } else {
        // Remove the affirmation from the local state as well
        this.affirmations = this.affirmations.filter(a => a.id !== affirmationId);
      }
    }  
  }
});
