<template>
    <div class="flex flex-col items-center w-full gap-4 font-poppins">
        <span class="flex items-center justify-center rounded-full w-9 h-9 bg-gradient-to-t from-amber-500 to-pink-500">
            <Icon name="heroicons:megaphone-20-solid" size="24" class="-rotate-45"/>
        </span>
        <h1 class="font-cubano text-2xl">New Workshops</h1>
        <h3 class="text-gray-300 text-xs">New Workshops & Updates every week</h3>
        <div class="flex flex-col w-full p-6 sm:justify-center">
            <slot />
        </div>
    </div>
</template>