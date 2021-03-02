<template>
    <div>                                  
        <my-top /> 
        <transition>    
             <router-view></router-view>
        </transition>   
        <my-footer />
           
        
    </div>
</template>

<script>
import { routes } from './routes';
import Top from './components/shared/top/Top';
import Footer from './components/shared/footer/Footer';

export default {
    components:{        
        'my-top': Top,
        'my-footer': Footer,
    },
    data(){
        return{
            routes
        }
    }
}
</script>

<style lang="scss" src="./style.scss">

</style>
