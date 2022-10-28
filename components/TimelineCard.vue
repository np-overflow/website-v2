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
		<div class="hidden sm:flex justify-center w-1/2 pr-3 py-3 sm:py-6 sm:pr-6">
			<div class="card card-compact bg-neutral rounded-md">
				<div class="card-body">
					<img class="w-full mx-auto rounded" :src="props.imageUrl">
					<div class="card-actions items-center flex-nowrap">
						<div class="w-1/2">
							<NuxtLink
								:to="props.classUrl"
								class="btn btn-accent btn-sm rounded font-cubano text-xs w-full"
							>
								Learn more
							</NuxtLink>
						</div>
						<div class="inline-flex w-1/2 justify-evenly">
							<NuxtLink
								:to="meta.discord_url"
								class="btn btn-ghost"
							>
								<Icon size="24" name="akar-icons:discord-fill" />
							</NuxtLink>
							<NuxtLink
								:to="meta.instagram_url"
								class="btn btn-ghost"
							>
								<Icon size="24" name="ant-design:instagram-filled" />
							</NuxtLink>
							<div class="btn btn-ghost">
								<Icon size="24" name="heroicons:share-20-solid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-center relative right-card gap-4 border-l-2 border-base-content pl-3 py-3 sm:py-6 sm:pl-6 sm:w-1/2">
			<div class="space-y-4">
				<div class="">
					<time class="mb-1 text-2xl font-cubano font-semibold">{{ parsedDate.day }}/{{ parsedDate.month }}</time>
					<h3 class="text-lg font-cubano">
						{{ props.name }}
					</h3>
					<p class="mb-4 text-base-content/60">
						{{ props.description }}
					</p>
				</div>
				<div class="card card-compact bg-neutral rounded-md sm:hidden">
					<div class="card-body">
						<img class="w-full mx-auto rounded" src="/landing/hero.svg">
						<div class="card-actions items-center flex-nowrap">
							<div class="w-1/2">
								<NuxtLink
									:to="classUrl"
									class="btn btn-accent btn-sm rounded font-cubano text-xs w-full"
								>
									Learn more
								</NuxtLink>
							</div>
							<div class="flex w-1/2 justify-evenly">
								<NuxtLink
									:to="meta.discord_url"
									class="btn btn-ghost px-0"
								>
									<Icon size="24" name="akar-icons:discord-fill" />
								</NuxtLink>
								<NuxtLink
									:to="meta.instagram_url"
									class="btn btn-ghost px-0"
								>
									<Icon size="24" name="ant-design:instagram-filled" />
								</NuxtLink>
								<div class="btn btn-ghost px-0">
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
        @apply content-default rounded-full w-4 h-4 bg-base-100 border-2 border-base-content absolute top-2 sm:top-card-offset;
        left: -9px;
    }
</style>
