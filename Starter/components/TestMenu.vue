<template>
    <div v-if="showMenu" ref="menu" :class="{ 'shrink': isShrunk }" @click="toggleShrink"
    class="nav-menu bg-primary border-l-4 border-accent text-textColor p-4 rounded-full shadow-md transition-all duration-500 flex items-center justify-center cursor-pointer fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:bottom-auto lg:top-1 lg:left-auto lg:right-4"
        role="navigation">
        <div v-if="!isShrunk" class="content lg:flex lg:space-x-4">
            <ul class="list-none space-y-2 lg:space-y-0 lg:flex lg:space-x-4">
                <li><a href="#" class="text-accent hover:underline">Home</a></li>
                <li><nuxt-link to="/about" @click.stop class="text-accent hover:underline">About</nuxt-link></li>
                <li><nuxt-link to="/word-numeorology" @click.stop class="text-accent hover:underline">Word Numeorology</nuxt-link></li>
                <li><nuxt-link to="/chinese-zodiac" @click.stop class="text-accent hover:underline">Chinese Zodiac</nuxt-link></li>
            </ul>
        </div>
        <span v-if="isShrunk"
            class="text-xl font-bold w-full h-full flex items-center justify-center no-pointer-events">M</span>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isShrunk: true,
            lastScrollPosition: 0,
            showMenu: true
        };
    },
    methods: {
        toggleShrink() {
            this.isShrunk = !this.isShrunk;
        },
        handleScroll() {
            if (window.innerWidth <= 640) { // Mobile view
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                
                if (currentScrollPosition > this.lastScrollPosition) {
                    this.showMenu = false;
                } else {
                    this.showMenu = true;
                }

                this.lastScrollPosition = currentScrollPosition;
            }
        }
    },
    mounted() {
        document.addEventListener('click', (event) => {
            if (!this.$refs.menu.contains(event.target)) {
                this.isShrunk = true;
            }
        });
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>
  
<style>
.no-pointer-events {
    pointer-events: none;
}

.nav-menu {
    width: 50px;
    height: 50px;
    right: 4px; /* Small margin from the right edge */
    transition: width 0.5s ease, height 0.5s ease, border-radius 0.5s ease; 
    /* transition: all 0.5s ease; */
}

.nav-menu:not(.shrink) {
    width: 300px; /* Adjusted width for desktop */
    height: auto;
    border-radius: 8px;
    padding: 16px;
    z-index: 50;
}

@media (max-width: 640px) { /* Tailwind's breakpoint for mobile */
    .nav-menu {
        width: 50px;
        height: 50px;
        left: 50%; /* Center the menu */
        transform: translateX(-50%); /* Adjust the transform to only affect the X-axis */
        z-index: 50;
    }
    .nav-menu:not(.shrink) {
        width: 200px; /* Width for mobile */
        transform: translateX(-50%);
    }
}

@media (min-width: 641px) { /* Tailwind's breakpoint for desktop */
    .nav-menu {
        
        right: 16px; /* Adjust as needed for desired distance from the right */
        transform: none; /* Reset the transform */
    }
    .nav-menu:not(.shrink) {
        width: auto; /* Let it adjust based on content */
        height: auto;
        border-radius: 8px;
        padding: 16px;
        display: flex;
        justify-content: flex-end;
    }
    .content {
        display: flex;
        gap: 16px; /* Space between items */
    }
}

.shrink {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    bottom: 50px;
    transition: width 0.5s ease, height 0.5s ease, border-radius 0.5s ease; /* Consistent transition duration */
}

.content {
    text-align: center;
}

/* Customizable Colors */
.bg-primary {
    background-color: #2C3E50; /* Dark Blue */
}

.text-textColor {
    color: #ECF0F1; /* Off White */
}

.border-accent {
    border-color: #E74C3C; /* Red */
}

.text-accent {
    color: #E74C3C; /* Red */
}

.nav-menu:focus {
    outline: none;
}

.nav-menu {
    -webkit-tap-highlight-color: transparent;
}

.hidden-menu {
    transform: translateY(100%); /* This will slide the menu down out of view */
    transition: transform 0.3s ease; /* Smooth transition */
}

</style>