<script setup lang="ts">
import {computed, useColorMode} from "#imports";

const colorMode = useColorMode()
const iconName = computed(() => {
    switch (colorMode.value) {
        case "light":
            return 'heroicons:moon-20-solid'
        case "dark":
            return 'heroicons:sun-20-solid'
        default:
            return 'heroicons:moon-20-solid'
    }
})

function change() {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>
<template>
    <button @click="change" class="btn btn-ghost">
        <Icon :name="iconName"/>
    </button>
</template>
