<template>
    <div class="LabourJobPage">

        <div class="flex-bar">
            <div class="btns">
                <div class="bt">
                    <i class="iconfont icon-jianli"></i>
                    <p>发布简历</p>
                </div>
                <div class="bt">
                    <i class="iconfont icon-fabu"></i>
                    <p>我的发布</p>
                </div>
            </div>

            <nav>
                <span>区域 <i class="iconfont icon-moreinfo-copy"></i> </span>
                <span>薪资 <i class="iconfont icon-moreinfo-copy"></i> </span>
                <span>更多 <i class="iconfont icon-moreinfo-copy"></i> </span>
            </nav>

        </div>

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

            <router-link to="/job-labour" class="item clear">
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
            </router-link>

            <router-link to="/job-labour" class="item clear">
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
            </router-link>

            <router-link to="/job-labour" class="item clear">
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
            </router-link>
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'LabourJobPage',
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


