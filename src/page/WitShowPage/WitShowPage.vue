<template>
    <div class="WitShowPage">
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
            
            <div class="cotaihn clear">
                <div class="top clear">
                    <img class="fl uimg" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                    <div class="uinfo fl">
                        <p class="uname">Devon</p>
                        <p class="send-address">发布于 广州市 天河区</p>
                        <span class="distance">距离138米</span>
                        <i class="coll iconfont icon-star-empty"></i>
                    </div>
                    
                </div>

                <div class="basic clear">
                    <p class="title">因本人出国，求帮忙照顾狗狗10天，重金酬谢</p>
                    <div class="text clear">
                        <p class="price fl">
                            <i class="iconfont icon-RMB"></i> 199.00
                        </p>
                        <span class="fr"> 8分钟前 | 浏览:20次</span>
                    </div>
                </div>

                <div class="dec">
                    <p class="title">需求详情</p>

                    <div class="text">
                        <p>如果卖家有多件相同的物品要出售，那么他在一个登录物品中
                        提供相同物品两件以上的竞标卖法称为多数量竞标。与普通的
                        竞标不同的是：多数量竞标会有多个得标者。
                        </p>
                        <p>系统按照买家的单件物品出价金额和顺序，选择出价。如果物
                        品有两个买家出了相同的单件价格，则较早出价的买家优先。</p>  

                        <p>如果您是目前的最高出价者并且希望在此类竞标中提高您的出
                        价，则不能降低当前的最高出价，而且也不能减少最初要求求
                        购的数量。</p>  

                    </div>
                </div>

                <div class="id">
                    <span>托管ID：</span>201712261282125
                </div>

            </div>

            <div class="buy">抢单</div>

        </ContainBox>
    </div>
</template>

<script>
export default {
    name: 'WitShowPage',
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


