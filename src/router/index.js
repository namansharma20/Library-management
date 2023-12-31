import { createRouter ,createWebHistory } from "vue-router";
import HomeView from '../components/HomeView.vue';
import MainLogin from '../components/MainLogin.vue';
import UserHome from '../components/UserHome.vue';
import AdminHome from '../components/AdminHome.vue';
import BookDetails from '../components/BookDetails.vue';
const router= createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                name:'Home',
                path:'/',
                component:HomeView,
            },
            {
                name:'Login',
                path:'/login',
                component:MainLogin,
            },
            {
                name:'UserHome',
                path:'/user/:username',
                component:UserHome,
            },
            {
                name:'AdminHome',
                path:'/admin/:admin',
                component:AdminHome,
            },
            {
                name:'BookDetails',
                path:'/bookdetail/:bookid',
                component:BookDetails,
            }
        ]
    })

    export default router;