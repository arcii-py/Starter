<script setup lang="ts">
import { ref } from 'vue';
import { getLunar } from 'lunar-info';

type ZodiacSign =
    | 'Rat'
    | 'Ox'
    | 'Tiger'
    | 'Rabbit'
    | 'Dragon'
    | 'Snake'
    | 'Horse'
    | 'Goat'
    | 'Monkey'
    | 'Rooster'
    | 'Dog'
    | 'Pig';

function getChineseZodiac(
    year: number,
    month: number,
    day: number
): ZodiacSign {
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
    return zodiacSigns[(lunarYear - 4) % 12];
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

const birthYear = ref(1993);
const birthMonth = ref(8); // Month
const birthDay = ref(12);

const zodiacSign = ref<ZodiacSign | null>(null);
const good = ref<ZodiacSign[]>([]);
const bad = ref<ZodiacSign[]>([]);
const goodYears = ref<number[]>([]);
const badYears = ref<number[]>([]);


const currentYear = new Date().getFullYear();
const currentZodiacSign = ref(''); // Changed to ref for reactivity
const updateZodiacInfo = () => {
    zodiacSign.value = getChineseZodiac(birthYear.value, birthMonth.value, birthDay.value);
    const { good: g, bad: b } = getCompatibility(zodiacSign.value);
    good.value = g;
    bad.value = b;

    goodYears.value = [];
    badYears.value = [];

    for (let year = currentYear - 7; year <= currentYear + 7; year++) {
        const sign = getChineseZodiac(year, birthMonth.value, birthDay.value);
        if (good.value.includes(sign)) {
            goodYears.value.push(year);
        }
        if (bad.value.includes(sign)) {
            badYears.value.push(year);
        }
    }

    currentZodiacSign.value = getChineseZodiac(currentYear, birthMonth.value, birthDay.value);
};

updateZodiacInfo();

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

        <h1 class="text-3xl font-bold mb-4">Your Chinese zodiac sign is <span class="text-violet-700">{{ zodiacSign
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
            <p class="text-lg text-gray-700">{{ currentYear }} - {{ currentZodiacSign }}</p>
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