<template>
    <div class="flex flex-col">
        <label>{{props.label}}</label>
        <div>
            <input type="text" :placeholder="props.preInput">
            <AtomButton :text="props.buttonName" />
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        label: String,
        preInput: String,
        buttonName: {
            type: String,
            required: false,
            default: "Enter"
        },
    })
</script>
