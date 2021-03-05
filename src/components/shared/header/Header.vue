<template>    
        <!-- Componente header, exibe a logo e o topo do site -->
        <header class="top">
            <router-link :to="'/'">
              <my-image :classStyle="classStyle" :src="src" :alt="alt"/>
            </router-link>
        </header>
</template>

<script>

import Image from '../image/Image';

export default {  
    components:{
        'my-image': Image
    },
  data () {
    return {
        classStyle: '.top',
        src: require('../../../assets/images/logo.png'),
        alt: 'Logo Take Blip'
    }
  }      
}
</script>

<style lang="scss" src="./style.scss" scoped>

</style>