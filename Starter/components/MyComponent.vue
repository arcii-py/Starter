<script setup lang="ts">

import { ref, watch } from 'vue';

type ZodiacSign = 'Rat' | 'Ox' | 'Tiger' | 'Rabbit' | 'Dragon' | 'Snake' | 'Horse' | 'Goat' | 'Monkey' | 'Rooster' | 'Dog' | 'Pig';

let getLunar: any;
const isLoading = ref(true);

const birthYear = ref(2024);
const birthMonth = ref(3);
const birthDay = ref(1);
const zodiacSign = ref<ZodiacSign | null>(null);
const good = ref<ZodiacSign[]>([]);
const bad = ref<ZodiacSign[]>([]);
const goodYears = ref<number[]>([]);
const badYears = ref<number[]>([]);
const zodiacElement = ref<string | null>(null);




function getChineseZodiacWithElement(
    year: number,
    month: number,
    day: number
): { sign: ZodiacSign; element: string } {
    if (year < 1900 || year > 2099) {
        throw new Error("Year must be between 1900 and 2099");
    }
    const lunarDate = getLunar(year, month, day);
    const lunarYear = lunarDate.yin_y;

    const zodiacSigns: ZodiacSign[] = [
        'Rat',
        'Ox',
        'Tiger',
        'Rabbit',
        'Dragon',
        'Snake',
        'Horse',
        'Goat',
        'Monkey',
        'Rooster',
        'Dog',
        'Pig',
    ];
    const sign = zodiacSigns[(lunarYear - 4) % 12];

    const remainder = (year - 1924) % 10;
    let element = '';
    switch (remainder) {
    case 0:
    case 1:
        element = 'Wood';
        break;
    case 2:
    case 3:
        element = 'Fire';
        break;
    case 4:
    case 5:
        element = 'Earth';
        break;
    case 6:
    case 7:
        element = 'Metal';
        break;
    case 8:
    case 9:
        element = 'Water';
        break;
}


    return { sign, element };
}



function getCompatibility(zodiacSign: ZodiacSign): {
    good: ZodiacSign[];
    bad: ZodiacSign[];
} {
    const compatibility: Record<ZodiacSign, { good: ZodiacSign[]; bad: ZodiacSign[] }> = {
        Rat: { good: ['Ox', 'Dragon', 'Monkey'], bad: ['Horse', 'Goat'] },
        Ox: { good: ['Rat', 'Snake', 'Rooster'], bad: ['Tiger', 'Horse'] },
        Tiger: { good: ['Rabbit', 'Horse', 'Pig'], bad: ['Snake', 'Monkey'] },
        Rabbit: { good: ['Tiger', 'Goat', 'Pig'], bad: ['Rat', 'Dragon'] },
        Dragon: { good: ['Rat', 'Snake', 'Rooster'], bad: ['Dog', 'Rabbit'] },
        Snake: { good: ['Ox', 'Dragon', 'Rooster'], bad: ['Tiger', 'Pig'] },
        Horse: { good: ['Tiger', 'Goat', 'Dog'], bad: ['Rat', 'Ox'] },
        Goat: { good: ['Rabbit', 'Horse', 'Pig'], bad: ['Rat', 'Ox'] },
        Monkey: { good: ['Rat', 'Dragon', 'Snake'], bad: ['Tiger', 'Pig'] },
        Rooster: { good: ['Ox', 'Dragon', 'Snake'], bad: ['Rabbit', 'Dog'] },
        Dog: { good: ['Tiger', 'Horse', 'Pig'], bad: ['Dragon', 'Rooster'] },
        Pig: { good: ['Tiger', 'Rabbit', 'Goat'], bad: ['Snake', 'Monkey'] },
    };

    return compatibility[zodiacSign];
}

const currentYear = new Date().getFullYear();
const currentZodiacSign = ref('');
const currentElement = ref('');

