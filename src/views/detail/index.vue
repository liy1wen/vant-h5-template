<template>
    <div>
        <Header title="商品详情"/>
        <div class="content">
            <van-skeleton title :row="3" :loading="loading">
                <div class="box"></div>
            </van-skeleton>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    components: {
        Header
    },
    data() { 
        return {
            loading: true,
        };
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 500);
    },

}
</script>
<style lang="scss" scoped>
    .content{
        padding: 15px 0;
        .box{  
            background: red;
            width: 100px;
            height: 100px;
        }
    } 
</style>