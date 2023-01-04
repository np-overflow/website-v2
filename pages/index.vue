<script setup lang="ts">
useHead({
    meta: [
        {
            property: 'og:title', content: 'Overflow SIG',
        },
        {
            property: 'og:description',
            content: 'The Programming and Technology Special Interest Group of Ngee Ann Polytechnic.',
        },
        {
            property: 'og:image', content: 'https://og.np-overflow.club/api/landing',
        },
        {
            property: 'twitter:image', content: 'https://og.np-overflow.club/api/landing',
        },
    ],
})

const {data: meta} = useMeta()
const {data: landing} = useLanding()
const {data: workshops} = useWorkshops()
</script>

<template>
    <div>
        <div class="hero">
            <div class="hero-content grid grid-cols-1 p-6 md:grid-cols-2">
                <div class="card card-compact rounded-md md:card-normal">
                    <div class="card-body">
                        <h1 class="font-cubano text-5xl">
                            Inspiring
                            <span class="bg-gradient-to-tr from-amber-500 to-pink-500 bg-clip-text text-transparent">
								Tech
							</span>
                            talent everyday
                        </h1>
                        <p class="mt-4 whitespace-pre-line">
                            Overflow is a breeding ground for creators.
                            We provide opportunities to pick up skills &
                            an outlet to exhibit
                            <span class="font-bold">
								your very own creations
							</span>
                        </p>
                        <div class="card-action mt-8">
                            <NuxtLink :to="meta?.join_url"
                                      class="border-3 btn-accent btn rounded text-lg font-bold text-white">
                                Join Us!
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <img class="mx-auto w-full md:w-2/3" :src="landing?.hero.img_url">
            </div>
        </div>
        <div id="workshops">
            <Timeline title="New Workshops" subtitle="New workshops & updates every week!">
                <template #icon>
					<span
                        class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-t from-salmon to-goldenrod">
						<Icon name="heroicons:megaphone-20-solid" size="24" class="-rotate-45 text-white"/>
					</span>
                </template>

                <TimelineCard v-for="workshop in workshops?.workshops" :key="workshop.name" v-bind="workshop"
                              :image-url="workshop.image"
                              :date="workshop.start_date"/>
            </Timeline>

            <!--            <Timeline title="Upcoming Bootcamps" subtitle="Join our multi-day bootcamps and have fun!">-->
            <!--                <template #icon>-->
            <!--					<span-->
            <!--                        class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-t from-purple-500 to-pink-500">-->
            <!--						<Icon name="fluent:tent-16-filled" size="24" class="text-white"/>-->
            <!--					</span>-->
            <!--                </template>-->

            <!--                <TimelineCard v-for="workshop in workshops?.workshops" :key="workshop.name" v-bind="workshop"-->
            <!--                              :date="workshop.start_date"/>-->
            <!--            </Timeline>-->
        </div>
    </div>
</template>
