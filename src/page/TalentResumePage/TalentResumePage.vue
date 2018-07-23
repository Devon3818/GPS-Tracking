<template>
    <div class="TalentResumePage">

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
                <span>性别 <i class="iconfont icon-moreinfo-copy"></i> </span>
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

            <div class="item clear">
                <img class="uimg fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                <div class="info fl">
                    <div class="top clear">
                        <p class="name fl">张爱国</p>
                        <i class="iconfont icon-nan1 fl sex"></i>
                        <p class="fl age">25岁</p>
                        <p class="fr pi">匹配度70%</p>
                    </div>
                    <p class="dec">
                        本科 | 1-3年 | 3000-5000 | 销售代表
                    </p>
                    <p class="city">
                        <i class="iconfont icon-dingwei"></i> 广州
                    </p>
                </div>
            </div>
            <div class="item clear">
                <img class="uimg fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                <div class="info fl">
                    <div class="top clear">
                        <p class="name fl">张爱国</p>
                        <i class="iconfont icon-nan1 fl sex"></i>
                        <p class="fl age">25岁</p>
                        <p class="fr pi">匹配度70%</p>
                    </div>
                    <p class="dec">
                        本科 | 1-3年 | 3000-5000 | 销售代表
                    </p>
                    <p class="city">
                        <i class="iconfont icon-dingwei"></i> 广州
                    </p>
                </div>
            </div>
            <div class="item clear">
                <img class="uimg fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                <div class="info fl">
                    <div class="top clear">
                        <p class="name fl">张爱国</p>
                        <i class="iconfont icon-nan1 fl sex"></i>
                        <p class="fl age">25岁</p>
                        <p class="fr pi">匹配度70%</p>
                    </div>
                    <p class="dec">
                        本科 | 1-3年 | 3000-5000 | 销售代表
                    </p>
                    <p class="city">
                        <i class="iconfont icon-dingwei"></i> 广州
                    </p>
                </div>
            </div>
            <div class="item clear">
                <img class="uimg fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                <div class="info fl">
                    <div class="top clear">
                        <p class="name fl">张爱国</p>
                        <i class="iconfont icon-nan1 fl sex"></i>
                        <p class="fl age">25岁</p>
                        <p class="fr pi">匹配度70%</p>
                    </div>
                    <p class="dec">
                        本科 | 1-3年 | 3000-5000 | 销售代表
                    </p>
                    <p class="city">
                        <i class="iconfont icon-dingwei"></i> 广州
                    </p>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'TalentResumePage',
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


