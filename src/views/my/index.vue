<template>
    <div>
        <Header title="我的"  :showleftsrrow="showleftarrow"/>
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
            showleftarrow: false
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>