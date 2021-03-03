<template>
    <div>                                  
        <my-header /> 
        <div class="container">        
            <transition>    
                <router-view></router-view>
            </transition>   
        </div>
        <my-footer />    
    </div>
</template>

<script>
import { routes } from './routes';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';

export default {
    components:{        
        'my-header': Header,
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
