<template>
    <button @click="customClick()" :type="type" :class="classStyle">{{ title }} </button>
</template>

<script>
export default {
    props: ['type', 'classStyle', 'title'],
    methods: {

        customClick() {
            this.$emit('customClick');
        }
    },    
}
</script>

<style lang="scss" src="./style.scss" scoped>