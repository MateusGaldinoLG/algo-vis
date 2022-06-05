<template>
    <button :class="styling">
        {{props.text}}        
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String,
    color: {
        type: String,
        required: false,
        default: 'bg-green-600 hover:bg-green-500'
    },
    fontStyle: {
        type: String,
        required: false,
        default: 'font-medium text-white hover:text-slate-50'
    },
    spaces: {
        type: String,
        required: false,
        default: 'm-2 rounded p-2'
    },
    border: {
        type: String,
        required: false,
        default: 'hover:border-solid hover:border hover:divide-blue-400 hover:m-1.5'
    }
})

let styling: string = `${props.spaces} ${props.color} ${props.border} ${props.fontStyle}`
</script>