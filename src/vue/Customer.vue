<template>
    <div>
        <h3>고객센터 CUSTOMER</h3>
        <b-nav tabs>
            <!--<b-nav-item to="/customer/notice"-->
                        <!--&gt;공지사항</b-nav-item>&lt;!&ndash; :class="routeName === 'companyGreeting' ? 'active' : ''" &ndash;&gt;-->
            <b-nav-item to="/customer/estimate"
                        >견적문의</b-nav-item><!-- :class="routeName === 'companyDirections' ? 'active' : ''" -->
        </b-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Customer'
    }
</script>