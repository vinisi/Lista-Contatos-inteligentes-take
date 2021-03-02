<template>
    <div>
        <img class="favorite-icon" :src="src" @click="isFavorite(bot)">
        <router-link :to="'details/details/'+bot.shortName">
            <my-image class="bot-img" :src="bot.image" :alt="bot.description"/>                        
        </router-link>
        <p class="bot-name">{{ bot.name }}</p>
        <p class="bot-date">{{ bot.created.substr(0, 10).split('-').reverse().join('/') }}</p>
    </div>
</template>

<script>

import Image from '../shared/image/Image';

    export default {
        props: {
            bot:{
                type: Object,
                required: true
            },
            src:{
                required: true
            }
        },        
        components:{
            'my-image': Image
        },        
        data (){
            return{

            }
        },
        methods:{
            isFavorite(bot){
                if(bot.template == 'master'){
                    bot.template = 'favorite';
                }else{
                    bot.template = 'master';
                }                
            }        
        }
    }
</script>
<style lang="scss" src="./style.scss" scoped>

</style>