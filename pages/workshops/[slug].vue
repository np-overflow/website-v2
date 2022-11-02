<script setup lang="ts">
const route = useRoute()
const { data: workshop } = await useAsyncData(`workshops-${route.params.slug}`, async () => {
	const { workshops } = await queryContent('workshops').findOne()
	return workshops.find(workshop => workshop.slug === route.params.slug)
})

if (workshop.value) {
	useHead({
		meta: [
			{
				property: 'og:title', content: `${workshop.value.name} - NP Overflow`,
			},
			{
				property: 'og:description', content: 'The Programming and Technology Special Interest Group of Ngee Ann Polytechnic.',
			},
			{
				property: 'og:image', content: `https://og.np-overflow.club/api/workshops?slug=${workshop.value.slug}`,
			},
			{
				property: 'twitter:image', content: 'https://og.np-overflow.club/api/landing',
			},
		],
	})
}
</script>

<template>
	<div />
</template>
