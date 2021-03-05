<template>    
    <!-- componente imagem reponsável por carregar e definir o padrão de todas as imagens -->
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