<template>
  <div>
    <button class="action-btn">Select Action</button>
    <div class="actions-menu hidden">
      <button @click="edit">Edit</button>
      <button @click="deleteAffirmation">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    affirmationId: {
      type: Number,
      required: true
    }
  },
  methods: {
    edit() {
      this.$emit('edit', this.affirmationId);
    },
    deleteAffirmation() {
      if (confirm('Are you sure you want to delete this affirmation?')) {
        this.$emit('delete', this.affirmationId);
      }
    }
  },
  mounted() {
    const actionBtn = this.$el.querySelector('.action-btn');
    actionBtn.addEventListener('click', () => {
      const menu = actionBtn.nextElementSibling;
      menu.classList.toggle('hidden');
    });
  }
}
</script>

<style>
.hidden {
  display: none;
}
</style>
