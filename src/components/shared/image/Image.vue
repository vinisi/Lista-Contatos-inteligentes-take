<template>    
    <img @click="customClick()" :class="classStyle" :src="src" :title="title">
</template>

<script>

export default {  
    props: ['classStyle', 'src', 'title'],
    methods: {

        customClick() {
            this.$emit('customClick');
        }
    },            
}
</script>

<style>

</style>