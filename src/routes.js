import Home from './components/home/Home.vue';
import Details from './components/details/Details.vue';


export const routes = [
    {
        path: '/', 
        component: Home, 
        title: 'Home'
    },
    {
        path: '/Details/:id', 
        component: Details, 
        title: 'Details',
        props: (route) => ({
            id: route.query.id
        })
    }
];