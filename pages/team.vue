<script setup lang="ts">
useHead({
	title: 'Team',
})

const { data: team } = await useAsyncData('team', () => queryContent('team').findOne())
</script>

<template>
	<div class="container mx-auto py-10 px-4">
		<h1 class="font-cubano text-5xl">
			The
			<span class="bg-gradient-to-tr from-amber-500 to-pink-500 bg-clip-text text-transparent">
				Team
			</span>
		</h1>

		<div class="mt-4 grid grid-cols-1 md:grid-cols-3">
			<div v-for="{ name, role } in team.exco" :key="name" class="mt-5">
				<span>
					<b class="font-cubano text-xl font-medium">{{ name }}</b>
					<br>
					{{ role }}
				</span>
			</div>
		</div>
	</div>
</template>
