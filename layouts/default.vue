<script setup lang="ts">
import {useAsyncData} from "#app";
import {queryContent} from '#imports'

const {data: meta} = await useAsyncData('meta', () => queryContent('/meta').findOne())
</script>
<template>
    <div class="navbar bg-primary">
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
</template>
