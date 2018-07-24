<template>
    <div class="WitFirePage">

        <nav>
            <span>区域 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span>类型 <i class="iconfont icon-moreinfo-copy"></i> </span>
        </nav>

        <md-swiper
        class="iswiper"
        ref="swiper">
        <md-swiper-item :key="$index" v-for="(item, $index) in pic">
            <a href="javascript:void(0)"
            class="banner-item"
            >
                <img :src="item" alt="" />
            </a>
        </md-swiper-item>
        </md-swiper>

        <div class="contain">

            <router-link to="/wit-fire-show" class="item">
                <p class="title">标题标题标题标题</p>
                <p class="address">广州天河 | 类型</p>
            </router-link>

            <router-link to="/wit-fire-show" class="item">
                <p class="title">标题标题标题标题</p>
                <p class="address">广州天河 | 类型</p>
            </router-link>

            <router-link to="/wit-fire-show" class="item">
                <p class="title">标题标题标题标题</p>
                <p class="address">广州天河 | 类型</p>
            </router-link>

            <router-link to="/wit-fire-show" class="item">
                <p class="title">标题标题标题标题</p>
                <p class="address">广州天河 | 类型</p>
            </router-link>

            <router-link to="/wit-fire-show" class="item">
                <p class="title">标题标题标题标题</p>
                <p class="address">广州天河 | 类型</p>
            </router-link>

            <router-link to="/wit-fire-show" class="item">
                <p class="title">标题标题标题标题</p>
                <p class="address">广州天河 | 类型</p>
            </router-link>

        </div>

    </div>
</template>

<script>
export default {
    name: 'WitFirePage',
    data(){
        return {
            pic: [
                "http://sfcgj.oss-cn-qingdao.aliyuncs.com/20180518174837-90997-a0312703c9f328af3c71e45552a515ec.png",
                "http://sfcgj.oss-cn-qingdao.aliyuncs.com/20180518174837-90997-a0312703c9f328af3c71e45552a515ec.png"
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


