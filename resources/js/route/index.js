import AccountCreated from '../components/pages/AccountCreated.vue';
import AccountActivated from '../components/pages/AccountActivated.vue';
import HomePage from '../components/pages/HomePage.vue';
import AboutPage from '../components/pages/AboutPage.vue';
 
export const routes = [
{ 
    path: '/',
    name: 'home',
    component: HomePage
},
{ 
    path: '/about',
    name: 'about',
    component: AboutPage
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