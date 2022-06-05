<template>
    <div>
        <MoleculeNavBar :current-page="`Sort`"/>
        <MoleculeInput :label="'Insert the array here [separated by blank spaces]'" :pre-input="'1 2 3 4 ...'" :button-name="'enter'" />
    </div>
</template>

<script setup>
definePageMeta({
    title: "AlgoVis - Quicksort"
})
</script>