<template>
    <nav class="bg-gray-800 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div>
                <h1 class="text-white text-2xl font-medium">Algorithmic Visualization</h1>
            </div>
            <div class="space-x-8 hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                    <NuxtLink v-for="page in defaultPages" :to="page.link" :class="page.css">{{page.name}}</NuxtLink>
                </div>
            </div>
            <div class="flex lg:hidden">
                <svg src="../../assets/three-bars.svg" alt="menu"></svg>
            </div>
    </nav>
</template>

<script setup>
const props = defineProps({
    currentPage: String
})
const defaultPages = [
    {name: "Home", link:"/"},
    {name: "Sort", link:"/sort"},
    {name: "Graphs", link:"/graphs"},
    {name: "About", link:"/about"},
]
const currentPageStyle = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
const adjacentPageStyle = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

defaultPages.map((page) => page.name  === props.currentPage ? page.css = currentPageStyle : page.css = adjacentPageStyle)

</script>