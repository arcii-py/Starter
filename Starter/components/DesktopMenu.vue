<template>
     <div class="desktop-menu hidden md:flex space-x-8 ml-auto" ref="menuRef">
      <div class="menu-section" @click="($event) => toggleDesktopMenu('settings', $event)">
        <!-- ... -->
            <button class="menu-label">
                <i class="icon ion-gear-b text-lg mr-2"></i> Settings
            </button>
            <div v-if="desktopMenuOpen === 'settings'" class="dropdown-menu">
                <Pills :pills="settingsPills" />
            </div>
        </div>
        <div class="menu-section" @click="($event) => toggleDesktopMenu('menu', $event)">   
            <button class="menu-label">
                <i class="icon ion-navicon text-lg mr-2"></i> Menu
            </button>
            <div v-if="desktopMenuOpen === 'menu'" class="dropdown-menu">
                <Pills :pills="menuPills" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Pills, { settingsPills, menuPills } from './Pills.vue';

const desktopMenuOpen = ref(null);
const menuRef = ref(null);

const toggleDesktopMenu = (menuType, event) => {
  event.stopPropagation();
  desktopMenuOpen.value = desktopMenuOpen.value === menuType ? null : menuType;
};

const closeDesktopMenu = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    desktopMenuOpen.value = null;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDesktopMenu);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDesktopMenu);
});
</script>

<style scoped>
.desktop-menu {
    align-items: center;
}

.menu-section {
    position: relative;
    cursor: pointer;
}

.menu-label {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    transition: color 0.3s ease;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
}

.menu-label:hover {
    color: #f3f3f3;
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 8px;
    display: flex;
    flex-direction: column;
    z-index: 100;
}

.menu-item {
    padding: 8px 16px;
    text-align: left;
    color: #333;
    transition: background 0.3s ease;
}

.menu-item:hover {
    background: #f3f3f3;
}
</style>
