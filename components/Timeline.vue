<script setup lang="ts">
const { title, subtitle } = withDefaults(defineProps<{
	title?: string
	subtitle?: string
}>(), {
	title: 'Timeline title',
	subtitle: 'Timeline subtitle',
})
</script>

<template>
	<div class="flex flex-col items-center gap-4 font-poppins">
		<slot name="icon" />
		<h1 class="font-cubano text-2xl">
			{{ title }}
		</h1>
		<h3 class="text-xs text-base-content/60">
			{{ subtitle }}
		</h3>
		<div class="flex flex-col w-full p-6">
			<slot name="content" />
		</div>
	</div>
</template>
