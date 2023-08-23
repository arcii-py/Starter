<template>
    <div class="pills">
        <NuxtLink v-for="pill in pills" :key="pill.name" :to="pill.link"
            class="menu-item text-black hover:text-yellow-300 transition-all duration-300">
            {{ pill.name }}
        </NuxtLink>
    </div>
</template>
  
<script>
export default {
    props: {
        pills: {
            type: Array,
            required: true,
        },
    },
};

export const settingsPills = [
    { name: 'Profile', link: '/profile' },
    { name: 'Help', link: '/help' },
    { name: 'About', link: '/about' },
];

export const menuPills = [
    { name: 'banana', link: '/profile' },
    { name: 'banana', link: '/help' },
    { name: 'banana', link: '/about' },
];
</script>
  
<style scoped>
.menu-item {
    background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
}

/* Desktop specific styles */
@media (min-width: 768px) {
    .pills {
        display: flex;
        justify-content: space-around;
    }

    .menu-item {
  padding: 8px 16px;
  background: #4B5563;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100px; /* Same size for all pills */
  text-align: center;
  color: #fff;
  text-decoration: none; /* Removes underline */
  display: inline-block; /* Aligns pills horizontally */
  margin-right: 8px; /* Adds spacing between pills */
  transition: background 0.3s ease, color 0.3s ease; /* Adds transition for color */
}

.menu-item:hover {
  background: #f3f3f3;
  color: #333;
}
}</style>
  