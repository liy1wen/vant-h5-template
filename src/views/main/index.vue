<template>
    <div>
        <router-view />
        <van-tabbar route active-color="#ee0a24" inactive-color="#000">
            <van-tabbar-item replace to="/home" class="iconfont icon-shouye1"><span class="tab-title">首页</span></van-tabbar-item>
            <van-tabbar-item replace to="/store" class="iconfont icon-shangcheng"><span class="tab-title">商城</span></van-tabbar-item>
            <van-tabbar-item replace to="/shopcar" class="iconfont icon-coin"><span class="tab-title">购物车</span></van-tabbar-item>
            <van-tabbar-item replace to="/my" class="iconfont icon-wode"><span class="tab-title">我的</span></van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
        };
    }, 
    created() {
        
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
    .iconfont {
        font-size: .6rem;
        // display: flex;
        line-height: .7;
    }
    .tab-title{
        font-size: .4rem;
    }
</style>