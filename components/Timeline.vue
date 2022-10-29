<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: 'Timeline title',
	},
	subtitle: {
		type: String,
		default: 'Timeline subtitle',
	},
})
</script>

<template>
	<section class="flex flex-col items-center gap-4 font-poppins">
		<slot name="icon" />

		<h1 class="font-cubano text-2xl">
			{{ title }}
		</h1>

		<span class="text-md text-base-content/60">
			{{ subtitle }}
		</span>

		<div class="mb-10 flex w-full flex-col p-3 sm:p-0">
			<slot />
		</div>
	</section>
</template>
