<script setup lang="ts">
import { useAsyncData } from '#app'
import { queryContent } from '#imports'

const { data: meta } = await useAsyncData('meta', () => queryContent('/meta').findOne())
const { data: landing } = await useAsyncData('landing', () => queryContent('/landing').findOne())
const { data: workshops } = await useAsyncData('workshops', () => queryContent('/workshops').findOne())
</script>

<template>
	<div class="hero">
		<div class="hero-content p-6 grid grid-cols-1 md:grid-cols-2">
			<div class="card card-compact md:card-normal rounded-md">
				<div class="card-body">
					<h1 class="text-5xl font-cubano">
						Inspiring
						<span
							class="text-transparent bg-clip-text bg-gradient-to-tr from-amber-500 to-pink-500"
						>
							Tech
						</span>
						talent everyday
					</h1>
					<p class="whitespace-pre-line mt-4">
						Overflow is a breeding ground for creators.
						We provide opportunities to pick up skills &
						an outlet to exhibit
						<span class="font-bold">
							your very own creations
						</span>
					</p>
					<div class="card-action mt-8">
						<NuxtLink
							:to="meta.join_url"
							class="btn btn-sm btn-outline btn-accent font-bold border-3 rounded"
						>
							Join Us!
						</NuxtLink>
					</div>
				</div>
			</div>

			<img class="w-full md:w-2/3 mx-auto" :src="landing.hero.img_url">
		</div>
	</div>
	<div>
		<Timeline title="New Workshops" subtitle="New Workshops & Updates every week">
			<template #icon>
				<span class="flex items-center justify-center rounded-full w-9 h-9 bg-gradient-to-t from-salmon to-goldenrod">
					<Icon name="heroicons:megaphone-20-solid" size="24" class="-rotate-45 text-white" />
				</span>
			</template>
			<template #content>
				<TimelineCard v-for="{ name, start_date } in workshops.workshops" :key="name" :title="name" :date="start_date" />
			</template>
		</Timeline>
		<Timeline title="Upcoming Bootcamps" subtitle="send help">
			<template #icon>
				<span class="flex items-center justify-center rounded-full w-9 h-9 bg-gradient-to-t from-purple-500 to-pink-500">
					<Icon name="fluent:tent-16-filled" size="24" class="text-white" />
				</span>
			</template>
			<template #content>
				<TimelineCard v-for="{ name, start_date } in workshops.workshops" :key="name" :title="name" :date="start_date" />
			</template>
		</Timeline>
	</div>
</template>
