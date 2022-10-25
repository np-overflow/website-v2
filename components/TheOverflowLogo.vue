<script setup lang="ts">
import { PropType } from "vue";

import { useColorMode } from "#imports";
import { ColorScheme } from "#components";

const colorMode = useColorMode()
const props = defineProps({
    urls: Object as PropType<Record<string, string>>,
})
</script>
<template>
    <ColorScheme>
        <img format="webp" width="50" height="50" alt="Overflow Logo" :src="props.urls[colorMode.value]" />
    </ColorScheme>
</template>
