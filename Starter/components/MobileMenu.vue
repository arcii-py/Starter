<template>
    <div>
        <button @click="toggleMenu" class="md:hidden fixed bottom-4 right-4 p-4 rounded-full bg-white shadow-lg z-50">
            <div class="burger flex flex-col space-y-1">
                <div class="bar w-6 h-0.5 bg-black"></div>
                <div class="bar w-6 h-0.5 bg-black"></div>
                <div class="bar w-6 h-0.5 bg-black"></div>
            </div>
        </button>
        <div :class="{ 'open': menuOpen }"
            class="mobile-menu fixed bottom-0 right-0 w-full h-0 bg-gray-100 md:hidden transition-all overflow-hidden">
            <div class="flex flex-col justify-center items-center space-y-48 px-4 py-8">
                <div class="region mt-2 mb-auto">
                    <div v-if="settingsOpen" class="settings-region">
                        <!-- Settings pills -->
                        <Pills :pills="settingsPills" />
                    </div>
                    <div v-if="menuItemsOpen" class="menu-region">
                        <!-- Menu pills -->
                        <Pills :pills="menuPills" />
                    </div>
                </div>
                <div class="flex flex-col items-start w-full">
                    <button @click="toggleSettings" class="flex items-center mb-2">
                        <i class="icon ion-gear-b text-black text-lg mr-2"></i>
                    </button>
                    <button @click="toggleMenuItems" class="flex items-center">
                        <i class="icon ion-navicon text-black text-lg mr-2"></i>
                    </button>
                    <NuxtLink to="/">
                        <button class="flex items-center">
                            <i class="icon ion-home text-black text-lg mr-2"></i>
                        </button>
                    </NuxtLink>
                </div>
                <button @click="toggleMenu"
                    class="close-button text-black hover:text-yellow-300 transition-all duration-300">
                    Close</button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Pills, { settingsPills, menuPills } from './Pills.vue';

const menuOpen = ref(false);
const settingsOpen = ref(false);
const menuItemsOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

const toggleSettings = () => {
    settingsOpen.value = true;
    menuItemsOpen.value = false;
};

const toggleMenuItems = () => {
    settingsOpen.value = false;
    menuItemsOpen.value = true;
};
</script>
  
<style scoped>
.burger {
    cursor: pointer;
}

.bar {
    transition: 0.4s;
}

.mobile-menu {
    transition: all 0.3s ease-in-out;
    z-index: 999;
    height: 0;
}

.mobile-menu.open {
    height: 66%;
}


.region {
    margin-bottom: 16px;
}

.close-button {
    position: absolute;
    bottom: 4px;
    left: 4px;
    padding: 8px 16px;
}

.icon {
    font-size: 45px;
    /* Adjust the size as needed */
}
</style>
  