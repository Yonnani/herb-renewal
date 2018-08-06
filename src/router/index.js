import Home from '@/vue/Home'
import Company from '@/vue/Company'
import Business from '@/vue/Business'
import Portfolio from '@/vue/Portfolio'
import Customer from '@/vue/Customer'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/company',
        component: Company
    },
    {
        path: '/business',
        component: Business
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/customer',
        component: Customer
    }
];

export default routes;