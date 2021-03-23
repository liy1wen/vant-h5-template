<template>
    <div>
        <Header title="购物车"  :showleftsrrow="showleftarrow"/>
        <div class="content">
            <van-card
                num="2"
                tag="标签"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"
            />
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickButton"
            />
        </van-goods-action>
    </div>
</template>
<script>
import Header from '@/components/Header'
import { Toast } from 'vant';
export default {
    components: {
        Header
    },
    data() {
        return {
            showleftarrow: false
        }
    },
    methods: {
        onClickIcon() {
            Toast('点击图标');
        },
        onClickButton() {
            Toast('点击按钮');
        },
    },
}
</script>
<style lang="scss" scoped>
    .van-goods-action{
        bottom: 50px;
    }
</style> 