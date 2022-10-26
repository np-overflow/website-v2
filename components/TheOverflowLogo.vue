<script setup lang="ts">
import type { PropType } from 'vue'
import { useColorMode } from '#imports'

const props = defineProps({
	urls: Object as PropType<Record<string, string>>,
})
const colorMode = useColorMode()
</script>

<template>
	<ColorScheme>
		<img width="50" height="50" alt="Overflow Logo" :src="props.urls[colorMode.value]">
	</ColorScheme>
</template>
