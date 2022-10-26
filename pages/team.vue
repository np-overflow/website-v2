<script setup lang="ts">
definePageMeta({
	title: 'Team',
})

const { data: team } = await useAsyncData('team', () => queryContent('/team').findOne())
</script>

<template>
	<div class="container mx-auto py-10 px-4">
		<h1 class="text-5xl font-cubano">
			The
			<span class="text-transparent bg-clip-text bg-gradient-to-tr from-amber-500 to-pink-500">
				Team
			</span>
		</h1>

		<div class="grid grid-cols-1 md:grid-cols-3 mt-4">
			<div v-for="{ name, role } in team.exco" :key="name" class="mt-5">
				<span>
					<b class="text-xl font-cubano font-medium">{{ name }}</b>
					<br>
					{{ role }}
				</span>
			</div>
		</div>
	</div>
</template>
