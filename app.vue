<script setup lang="ts">
useHead({
	titleTemplate: (productCategory) => {
		return productCategory
			? `${productCategory} - NP Overflow`
			: 'NP Overflow'
	},
})
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
