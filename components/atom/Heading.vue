<template>
    <div>
    <Head>
      <Title>{{props.title}}</Title>
    </Head>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String
    })

    useHead({
        titleTemplate: (title) => title,
    })
</script>