<template>
    <div class="WitPage">
        <nav>
            <span @click="showTag(0)">区域 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span @click="showTag(1)">发布时间 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span @click="showTag(2)">价格 <i class="iconfont icon-moreinfo-copy"></i> </span>
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

            <router-link to="/wit-show" class="item">
                <div class="top clear">
                    <img class="fl uimg" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                    <p class="uname fl">Devon</p>
                    <p class="price fr"><i class="iconfont icon-RMB"></i>  198.00</p>
                </div>

                <ul class="img-wrap clear">
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                </ul>

                <p class="text">因本人出国，求帮忙照顾狗狗10天，重金酬谢。</p>

                <div class="aply clear">
                    <p class="address fl">
                        <i class="iconfont icon-dingwei"></i>
                        广州天河
                    </p>
                    <span class="fl">距离我138m</span>
                    <div class="btn fr">抢单</div>
                </div>

            </router-link>

            <router-link to="/wit-show" class="item">
                <div class="top clear">
                    <img class="fl uimg" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                    <p class="uname fl">Devon</p>
                    <p class="price fr"><i class="iconfont icon-RMB"></i>  198.00</p>
                </div>

                <ul class="img-wrap clear">
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                </ul>

                <p class="text">因本人出国，求帮忙照顾狗狗10天，重金酬谢。</p>

                <div class="aply clear">
                    <p class="address fl">
                        <i class="iconfont icon-dingwei"></i>
                        广州天河
                    </p>
                    <span class="fl">距离我138m</span>
                    <div class="btn fr">抢单</div>
                </div>

            </router-link>

            <router-link to="/wit-show" class="item">
                <div class="top clear">
                    <img class="fl uimg" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" alt="">
                    <p class="uname fl">Devon</p>
                    <p class="price fr"><i class="iconfont icon-RMB"></i>  198.00</p>
                </div>

                <ul class="img-wrap clear">
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                    <li :style="{backgroundImage: 'url(' + 'https://img1.mukewang.com/5b4ed6590001d9ee06000338-240-135.jpg' + ')',backgroundSize: 'cover'}"></li>
                </ul>

                <p class="text">因本人出国，求帮忙照顾狗狗10天，重金酬谢。</p>

                <div class="aply clear">
                    <p class="address fl">
                        <i class="iconfont icon-dingwei"></i>
                        广州天河
                    </p>
                    <span class="fl">距离我138m</span>
                    <div class="btn fr">抢单</div>
                </div>

            </router-link>

        </div>

    </div>
</template>

<script>
export default {
    name: 'WitPage',
    data(){
        return {
            pic: [
                "http://sfcgj.oss-cn-qingdao.aliyuncs.com/20180518174837-90997-a0312703c9f328af3c71e45552a515ec.png",
                "http://sfcgj.oss-cn-qingdao.aliyuncs.com/20180518174837-90997-a0312703c9f328af3c71e45552a515ec.png"
            ]
        }
    },
    methods: {
        showTag( idx ){

        }
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


