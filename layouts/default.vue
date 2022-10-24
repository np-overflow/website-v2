<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>
<template>
    <div>
        {{ data }}
    </div>
</template>
