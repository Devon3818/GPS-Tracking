<template>
    <div class="HealthPage">
        <nav>
            <span>区域 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span>险种 <i class="iconfont icon-moreinfo-copy"></i> </span>
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

            <router-link to="/health-show" class="item">
                <p class="title">承包你10年的保险</p>
                <div class="clear text">
                    <span class="name">承包公司：平安保险</span>
                    <span class="tag fr">健康保险song</span>
                </div>
            </router-link>

            <router-link to="/health-show" class="item">
                <p class="title">承包你10年的保险</p>
                <div class="clear text">
                    <span class="name">承包公司：平安保险</span>
                    <span class="tag fr">健康保险song</span>
                </div>
            </router-link>

            <router-link to="/health-show" class="item">
                <p class="title">承包你10年的保险</p>
                <div class="clear text">
                    <span class="name">承包公司：平安保险</span>
                    <span class="tag fr">健康保险song</span>
                </div>
            </router-link>

            <router-link to="/health-show" class="item">
                <p class="title">承包你10年的保险</p>
                <div class="clear text">
                    <span class="name">承包公司：平安保险</span>
                    <span class="tag fr">健康保险song</span>
                </div>
            </router-link>

            <router-link to="/health-show" class="item">
                <p class="title">承包你10年的保险</p>
                <div class="clear text">
                    <span class="name">承包公司：平安保险</span>
                    <span class="tag fr">健康保险song</span>
                </div>
            </router-link>

            <router-link to="/health-show" class="item">
                <p class="title">承包你10年的保险</p>
                <div class="clear text">
                    <span class="name">承包公司：平安保险</span>
                    <span class="tag fr">健康保险song</span>
                </div>
            </router-link>

        </div>

    </div>
</template>

<script>
export default {
    name: 'HealthPage',
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


