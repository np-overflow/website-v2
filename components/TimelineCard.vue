<script setup lang="ts">
    const { imageUrl, classUrl, date, title, description } = withDefaults(defineProps<{
        imageUrl?: string
        classUrl?: string
        date?: string
        title?: string
        description?: string
    }>(), {
        imageUrl: '/landing/hero.webp',
        classUrl: 'https://np-overflow.club',
        date: '1 January 1970 00:00:00',
        title: 'Workshop Title',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque neque nam enim similique sapiente voluptate.'
    })

    const dateObj = new Date(date);
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
</script>

<template>
    <div class="flex">
        <div class="hidden sm:flex justify-center w-1/2 p-6">        
            <div class="card card-compact bg-neutral rounded-md">
                <div class="card-body">
                    <img class="w-full mx-auto rounded" :src="imageUrl">
                    <div class="card-actions items-center flex-nowrap">
                        <div class="w-1/2">
                            <div class="btn btn-accent btn-sm rounded font-cubano text-xs w-full">Learn more</div>
                        </div>
                        <div class="inline-flex w-1/2 justify-evenly">
                            <Icon size="24" name="akar-icons:discord-fill"/>
                            <Icon size="24" name="ant-design:instagram-filled"/>
                            <Icon size="24" name="heroicons:share-20-solid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center relative right-card gap-4 border-l-2 border-base-content sm:w-1/2">
            <div class="pl-6 pb-6 space-y-4">
                <div class="">
                    <time class="mb-1 text-2xl font-cubano font-semibold">{{day}}/{{month}}</time>
                    <h3 class="text-lg font-cubano">{{title}}</h3>
                    <p class="mb-4 text-base-content/60">{{description}}</p>
                </div>
                <div class="card card-compact bg-neutral rounded-md sm:hidden">
                    <div class="card-body">
                        <img class="w-full mx-auto rounded" :src="'/landing/hero.webp'">
                        <div class="card-actions items-center flex-nowrap">
                            <div class="w-1/2">
                                <NuxtLink
                                    :to="classUrl"
                                    class="btn btn-accent btn-sm rounded font-cubano text-xs w-full"
                                >
                                    Learn more
                                </NuxtLink>
                            </div>
                            <div class="inline-flex w-1/2 justify-evenly">
                                <Icon size="24" name="akar-icons:discord-fill"/>
                                <Icon size="24" name="ant-design:instagram-filled"/>
                                <Icon size="24" name="heroicons:share-20-solid"/>
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