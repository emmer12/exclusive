import AccountCreated from '../components/pages/AccountCreated.vue';
import AccountActivated from '../components/pages/AccountActivated.vue';
import HomePage from '../components/pages/HomePage.vue';
<<<<<<< HEAD
import GalleryPage from '../components/pages/GalleryPage.vue';
import AboutPage from '../components/pages/AboutPage.vue';
import AdminLoginPage from '../components/auth/AdminLoginPage.vue';
=======
import AboutPage from '../components/pages/AboutPage.vue';
>>>>>>> 3b20313a7b1fcebf162ed0cd2ee25a6a7dbe75e8
 
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
<<<<<<< HEAD

{ 
    path: '/gallery',
    name: 'gallery',
    component: GalleryPage
},
{ 
    path: '/admin/exclusive',
    name: 'admin',
    component: AdminLoginPage
},
=======
>>>>>>> 3b20313a7b1fcebf162ed0cd2ee25a6a7dbe75e8
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
