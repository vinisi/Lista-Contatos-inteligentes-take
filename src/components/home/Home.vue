<template>    
    <div class="home">
        <div class="header">
            <div class="row">
                <div class="col-xl-6">
                    <span class="title">{{ title }}</span>
                </div>
                <div class="col-xl-6">
                    <input class="input" type="search" @input="filter = $event.target.value" placeholder="Search">
                    <button :type="buttonType"  :class="buttonStyle" @click="orderByName()" >{{ buttonOrderByNameTitle }}</button>
                    <button :type="buttonType"  :class="buttonStyle" @click="orderByCreation()" >{{ buttonOrderByCreationTitle }}</button>            
                    <img :class="imageStyle" :src="imageCardsSrc" :alt="imageCardsalt" @click="showCard()" /> 
                    <img :class="imageStyle" :src="imageListsSrc" :alt="imageListalt" @click="showList()" />           
                </div>
            </div>
        </div>
        <div :class="botItemClassStyle" class="list-bot">
            <p class="title">Favorities</p>
            <ul class="row">                
                <li :class="botColStyle" v-for="bot of filteredFavoriteBots" :key="bot" v-show="bot.template === 'favorite'">      
                        <img class="favorite-icon" :src="imgStar" @click="isFavorite(bot)">
                        <router-link :to="'details/'+bot.shortName">
                            <my-image class="bot-img" :src="bot.image" :alt="bot.description"/>                        
                        </router-link>
                        <p class="bot-name">{{ bot.name }}</p>
                        <p class="bot-date">{{ bot.created.substr(0, 10).split('-').reverse().join('/') }}</p>

                </li>       
                <p class="line"></p>  
                <li :class="botColStyle" v-for="bot of filteredNotFavoriteBots" :key="bot" v-show="bot.template === 'master'">      
                        <img class="favorite-icon" :src="imgNotFavorite" @click="isFavorite(bot)">
                        <router-link :to="'details/'+bot.shortName">
                            <my-image class="bot-img" :src="bot.image" :alt="bot.description"/>                        
                        </router-link>
                        <p class="bot-name">{{ bot.name }}</p>
                        <p class="bot-date">{{ bot.created.substr(0, 10).split('-').reverse().join('/') }}</p>

                </li>                       
            </ul>         
        </div>
        <div class="add-bot">
            <my-image class="add-img" :src="addBotImageSrc" :alt="addBotImageAlt"/>
        </div>        
    </div>
</template>

<script>

import Image from '../shared/Image';
import json from '../../assets/resources/data.json';
import { routes } from '../../routes';

export default {  
    components:{
        'my-image': Image,
    },
    data () {
        return {
            title: 'My Chatbots',
            inputType: 'search',
            inputStyle: 'input-class',
            inputPlaceholder: 'Search',
            buttonType: 'search',
            buttonStyle: 'btn',        
            buttonOrderByNameTitle: 'Order by Name',
            buttonOrderByCreationTitle: 'Order by Creation',
            imageStyle: 'imageStyle',
            imageCardsSrc: require('../../assets/images/organize-blocks.png'),
            imageCardsalt: 'Show in card mode',
            imageListsSrc: require('../../assets/images/organize-list.png'),
            imageListalt: 'Show in list mode',
            addBotImageSrc: require('../../assets/images/add.png'),
            addBotImageAlt: 'Add Bot',            
            filter: '',
            bots: json,
            botItemClassStyle: 'card-bot-item',
            routes,
            botColStyle: 'col-xl-2',            
            imgNotFavorite: require('../../assets/images/favorite.png'),
            imgStar: require('../../assets/images/star.png')        
        }  
    },
    methods:{
        isFavorite(bot){
            if(bot.template == 'master'){
                bot.template = 'favorite';
            }else{
                bot.template = 'master';
            }
            
        },
        mounted() {
            this.imgs = Array(3).fill(this.imgPath1);
        },        
        showCard(){
            this.botItemClassStyle = 'card-bot-item';
            this.botColStyle = 'col-xl-2';
        },
        showList(){
            this.botItemClassStyle = 'list-bot-item';
            this.botColStyle = 'col-xl-11';
        },    
        orderByName(){
            return this.bots.sort((t1,t2) => t1.name.toLowerCase() < t2.name.toLowerCase() ? -1 : 1);
        },
        orderByCreation(){
            return this.bots.sort((t1,t2) => t1.created < t2.created ? -1 : 1);
        }                                    
    },
    computed:{
        filteredFavoriteBots(){
            if(this.filter){
                let exp = new RegExp(this.filter.trim(), 'i');
                return this.bots.filter(bot => exp.test(bot.shortName));
            }else{
                return this.bots;
            }
        },
        filteredNotFavoriteBots(){
            if(this.filter){
                let exp = new RegExp(this.filter.trim(), 'i');
                return this.bots.filter(bot => exp.test(bot.shortName));
            }else{
                return this.bots;
            }
        }          
    },
}
</script>

<style lang="scss" src="./style.scss" scoped >

</style>
