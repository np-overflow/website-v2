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

<style>
/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * cubano:
 *   - http://typekit.com/eulas/00000000000000007735a084
 *
 * © 2009-2022 Adobe Systems Incorporated. All Rights Reserved.
 */
/*{"last_published":"2022-10-24 12:38:09 UTC"}*/

@import url("https://p.typekit.net/p.css?s=1&k=opk3ujt&ht=tk&f=15493&a=74340485&app=typekit&e=css");

@font-face {
	font-family: "cubano";
	src: url("https://use.typekit.net/af/a171c7/00000000000000007735a084/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"), url("https://use.typekit.net/af/a171c7/00000000000000007735a084/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"), url("https://use.typekit.net/af/a171c7/00000000000000007735a084/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
	font-display: auto;
	font-style: normal;
	font-weight: 400;
	font-stretch: normal;
}

.tk-cubano {
	font-family: "cubano", sans-serif;
}
</style>
