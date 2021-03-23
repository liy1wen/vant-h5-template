<template>
    <div>
        <Header title="商城"  :showleftsrrow="showleftarrow"/>
        <Swiper />
        <van-tree-select :items="items" :main-active-index.sync="active">
            <template #content>
                <div v-for="(item,index) in imgs" :key="index">
                    <div v-if="active === index">
                        <van-image  :src="item.src"/> 
                        <div class="pro-info">{{index}}产品信息</div>
                    </div>
                </div>
            </template>
        </van-tree-select>
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
            active: 0,
            items: [{ text: '分组 1' }, { text: '分组 2' },{ text: '分组 3' }, { text: '分组 4' },{ text: '分组 5' }, { text: '分组 6' },{ text: '分组 7' }, { text: '分组 8' },{ text: '分组 9' }, { text: '分组 10' }, { text: '分组 11' }, { text: '分组 12' }],
            imgs: [{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-2.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'},{src:'https://img01.yzcdn.cn/vant/apple-1.jpg'}]
        }
    },
}
</script>
<style lang="scss" scoped> 
    .van-tree-select{
        position: fixed;
        top: 200px;
        height: calc(100% - 248px) !important;
        .van-sidebar{

        }
        .pro-info{
            margin-top: 10px; 
        }
    }
</style> 