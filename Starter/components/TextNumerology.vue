<template>
    <div class="flex flex-col justify-center items-center">
        <div class="p-6 bg-white rounded-lg shadow-lg w-96 space-y-4">
            <div class="flex justify-between items-center">
                <h1 class="text-lg font-semibold">Numerology Calculator</h1>
            </div>
            <div>
                <input
                    v-model="word"
                    class="w-full px-4 py-2 border rounded-md outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter a word"
                />
            </div>
            <div class="bg-gray-50 p-4 rounded-md">
                <pre class="text-sm text-gray-600">{{ result }}</pre>
            </div>
        </div>
        <div class="text-left mt-5">
        <p>Full word - Name Number (Destiny Number)</p>
        <p>First letter - xx</p>
        <p>Vowels - Soul urge number (Heart's desire)</p>
        <p>Consonants - Personality number</p>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const alphabetToNumber: { [key: string]: number } = {
    "a": 1, "b": 2, "c": 3, "d": 4, "e": 5,
    "f": 6, "g": 7, "h": 8, "i": 9, "j": 1,
    "k": 2, "l": 3, "m": 4, "n": 5, "o": 6,
    "p": 7, "q": 8, "r": 9, "s": 1, "t": 2,
    "u": 3, "v": 4, "w": 5, "x": 6, "y": 7,
    "z": 8
};
const masterNumbers = [11, 22, 33];
const vowels = ["a", "e", "i", "o", "u"];




function reduceToSingleDigit(num: number): [number, string] {
    if (masterNumbers.includes(num)) {
        return [num, `${num}`];
    }
    let reducedSum = num;
    let reducedSumString = "";
    while (reducedSum >= 10) {
        const strNum = reducedSum.toString();
        reducedSum = 0;
        for (const digit of strNum) {
            reducedSum += parseInt(digit, 10);
            reducedSumString += digit + "+";
        }
    }
    reducedSumString = reducedSumString.slice(0, -1);
    return [reducedSum, reducedSumString];
}

function calculateNumerology(word: string): string {
    word = word.toLowerCase().trim();
    if (!word.match(/^[a-z]+$/)) {
        return "Please enter valid alphabets only.";
    }

    let output = `Numerology for ${word}:\n`;
    let fullSum = 0, vowelSum = 0, consonantSum = 0;

    for (const letter of word) {
        const letterValue = alphabetToNumber[letter] || 0;
        fullSum += letterValue;
        if (vowels.includes(letter)) {
            vowelSum += letterValue;
        } else {
            consonantSum += letterValue;
        }
    }

    const [fullReduced, fullReducedStr] = reduceToSingleDigit(fullSum);
    output += `Full word: ${fullSum} = ${fullReducedStr} = ${fullReduced}\n`;

    const firstLetter = word.charAt(0);
    const firstLetterValue = alphabetToNumber[firstLetter] || 0;
    const [firstReduced, firstReducedStr] = reduceToSingleDigit(firstLetterValue);
    output += `First letter (${firstLetter}): ${firstLetterValue} = ${firstReducedStr} = ${firstReduced}\n`;

    const [vowelReduced, vowelReducedStr] = reduceToSingleDigit(vowelSum);
    output += `Vowels: ${vowelSum} = ${vowelReducedStr} = ${vowelReduced}\n`;

    const [consonantReduced, consonantReducedStr] = reduceToSingleDigit(consonantSum);
    output += `Consonants: ${consonantSum} = ${consonantReducedStr} = ${consonantReduced}\n`;

    return output;
}

const word = ref('');
const result = computed(() => calculateNumerology(word.value));

</script>
