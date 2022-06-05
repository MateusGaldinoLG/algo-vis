<template>
    <div>
        <MoleculeNavBar :current-page="`Sort`"/>
        <nuxt-link to="/sort/quick_sort">Quick sort</nuxt-link>
    </div>
</template>

<script setup>
definePageMeta({
    title: "AlgoVis - Sort"
})
</script>