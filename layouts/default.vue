<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/').find(), { server: false })
</script>
<template>
    <div>
        {{ data }}
    </div>
</template>
