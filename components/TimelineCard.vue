<script setup lang="ts">
const props = defineProps({
	imageUrl: {
		type: String,
		default: '/landing/hero.svg',
	},
	classUrl: {
		type: String,
		default: 'https://np-overflow.club',
	},
	date: {
		type: String,
		default: new Date().toUTCString(),
	},
	name: {
		type: String,
		default: 'Workshop name',
	},
	description: {
		type: String,
		default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque neque nam enim similique sapiente voluptate.',
	},
})

const { data: meta } = await useAsyncData('meta', () => queryContent('meta').findOne())

const parsedDate = computed(() => {
	const dateObj = new Date(props.date)
	const month = dateObj.getUTCMonth() + 1
	const day = dateObj.getUTCDate()
	return { month, day }
})
</script>

<template>
	<div class="flex">
		<div class="hidden w-1/2 justify-center py-3 pr-3 sm:flex sm:py-6 sm:pr-6">
			<div class="card card-compact rounded-xl">
				<div class="card-body">
					<img class="mx-auto w-full rounded" :src="props.imageUrl">
					<div class="card-actions relative flex-nowrap items-center">
						<div class="w-1/2">
							<NuxtLink
								:to="props.classUrl"
								class="btn-accent btn-sm btn w-full rounded font-cubano text-xs text-white"
							>
								Learn more
							</NuxtLink>
						</div>
						<div class="inline-flex w-1/2 justify-evenly">
							<NuxtLink :to="meta.discord_url" class="btn-ghost btn">
								<Icon size="24" name="akar-icons:discord-fill" />
							</NuxtLink>
							<NuxtLink :to="meta.instagram_url" class="btn-ghost btn">
								<Icon size="24" name="ant-design:instagram-filled" />
							</NuxtLink>
							<div class="btn-ghost btn">
								<Icon size="24" name="heroicons:share-20-solid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="right-card relative flex flex-col justify-center gap-4 border-l-2 border-base-content py-3 pl-3 sm:w-1/2 sm:py-6 sm:pl-6"
		>
			<div class="space-y-4">
				<div class="">
					<time class="mb-1 font-cubano text-2xl font-semibold">{{ parsedDate.day }}/{{ parsedDate.month }}</time>
					<h3 class="mb-2 font-cubano text-lg">
						{{ props.name }}
					</h3>
					<p class="mb-4 text-base-content/60">
						{{ props.description }}
					</p>
				</div>
				<div class="card card-compact rounded-xl sm:hidden">
					<div class="card-body">
						<img class="mx-auto w-full rounded" :src="props.imageUrl">
						<div class="card-actions relative flex-nowrap items-center">
							<div class="w-1/2">
								<NuxtLink
									:to="classUrl"
									class="btn-accent btn-sm btn w-full rounded font-cubano text-xs font-medium text-white"
								>
									Learn more
								</NuxtLink>
							</div>
							<div class="flex w-1/2 justify-evenly">
								<NuxtLink :to="meta.discord_url" class="btn-ghost btn px-0">
									<Icon size="24" name="akar-icons:discord-fill" />
								</NuxtLink>
								<NuxtLink :to="meta.instagram_url" class="btn-ghost btn px-0">
									<Icon size="24" name="ant-design:instagram-filled" />
								</NuxtLink>
								<div class="btn-ghost btn px-0">
									<Icon size="24" name="heroicons:share-20-solid" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
    .right-card::after {
        @apply content-default rounded-full w-4 h-4 bg-base-100 border-2 border-base-content absolute top-5 sm:top-card-offset;
        left: -9px;
    }

	.card-body::before {
		@apply content-default p-px absolute inset-0;
		border-radius: inherit;
		background: linear-gradient(#ffffff15, rgba(255, 255, 255, .0) 120%);
		mask: linear-gradient(black, black) content-box content-box, linear-gradient(black, black);
		-webkit-mask-composite: xor;
	}

	.card-body {
		background: radial-gradient(ellipse at center,rgba(0, 225, 244, 0.15), rgba(255, 255, 255 ,0))
	}

	html[data-theme="light"] .card-body::before {
		background: linear-gradient(#00000015, rgba(160, 160, 160, .0) 120%);
		mask: linear-gradient(white, white) content-box content-box, linear-gradient(white, white);
	}
	html[data-theme="light"] .card-body {
		background: radial-gradient(ellipse at center,rgba(211, 105, 53, 0.3), rgba(0, 0, 0 ,0))
	}
</style>
