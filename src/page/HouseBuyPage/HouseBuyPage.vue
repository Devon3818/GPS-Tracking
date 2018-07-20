<template>
    <div class="HouseBuyPage">

        <md-drop-menu
        class="top-nav"
        ref="dropMenu1"
        :data="data"
        :default-value="[]"
        ></md-drop-menu>

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

        <div class="contain">
            <router-link to="/RBuyShow">
            <div class="item clear">
                <div class="fl img-wrap">
                    <img src="https://img2.mukewang.com/5b4ed6590001d9ee06000338-590-330.jpg" />
                    <span>出售</span>
                </div>
                <div class="dec fl">
                    <p class="title">天河区小新塘酒店式公寓</p>
                    <p class="inf clear">
                        <span class="area fl">天河-新塘街道</span>
                        <span class="price fr">300万</span>
                    </p>
                    <p class="cm2">两房一厅  200㎡</p>
                </div>
            </div>
            </router-link>

            <router-link to="/RBuyShow">
            <div class="item clear">
                <div class="fl img-wrap">
                    <img src="https://img2.mukewang.com/5b4ed6590001d9ee06000338-590-330.jpg" />
                    <span>出售</span>
                </div>
                <div class="dec fl">
                    <p class="title">天河区小新塘酒店式公寓</p>
                    <p class="inf clear">
                        <span class="area fl">天河-新塘街道</span>
                        <span class="price fr">300万</span>
                    </p>
                    <p class="cm2">两房一厅  200㎡</p>
                </div>
            </div>
            </router-link>

            <router-link to="/RBuyShow">
            <div class="item clear">
                <div class="fl img-wrap">
                    <img src="https://img2.mukewang.com/5b4ed6590001d9ee06000338-590-330.jpg" />
                </div>
                <div class="dec fl">
                    <p class="title">天河区小新塘酒店式公寓</p>
                    <p class="inf clear">
                        <span class="area fl">天河-新塘街道</span>
                        <span class="price fr">300万</span>
                    </p>
                    <p class="cm2">两房一厅  200㎡</p>
                </div>
            </div>
            </router-link>

        </div>

    </div>
</template>

<script>
export default {
    name: 'HouseBuyPage',
    data(){
        return {
            isContentShow: false,
            simple: [
                {
                    src: "https://img2.mukewang.com/szimg/5b4ff61700010bbe09000300.jpg"
                },
                {
                    src: "https://img2.mukewang.com/szimg/5b4d546c0001d12709000300.jpg"
                }
            ],
            data: [
                {
                text: '区域',
                options: [
                    {
                    text: '1.6L',
                    },
                    {
                    text: '1.8L',
                    }
                ],
                },
                {
                text: '分类',
                options: [
                    {
                    text: '手动挡',
                    },
                    {
                    text: '自动挡',
                    },
                    {
                    text: '手自一体',
                    },
                ],
                },
                {
                text: '价格',
                options: [
                    {
                    text: '手动挡',
                    },
                    {
                    text: '自动挡',
                    },
                    {
                    text: '手自一体',
                    },
                ],
                },
                {
                text: '更多',
                options: [
                    {
                    text: '手动挡',
                    },
                    {
                    text: '自动挡',
                    },
                    {
                    text: '手自一体',
                    },
                ],
                }
            ]
        }
    }
}
</script>



<style lang="scss" scoped>
    @import './style.scss'
</style>


