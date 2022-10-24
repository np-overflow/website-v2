<script setup lang="ts">
import {useAsyncData} from "#app";
import {queryContent} from '#imports'

const {data: meta} = await useAsyncData('meta', () => queryContent('/meta').findOne())
</script>
<template>
    <div class="navbar bg-primary-100 font-cubano text-white">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost rounded lg:hidden">
                    <Icon size="26" name="heroicons:bars-3-bottom-left"/>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 bg-primary shadow rounded-md w-52">
                    <li v-for="{ name, to, icon } in meta.menu_items">
                        <NuxtLink :to="to" class="!rounded">
                            <Icon size="16" :name="icon" />
                            {{ name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <img alt="Overflow logo" width="50" height="50" :src="meta.logo_url"/>
            <a class="btn btn-ghost rounded normal-case text-xl">{{ meta.title }}</a>
        </div>

        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li v-for="{ name, to, icon } in meta.menu_items">
                    <NuxtLink :to="to" class="!rounded">
                        <Icon size="16" :name="icon" />
                        {{ name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <div class="navbar-end">
            <NuxtLink :to="meta.join_url" class="btn btn-ghost rounded">
                Join Us!
            </NuxtLink>
        </div>
    </div>
    <div class="hero">
        <div class="hero-content p-6 flex-col lg:flex-row-reverse">
            <div class="card rounded-md w-1/2 bg-primary-100">
                <div class="card-body">
                    <h1 class="text-2xl font-cubano">Inspiring <span class="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-pink-500">Tech</span> talent everyday</h1>
                    <p class="whitespace-pre-line mt-4">
                        Overflow is a breeding ground for creators. 
                        We provide opportunities to pick up skills & 
                        an outlet to exhibit <span class="font-bold">your very own creations</span> 
                    </p>
                    <div class="card-action mt-8">
                        <div class="btn btn-sm btn-outline btn-accent font-bold border-3 rounded">
                            <span class="text-white">Join Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
