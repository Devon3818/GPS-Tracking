<template>
    <div class="CenterPage">
        <div class="top clear">
            <img class="fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
            <p>孔德文</p>
        </div>

        <div class="nav">
            <div class="item">
                <i class="iconfont icon-fabu"></i>
                <p>我的发货</p>
            </div>
            <div class="item">
                <i class="iconfont icon-jianli"></i>
                <p>我的订单</p>
            </div>
            <div class="item">
                <i class="iconfont icon-shoucang"></i>
                <p>我的收藏</p>
            </div>
            <div class="item">
                <i class="iconfont icon-qianbao1"></i>
                <p>钱包</p>
            </div>
        </div>

        <div class="order clear">
            <div class="title clear">
                <span class="fl t">特产订单</span>
                <span class="more fr">查看全部订单 <i class="iconfont icon-arrow-right"></i></span>
            </div>

            <div class="nav">
                <div class="item">
                    <i class="iconfont icon-daifukuan"></i>
                    <p>待付款</p>
                </div>
                <div class="item">
                    <i class="iconfont icon-fahuo"></i>
                    <p>待发货</p>
                </div>
                <div class="item">
                    <i class="iconfont icon-daishouhuofuben"></i>
                    <p>待收货</p>
                </div>
                <div class="item">
                    <i class="iconfont icon-quxiao"></i>
                    <p>已取消</p>
                </div>
                <div class="item">
                    <i class="iconfont icon-wujingongju"></i>
                    <p>退款/售后</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CenterPage'
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


