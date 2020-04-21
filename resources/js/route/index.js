import AccountCreated from '../components/pages/AccountCreated.vue';
import AccountActivated from '../components/pages/AccountActivated.vue';
import HomePage from '../components/pages/HomePage.vue';
import GalleryPage from '../components/pages/GalleryPage.vue';
import AboutPage from '../components/pages/AboutPage.vue';
import AdminLoginPage from '../components/auth/AdminLoginPage.vue';
import DashboardPage from '../components/auth/DashboardPage.vue';
import Logout from '../components/auth/Logout.vue';
 
export const routes = [
{ 
    path: '/',
    name: 'home',
    component: HomePage,
    meta:{
        // progress:{
        //     func:[
        //         {call:'color',modifier:'temp',argument:'#ffb000'},
        //         {call:'fail',modifier:'temp',argument:'red'},
        //         {call:'location',modifier:'temp',argument:'top'},
        //         // {call:'color',modifier:'temp',argument:'#ffb000'},
        //     ]
        //}
    }
},
{ 
    path: '/about',
    name: 'about',
    component: AboutPage
},
{ 
    path: '/gallery',
    name: 'gallery',
    component: GalleryPage
},
{ 
    path: '/admin/exclusive',
    name: 'admin',
    component: AdminLoginPage,
    meta:{
        requiresVisitor:true,            
    }
},
{ 
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    meta:{
        requiresAuth:true,            
    }
},
{ 
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta:{
        requiresAuth:true,            
    }
},
// { 
//     path: '/about',
//     name: 'about',
//     component:About,
//     meta:{
//         requiresAuth:false,
//     }
// },
{ 
    path: '/account/created/success', 
    name: 'account-success', 
    component: AccountCreated 
},
{ 
    path: '/account/activated/success',
    name: 'activated-success',
    component: AccountActivated 
},
];
