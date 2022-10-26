<script setup lang="ts">
    const { isLeft } = withDefaults(defineProps<{
        isLeft?: boolean
    }>(), {
        isLeft: false
    })
</script>

<template>
    <div class="flex">
        <div class="hidden sm:flex justify-center mr-2 w-1/2 p-4">        
            <div class="card card-compact bg-neutral rounded-md">
                <div class="card-body">
                    <img class="w-full mx-auto rounded" :src="'/landing/hero.webp'">
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
        <div class="flex flex-col items-center justify-center relative right-card gap-4 border-l-2 sm:w-1/2">
            <div class="ml-6 space-y-4">
                <div class="card card-compact bg-neutral rounded-md sm:hidden">
                    <div class="card-body">
                        <img class="w-full mx-auto rounded" :src="'/landing/hero.webp'">
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
                <div class="">
                    <time class="mb-1 text-2xl font-cubano font-semibold">28/10</time>
                    <h3 class="text-lg font-cubano">UI/UX Fundamentals</h3>
                    <p class="mb-4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cumque neque nam enim similique sapiente voluptate.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .right-card::after {
        @apply content-default rounded-full w-4 h-4 bg-base-100 border-2 border-white absolute;
        left: -9px;
        top: calc(50% - 8px);
    }
</style>       