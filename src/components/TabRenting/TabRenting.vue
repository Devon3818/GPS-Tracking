<template>
    <div class="TabRenting">
        <nav class="clear">
           <router-link to="/houseBuy" active-class="on" class="tab">
            <i class="iconfont icon-shouye"></i>
            <p>买房</p>
           </router-link>
           <router-link to="/rentingBuy" active-class="on" class="tab">
            <i class="iconfont icon-icon-test"></i>
            <p>租房</p>
           </router-link> 
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TabRenting'
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


