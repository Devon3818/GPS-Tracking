<template>
    <div class="TalentJobPage">

        <nav>
            <span>区域 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span>薪资 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span>更多 <i class="iconfont icon-moreinfo-copy"></i> </span>
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

            <div class="item">
                <div class="basic">
                    <div class="top clear">
                        <p class="name fl">高薪招医药代表</p>
                        <p class="city fr">广州天河区</p>
                    </div>
                    <p class="dec clear">
                        <span class="price">5000元-8000元/月</span> | 销售代表
                    </p>
                    <p class="cpy">重庆希尔安药业有限公司</p>
                </div>
                <ul class="clear">
                    <li class="fl">五金一险</li>
                    <li class="fl">包吃包住</li>
                </ul>
            </div>

            <div class="item">
                <div class="basic">
                    <div class="top clear">
                        <p class="name fl">高薪招医药代表</p>
                        <p class="city fr">广州天河区</p>
                    </div>
                    <p class="dec clear">
                        <span class="price">5000元-8000元/月</span> | 销售代表
                    </p>
                    <p class="cpy">重庆希尔安药业有限公司</p>
                </div>
                <ul class="clear">
                    <li class="fl">五金一险</li>
                    <li class="fl">包吃包住</li>
                </ul>
            </div>

            <div class="item">
                <div class="basic">
                    <div class="top clear">
                        <p class="name fl">高薪招医药代表</p>
                        <p class="city fr">广州天河区</p>
                    </div>
                    <p class="dec clear">
                        <span class="price">5000元-8000元/月</span> | 销售代表
                    </p>
                    <p class="cpy">重庆希尔安药业有限公司</p>
                </div>
                <ul class="clear">
                    <li class="fl">五金一险</li>
                    <li class="fl">包吃包住</li>
                </ul>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'TalentJobPage',
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


