<template>
    <div>
        <van-nav-bar
        :title="title"
        fixed
        safe-area-inset-top
        placeholder 
        :left-arrow = "showleftsrrow"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    </div>
</template>
<script>
export default { 
    data() {
        return {
            
        }
    },
    props: {
        title:{
            type: String,
            default: 'vant'
        },
        showleftsrrow: {
            type :Boolean,
            default: true
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {

        },
    },
}
</script>
<style lang="scss" scoped>
    
</style>