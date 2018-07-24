<template>
    <div class="RentingBuyShowPage">
        <ContainBox>
            
            <md-swiper
            class="iswiper"
            ref="swiper">
            <md-swiper-item :key="$index" v-for="(item, $index) in idata.pic_urls">
                <a href="javascript:void(0)"
                class="banner-item"
                >
                    <img :src="item" alt="" />
                </a>
            </md-swiper-item>
            </md-swiper>

            <!--  标题 -->
            <div class="top clear">
                <p class="title">{{idata.title}}</p>
                <p class="bottom clear">
                    <span class="fl time">发布：{{idata.add_time | formatDate}}</span>
                    <span class="fr">浏览：{{idata.view_num}}次</span>
                </p>
            </div>

            <!-- 详情 -->
            <div class="contain">

                <div class="top clear">
                    <div class="nav">
                        <p class="btitle">户型</p>
                        <p class="sm">{{idata.house_rooms}}房{{idata.house_parlor}}厅</p>
                    </div>
                    <div class="nav">
                        <p class="btitle">售价</p>
                        <p class="sm">{{idata.total_price}}万元</p>
                    </div>
                </div>

                <div class="item clear">
                    <span class="fl">小区：{{idata.community_name}}</span>
                    <span class="fr">面积：{{idata.floor_area}}m²</span>
                </div>

                <div class="item clear">
                    <span class="fl">楼层：{{idata.floor}}楼</span>
                    <span class="fr">朝向：{{idata.orientation}}</span>
                </div>
                
                <div class="item clear">
                    <span class="fl">装修：{{idata.decoration}}</span>
                    <span class="fr">类型：{{idata.house_type}}</span>
                </div>

                <div class="item clear">
                    <span class="fl">产权：{{idata.property_right}}年</span>
                    <span class="fr">学位：{{idata.school_degree_type == 0?"无学位":"带学位"}}</span>
                </div>

                <div class="item clear">
                    <span class="fl">开发商：{{idata.developers_name}}</span>
                    <span class="fr">联系人：{{idata.contact_person}}</span>
                </div>

                <p class="address">地址：{{idata.second_area_name}} {{idata.third_area_name}} {{idata.address}}</p>


            </div>

            <!-- dec -->
            <div class="dec">

                <div class="title">住屋概述</div>

                <div class="text">

                    <p>{{idata.description}}</p>

                </div>

            </div>

            <p class="tgId"><span>托管ID：</span> {{idata.hosting_show}}</p>

        </ContainBox>

        <div class="flex-nav">
            <div class="ubasic fl clear">
                <img class="fl" :src="idata.user_avatar_url?idata.user_avatar_url:'https://img2.mukewang.com/54584f850001c0bc02200220-100-100.jpg'" alt="" />
                <p class="uname fl">{{idata.nickname}}</p>
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
import moment from 'moment';
var qs = require('qs');

export default {
    name: 'RentingBuyShowPage',
    data(){
        return {
            id: this.$route.params['id'],
            idata: {}
        }
    },
    created() {
        
        this.init();
    },
    filters: {
        formatDate(time) {
            var da = new Date(time*1000);
            return moment(da).format('YYYY-MM-DD')
        }
    },
    methods: {
        init(){

            var par = {"house_id": this.id}

            this.$request.post('/user_api/house_rent_sale/house_detail',qs.stringify( par )).then(rs=>{
                console.log(rs)
                if( rs['data']['code'] == 0 ){
                    this.idata = rs['data']['data']
                }else{
                    this.$createDialog({
                        type: 'alert',
                        title: '温馨提示',
                        content: rs['data']['msg']
                    }).show()
                }
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


