import Home from '@/vue/Home'
import Company from '@/vue/Company'
import Business from '@/vue/Business'
import Portfolio from '@/vue/Portfolio'
import Customer from '@/vue/Customer'
import Greeting from '@/vue/company/Greeting'
import Directions from '@/vue/company/Directions'
import EstimateRequest from '@/vue/customer/EstimateRequest'
import NoticeBoard from '@/vue/customer/NoticeBoard'
import Admin from '@/vue/Admin'
import AdminLogin from '@/vue/admin/Login'
import WriteNotice from '@/vue/admin/WriteNotice'
import NoticeDetail from '@/vue/customer/NoticeDetail'

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
        redirect: '/company/greeting',
        component: Company,
        children: [
            {
                path: 'greeting',
                component: Greeting,
                name: 'companyGreeting'
            },
            {
                path: 'directions',
                component: Directions,
                name: 'companyDirections'
            }
        ]
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
        redirect: '/customer/notice',
        component: Customer,
        children: [
            {
                path: 'estimate',
                component: EstimateRequest,
                name: 'customerEstimate'
            },
            {
                path: 'notice',
                component: NoticeBoard,
                name: 'customerNotice'
            },
            {
                path: 'noticedetail',
                component: NoticeDetail,
                name: 'NoticeDetail'
            }
        ]
    },
    {
        path: '/admin',
        component: Admin,
        redirect: '/admin/login',
        children: [
            {
                path: 'login',
                component: AdminLogin,
                name: 'adminLogin'
            },
            {
                path: 'write',
                component: WriteNotice,
                name: 'writeNotice'
            }
        ]
    }
];

export default routes;