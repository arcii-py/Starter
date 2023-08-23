<template>
    <div>
        <button @click="toggleMenu" class="md:hidden fixed bottom-4 right-4 p-4 rounded-full bg-black shadow-lg z-50">
            <div class="burger flex flex-col space-y-2">
                <div class="bar w-6 h-0.5 bg-yellow-500"></div>
                <div class="bar w-5 h-0.5 bg-yellow-600"></div>
                <div class="bar w-4 h-0.5 bg-yellow-700"></div>
            </div>
        </button>
        <div :class="{ 'open': menuOpen }"
            class="mobile-menu fixed bottom-0 right-0 w-full h-0 bg-gray-800 md:hidden transition-all overflow-hidden">
            <div class="contain flex flex-col justify-center items-center space-y-4 px-4 py-4">
                <!-- Pill container -->
                <div class="region mt-5 mb-auto w-full center flex justify-center">
                    <div v-if="settingsOpen" class="settings-region">
                        <!-- Settings pills -->
                        <Pills :pills="settingsPills" :onPillClick="toggleMenu" />
                    </div>
                    <div v-if="menuItemsOpen" class="menu-region">
                        <!-- Menu pills -->
                        <Pills :pills="menuPills" :onPillClick="toggleMenu" />
                    </div>
                </div>
                <!-- End container -->
                <!-- Left menu container -->
                    <!-- Ex left menu placeholder -->
                <!-- End Left menu container -->
                <button @click="toggleMenu"
                    class="close-button text-yellow-300 hover:text-yellow-300 transition-all duration-300">
                    <i class="ion-android-close text-yellow-300 mr-2 text-4xl"></i>
                    </button>
            </div>
            <!-- Left menu container -->
            <div class="flex flex-col items-center w-10 p-3 mt-20 ml-4"> <!-- w-10 items-left dont change -->
                <button @click="toggleSettings" class="flex items-center mb-2">
                    <i class="icon ion-gear-b text-yellow-300 text-lg mr-2"></i>
                </button>
                <button @click="toggleMenuItems" class="flex items-center">
                    <i class="icon ion-clock text-yellow-300 text-lg mr-2"></i>
                </button>
                <NuxtLink to="/">
                    <button @click="toggleMenu" class="flex items-center">
                        <i class="icon ion-home text-yellow-300 text-lg mr-2"></i>
                    </button>
                </NuxtLink>
            </div>
            <!-- End Left menu container -->
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
    if (menuOpen.value) {
        // Reset the settings and menu items when closing the menu
        settingsOpen.value = false;
        menuItemsOpen.value = false;
    }
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
    transition: 0.4s;
}

.bar {
    transition: 0.4s;
    /* background-color: var(--primary-color); Use a primary color variable */
    
}

.mobile-menu {
    transition: all 0.3s ease-in-out;
    z-index: 999;
    height: 0;
}

.mobile-menu.open {
    height: 55%;
    transition: height 0.5s ease; /* Smooth transition */
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
    font-size: 42px;
    padding: 5px;
    /* Adjust the size as needed */
}

.contain {
    height: 80px; /* Adjust as needed */
}


</style>
  