<template>
    <div class="HealthShowPage">
        <ContainBox>

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
            
            <div class="top">
                <p class="title">标题标题标题标题图标题标题标题标题标题标题标题标题标题</p>
            
                <div class="text clear">
                    <span class="time fl">发布:·2017-11-26</span>
                    <span class="see fr">浏览：1次</span>
                </div>
            </div>

            <div class="contain">

                <div class="tab-nav clear">
                    <span class="on">保险介绍</span>
                    <span>购买流程</span>
                </div>

                <div class="tabs tabA">
                    <p>特色：高保额，年保障高达400-1600万

                    全保障，含门诊、住院、牙科、眼科

                    有直结，网络医院直接结算，0现金垫付，无需理赔

                    通全球，医疗网络遍布全球，含美国及加拿大

                    优服务，全球紧急救援，第二诊疗意见，全年家庭医生服务</p>

                    <p>拥有国内强大的直付医院网络和优质医疗资源，建立了以三甲
                    医院特需部为主的高端医疗网络，覆盖全国近30个主要城市，
                    无需现场付费，由我们与诊所/医院直接结算，省却您的就医繁
                    琐。

                    </p>

                </div>
                
            </div>

            <div class="buy clear">
                <p class="price fl">费用：<span>700.00元</span></p>
                <span class="fr tobuy">立即购买</span>
            </div>

        </ContainBox>
    </div>
</template>

<script>
export default {
    name: 'HealthShowPage',
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


