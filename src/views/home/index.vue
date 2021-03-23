<template>
    <div>
        <Header title="首页"  :showleftsrrow="showleftarrow"/>
        <Swiper />
        <div class="img-container">
            <div v-for="(img,index) in imageList" :key="index" class="img-item">
                <img v-lazy="img" class="lay-img" @click="goList()"/>
                <div class="product-name">产品名称</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Swiper from '@/components/Swiper'
export default {
    components: {
        Header,
        Swiper
    }, 
    data() {
        return {
            showleftarrow: false,
            imageList: [
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg',
            ],
        }
    },
    created() { 
        console.log('123')
    },
    methods: {
        goList() {
            this.$router.push("/list")
        }
    },
}
</script>
<style lang="scss" scoped>
    .img-container{
        padding: 15px;
        .img-item{
            margin-top: 20px;
            .lay-img{
                width: 50%;
            }
            .product-name{
                margin-top: 10px;
            }
        }
    }

</style>