const updateZodiacInfo = () => {
    const zodiacInfo = getChineseZodiacWithElement(birthYear.value, birthMonth.value, birthDay.value);
    zodiacSign.value = zodiacInfo.sign;
    zodiacElement.value = zodiacInfo.element;
    const { good: g, bad: b } = getCompatibility(zodiacSign.value);
    good.value = g;
    bad.value = b;
    

    goodYears.value = [];
    badYears.value = [];

    for (let year = currentYear - 7; year <= currentYear + 7; year++) {
        const sign = getChineseZodiacWithElement(year, birthMonth.value, birthDay.value).sign;
        if (good.value.includes(sign)) {
            goodYears.value.push(year);
        }
        if (bad.value.includes(sign)) {
            badYears.value.push(year);
        }
    }

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;  // JavaScript months are 0-based
    const currentDay = currentDate.getDate();
    currentZodiacSign.value = getChineseZodiacWithElement(currentYear, currentMonth, currentDay).sign;


    const currentZodiacInfo = getChineseZodiacWithElement(currentYear, currentMonth, currentDay);
    currentZodiacSign.value = currentZodiacInfo.sign;
    currentElement.value = currentZodiacInfo.element;

};



// Watch for changes in birth date fields and update zodiac information
watch([birthYear, birthMonth, birthDay], () => {
    if (!isLoading.value && birthYear.value >= 1900 && birthYear.value <= 2099) {
        updateZodiacInfo();
    }
});

import('lunar-info').then((module) => {
    getLunar = module.getLunar;
    isLoading.value = false;
    updateZodiacInfo();
}).catch(err => {
    console.error("Failed to load lunar-info", err);
});
</script>

<template>
    <div class="p-8 bg-gray-100 text-center rounded-lg shadow-md">
        <!-- Input form -->
        <div class="mb-8">
            <label for="birthYear" class="mr-2">Year:</label>
            <input id="birthYear" v-model="birthYear" @input="updateZodiacInfo" class="border rounded px-2 py-1">
            <label for="birthMonth" class="mr-2 ml-4">Month:</label>
            <input id="birthMonth" v-model="birthMonth" @input="updateZodiacInfo" class="border rounded px-2 py-1">
            <label for="birthDay" class="mr-2 ml-4">Day:</label>
            <input id="birthDay" v-model="birthDay" @input="updateZodiacInfo" class="border rounded px-2 py-1">
        </div>

        <h1 class="text-3xl font-bold mb-4">Your Chinese zodiac sign is <span class="text-violet-700">{{ zodiacElement }} - {{ zodiacSign
        }}</span>.</h1>
        <div class="mb-4">
            <h2 class="text-xl font-semibold">Good compatibility with:</h2>
            <p class="text-lg text-gray-700">{{ good.join(', ') }}</p>
        </div>

        <div class="mb-4">
            <h2 class="text-xl font-semibold">Bad compatibility with:</h2>
            <p class="text-lg text-gray-700">{{ bad.join(', ') }}</p>
        </div>

        <div class="mb-4">
            <h2 class="text-xl font-semibold">Good Years:*</h2>
            <p class="text-lg text-gray-700">{{ goodYears.join(', ') }}</p>
        </div>

        <div class="mb-4">
            <h2 class="text-xl font-semibold">Bad Years:*</h2>
            <p class="text-lg text-gray-700">{{ badYears.join(', ') }}</p>
        </div>


        <div class="mb-4">
            <h2 class="text-xl font-semibold">Current Year:</h2>
            <p class="text-lg text-gray-700">{{ currentYear }} - {{ currentElement }} {{ currentZodiacSign }}</p>
        </div>

        <div class="mb-4">
            <h2 class="text-xl font-semibold">lucky colors:**</h2>
            <p class="text-lg">
                <span class="text-orange-500">Gold</span>,
                <span class="text-slate-500">Silver</span>,
                <span class="text-violet-500">Violet</span>,
                <span class="text-yellow-500">Light Yellow</span>,
                <span class="text-green-500">Green</span>
            </p>
        </div>

        <div class="relative">
            <div class="absolute bottom-0 right-0">
                <p class="text-xs ">*Calculated from the curent date, not birth date.</p>
                <p class="text-xs ">**Colors are currently fixed for rooster.</p>
            </div>
        </div>
    </div>
</template>
