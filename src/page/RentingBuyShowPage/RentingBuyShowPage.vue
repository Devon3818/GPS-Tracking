<template>
    <div class="RentingBuyShowPage">
        <ContainBox>
            
            <md-swiper
            class="iswiper"
            ref="swiper">
            <md-swiper-item :key="$index" v-for="(item, $index) in simple">
                <a href="javascript:void(0)"
                class="banner-item"
                >
                    <img :src="item.src" alt="" />
                </a>
            </md-swiper-item>
            </md-swiper>

            <!--  标题 -->
            <div class="top clear">
                <p class="title">天河区小新塘酒店式公寓天河区小新塘酒店式公寓</p>
                <p class="bottom clear">
                    <span class="fl time">发布：2017-11-26</span>
                    <span class="fr">浏览：20次</span>
                </p>
            </div>

            <!-- 详情 -->
            <div class="contain">

                <div class="top clear">
                    <div class="nav">
                        <p class="btitle">户型</p>
                        <p class="sm">两房一厅</p>
                    </div>
                    <div class="nav">
                        <p class="btitle">售价</p>
                        <p class="sm">300万元</p>
                    </div>
                </div>

                <div class="item clear">
                    <span class="fl">小区：小新塘</span>
                    <span class="fr">面积：200m</span>
                </div>

                <div class="item clear">
                    <span class="fl">楼层：2楼</span>
                    <span class="fr">朝向：南</span>
                </div>
                
                <div class="item clear">
                    <span class="fl">装修：精装修</span>
                    <span class="fr">类型：住宅</span>
                </div>

                <div class="item clear">
                    <span class="fl">产权：70年</span>
                    <span class="fr">学位：带学位</span>
                </div>

                <div class="item clear">
                    <span class="fl">开发商：无</span>
                    <span class="fr">联系人：宋先生</span>
                </div>

                <p class="address">地址：天河区小新塘</p>


            </div>

            <!-- dec -->
            <div class="dec">

                <div class="title">住屋概述</div>

                <div class="text">

                    <p>天河区小新塘酒店式公寓，坐落于交通便利的路口段位，四
                    通八达，附近就是地铁站和公交站，不论是上班还是上学都
                    非常方便，旁边还有各种店铺方便购入生活用品，是优良的
                    便利住处。
                    </p>

                    <p>里面已经备有空调、电视机、热水器和衣柜等生活用家电家
                    具，付清价钱即可拎包入住。</p>

                    <p>房主在周末会有空带希望入住的朋友参观房子，电话一天12
                    小时内开着，欢迎随时打电话联系。</p>

                </div>

            </div>

            <p class="tgId"><span>托管ID：</span> 201712261282125</p>

        </ContainBox>

        <div class="flex-nav">
            <div class="ubasic fl clear">
                <img class="fl" src="https://img2.mukewang.com/54584f850001c0bc02200220-100-100.jpg" alt="" />
                <p class="uname fl">王宏</p>
            </div>

            <div class="fr bar">
                <div class="it collect">
                    <i class="iconfont icon-star-empty"></i>
                    <p>收藏</p>
                </div>
                <div class="it call">
                    <i class="iconfont icon-dianhua"></i>
                    <p>电话</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'RentingBuyShowPage',
    data(){
        return {
            simple: []
        }
    },
    created() {
        setTimeout(()=>{
            this.simple = [
                {
                    src: "https://img2.mukewang.com/szimg/5b4ff61700010bbe09000300.jpg"
                },
                {
                    src: "https://img2.mukewang.com/szimg/5b4d546c0001d12709000300.jpg"
                }
            ]
        },300)   
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


