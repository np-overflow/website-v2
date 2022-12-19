<script setup lang="ts">
import { useAsyncData } from '#app'
import { queryContent } from '#imports'

const { data: meta } = await useAsyncData('meta', () => queryContent('meta').findOne())
const { data: landing } = await useAsyncData('landing', () => queryContent('landing').findOne())
const { data: workshops } = await useAsyncData('workshops', () => queryContent('workshops').findOne())
</script>

<template>
  <div>
    {{ meta }}
    {{ landing }}
    {{ workshops }}
    <NuxtLink to="/team">button</NuxtLink>
  </div>
</template>
