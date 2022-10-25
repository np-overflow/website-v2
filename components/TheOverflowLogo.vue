<script setup lang="ts">
import {computed, useColorMode} from "#imports";
import {ColorScheme} from "#components";

const colorMode = useColorMode()
const logoSrc = computed(() => {
    switch (colorMode.value) {
        case "light":
            return '/logos/light.png'
        case "dark":
            return '/logos/dark.png'
        default:
            return '/logos/light.png'
    }
})
</script>
<template>
    <ColorScheme>
        <NuxtImg width="50" height="50" alt="Overflow Logo" :src="logoSrc"/>
    </ColorScheme>
</template>
