<template>
  <div>
    <AtomHeading :title="title" />
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()

const title = route.meta.title
</script>
