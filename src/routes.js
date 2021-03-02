import Home from './components/home/Home.vue';
import Details from './components/bot/details/Details.vue';


export const routes = [
    {
        path: '/', 
        component: Home, 
        title: 'Home'
    },
    {
        path: '/Details/details/:id', 
        component: Details, 
        title: 'Details',
        props: (route) => ({
            id: route.query.id
        })
    }
];