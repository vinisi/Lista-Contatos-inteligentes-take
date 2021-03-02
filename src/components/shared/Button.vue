<template>
    <button :type="type" :class="classStyle">{{ title }}</button>
</template>

<script>
export default {
    props: ['type', 'classStyle', 'title']
}
</script>

<style>

</style>