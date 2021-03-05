<template>    
    <!-- componente home reponsável exibir o input de busca, botões de busca e opção de ordenação -->
    <div class="home">
        <div class="header">
            <div class="header-left">
                <p class="title">{{ title }}</p>
            </div>
            <div class="header-right">
                <input class="input" type="search" @input="filter = $event.target.value" placeholder="Search" />
                <my-button :title="'Order by Name'" :type="'text'"  :class="'btn'" @customClick="orderByName()" />
                <my-button :title="'Order by Creation'" :type="'text'"  :class="'btn'" @customClick="orderByCreation()" />
                <my-image :class="'imageStyle'" :src="imageCardsSrc" :alt="imageCardsalt" @customClick="showCard()" /> 
                <my-image :class="'imageStyle'" :src="imageListsSrc" :alt="imageListalt" @customClick="showList()" />           
            </div>
        </div>
        <div class="clear-both"></div>
        <div class="list-bot">
            <p class="title">Favorities</p>
            <ul :class="botItemClassStyle" class="row">                
                <li :class="botColStyle" v-for="(bot, index) of filteredFavoriteBots" :key="'F'+index">      
                    <my-bot 
                        :bot="bot"
                        :src="imgStar"
                        @customClick="isFavorite(bot)"
                    />
                </li>       
                <p class="line"></p>  
                <li :class="botColStyle" v-for="(bot, index) of filteredNotFavoriteBots" :key="index" >      
                    <my-bot 
                        :bot="bot"
                        :src="imgNotFavorite"
                        @customClick="isFavorite(bot)"
                    />
                </li>                       
            </ul>         
        </div>
        <div class="add-bot">
            <my-image class="add-img" :src="addBotImageSrc" :alt="addBotImageAlt"/>
        </div>        
    </div>
</template>

<script>

import Image from '../shared/image/Image';
import Button from '../shared/button/Button';
import json from '../../assets/resources/data.json';
import botCard from '../../components/bot/Bot-card';
import { routes } from '../../routes';

export default {  
    components:{
        'my-image': Image,
        'my-bot': botCard,
        'my-button': Button
    },
    data () {
        return {
            title: 'My Chatbots',
            inputType: 'search',
            inputStyle: 'input-class',
            inputPlaceholder: 'Search',   
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
        // Método para verificar e definir se um bot é favorito ou não
        isFavorite(bot){
            if(bot.favorite === undefined){
                bot.favorite = 'favorite';
            }else{
                bot.favorite = undefined;
            }  
            this.orderByName();          
        },         
        // Método para trocar a classe e exibir os bots em forma de box
        showCard(){
            this.botItemClassStyle = 'card-bot-item';
            this.botColStyle = 'col-xl-2';
        },
        // Método para trocar a classe e exibir os bots em forma de lista
        showList(){
            this.botItemClassStyle = 'list-bot-item';
            this.botColStyle = 'col-xl-11';
        },    
        // Ordena os bots por nome
        orderByName(){
            return this.bots.sort((t1,t2) => t1.name.toLowerCase() < t2.name.toLowerCase() ? -1 : 1);
        },
        // ordena os bots por ordem de criação
        orderByCreation(){
            return this.bots.sort((t1,t2) => t1.created < t2.created ? -1 : 1);
        }                                  
    },
    computed:{
        // Carrega todos os bots definidos como favoritos
        filteredFavoriteBots(){
            if(this.filter){
                let exp = new RegExp(this.filter.trim(), 'i');
                let filtered = this.bots.filter(bot => exp.test(bot.shortName));
                return filtered.filter(bot => bot.favorite === 'favorite');
            }else{
                return this.bots.filter(bot => bot.favorite === 'favorite');
            }
        },
        // Carrega todos os bots definidos não favoritos
        filteredNotFavoriteBots(){
            if(this.filter){
                let exp = new RegExp(this.filter.trim(), 'i');
                let filtered = this.bots.filter(bot => exp.test(bot.shortName));
                return filtered.filter(bot => bot.favorite === undefined);
            }else{
                return this.bots.filter(bot => bot.favorite === undefined);
            }
        }          
    },
}
</script>

<style lang="scss" src="./style.scss" scoped >

</style>
