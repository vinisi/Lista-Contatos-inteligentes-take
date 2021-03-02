<template>    
    <img :class="classStyle" :src="src" :title="title">
</template>

<script>

export default {  
    props: ['classStyle', 'src', 'title']        
}
</script>

<style>

</style>