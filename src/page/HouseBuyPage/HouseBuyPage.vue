<template>
    <div class="HouseBuyPage">

        <nav>
            <span @click="showTag(0)">区域 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span @click="showTag(1)">分类 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span @click="showTag(2)">价格 <i class="iconfont icon-moreinfo-copy"></i> </span>
            <span @click="showTag(3)">更多 <i class="iconfont icon-moreinfo-copy"></i> </span>

        </nav>
        <div id="mask" v-show="isShow" @click.stop="hideMask">
            <!-- 分类 -->
            <div v-for="(it,index) in typeList[1]" :key="index" @click.stop="mdchange('house_type',index)" v-if="isShowIndex == 1" class="item">
                <p>{{it.house_type_name}}</p>
            </div>
            <!-- 价格 -->
            <div v-for="(it,index) in typeList[2]" :key="index" @click.stop="mdchange('house_price',index)" v-if="isShowIndex == 2" class="item">
                <p>{{it.house_price_name}}</p>
            </div>
            <!-- 更多 -->
            <div class="more-wrap" v-if="isShowIndex == 3">
                <div class="mwrap">
                    <p class="mtitle">面积（m²）</p>
                    <span v-bind:class="{ active: it.house_area_id == hm }" @click.stop="seleHm(it.house_area_id)" v-for="(it,index) in typeList[3]['house_area_list']" :key="index">
                        {{it.house_area_name}}
                    </span>
                </div>
                <div class="mwrap">
                    <p class="mtitle">类型</p>
                    <span v-bind:class="{ active: it.house_type_id == ht }" @click.stop="seleHt(it.house_type_id)" v-for="(it,index) in typeList[3]['house_type_list']" :key="index">
                        {{it.house_type_name}}
                    </span>
                </div>
                <div class="mwrap">
                    <p class="mtitle">户型</p>
                    <span v-bind:class="{ active: it.rent_type_id == hr }" @click.stop="seleHr(it.rent_type_id)" v-for="(it,index) in typeList[3]['rent_type_list']" :key="index">
                        {{it.rent_type_name}}
                    </span>
                </div>
                <div class="bottom">
                    <div class="btn fl" @click="morechange">确定</div>
                    <div class="btn clear fl" @click="clearM">重置</div>
                </div>
            </div>
        </div>

        <md-swiper
        class="iswiper"
        ref="swiper">
        <md-swiper-item :key="$index" v-for="(item, $index) in banner">
            <a href="javascript:void(0)"
            class="banner-item"
            >
                <img :src="item.pic_url" alt="" />
            </a>
        </md-swiper-item>
        </md-swiper>

        <div class="contain">

            <router-link :to="path(it.house_id)" v-for="(it,index) in list" :key="index">
            <div class="item clear">
                <div class="fl img-wrap">
                    <img :src="it.cover_url" />
                    <span v-if="it.require_type == 1">出售</span>
                    <span v-if="it.require_type == 2">求购</span>
                    <span v-if="it.require_type == 3">出租</span>
                    <span v-if="it.require_type == 4">求租</span>
                </div>
                <div class="dec fl">
                    <p class="title">{{it.title}}</p>
                    <p class="inf clear">
                        <span class="area fl">{{it.house_third_name}}-{{it.house_fourth_name}}</span>
                        <span class="price fr">{{it.total_price}}万</span>
                    </p>
                    <p class="cm2">{{it.house_rooms}}房{{it.house_parlor}}厅  {{it.floor_area}}㎡</p>
                </div>
            </div>
            </router-link>

        </div>

    </div>
</template>

<script>
var qs = require('qs');

export default {
    name: 'HouseBuyPage',
    data(){
        return {
            isContentShow: false,
            isShow: false,
            isShowIndex: 0,
            activeMenuBarIndex: -1,
            typeList: [
                [],
                [],
                [],
                []
            ],
            hm: '', //面积
            ht: '', //类型
            hr: '', //户型
            ipost: {
                page: 1,
                require_type: 0,
                second_area_id: '289',
                third_area_id: '',
                house_price_id: '',
                house_area_id: '',
                house_type_id: '',
                ren_type_number: '',
                type: 1
            },
            list: [],
            banner: []
        }
    },
    created() {
        this.bannerInit();
        this.getData();
        this.house_type_listInit();
        this.price_conditionInit();
        this.more_conditionInit();
    },
    methods: {
        path( id ){
            return { name: 'HBuyShow', params: { id: id }}
        },
        showTag( tindex ){
            this.isShowIndex = tindex;
            this.isShow = true;
        },
        hideMask(){
            this.isShow = false;
        },
        chose(){
            alert(2);
        },
        more_conditionInit(){
            this.$request.post('/user_api/house_rent/more_condition',qs.stringify( {"type":2} )).then(rs=>{
                console.log(rs)

                if( rs['data']['code'] == 0 ){

                    this.typeList[3] = rs['data']['data']

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
        },
        house_type_listInit(){
            this.$request.post('/user_api/house_rent/house_type_list',qs.stringify( {"type":2} )).then(rs=>{
                console.log(rs)

                if( rs['data']['code'] == 0 ){

                    this.typeList[1] = rs['data']['data']
                    this.typeList[1].unshift({
                        house_type_name: '不限'
                    })

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
        },
        price_conditionInit(){
            this.$request.post('/user_api/house_sale/common/price_condition',qs.stringify( {"type":2} )).then(rs=>{
                console.log(rs)

                if( rs['data']['code'] == 0 ){

                    this.typeList[2] = rs['data']['data']
                    this.typeList[2].unshift({
                        house_price_name: '不限'
                    })

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
        },
        bannerInit(){

            this.$request.post('/user_api/common_list/banner_list',{"banner_position":16}).then(rs=>{
                console.log(rs)
                if( rs['data']['code'] == 0 ){
                    this.banner = rs['data']['data']
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
            
        },
        getData(){
            
            this.$request.post('/user_api/house_sale/house_sale_list',qs.stringify(this.ipost)).then(rs=>{
                console.log(rs)
                if( rs['data']['code'] == 0 ){

                    this.list = rs['data']['data']['list']

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

        },
        //条件筛选
        mdchange(type, index){
            
            switch (type) {
                case "house_type":
                    if( index == 0 ){
                        this.ipost.house_type_id = ''
                    }else{
                        this.ipost.house_type_id = this.typeList[1][index]['house_type_id']
                    }
                    
                    break;
                case "house_price":
                    if( index == 0 ){
                        this.ipost.house_price_id = ''
                    }else{
                        this.ipost.house_price_id = this.typeList[2][index]['house_price_id']
                    }
                    
                    break;
            
                default:
                    break;
            }
            this.hideMask();
            this.getData();

        },
        //更多筛选
        morechange(){
            this.ipost.page = 1;
            this.getData();
            this.hideMask();
        },
        clearM(){
            this.hm = ''
            this.ipost.house_area_id = ''

            this.ht = ''
            this.ipost.house_type_id = ''

            this.hr = ''
            this.ipost.ren_type_number = ''

            this.ipost.page = 1;
            this.getData();
            this.hideMask();
        },
        seleHm(id){
            this.hm = id
            this.ipost.house_area_id = id
        },
        seleHt(id){
            this.ht = id
            this.ipost.house_type_id = id
        },
        seleHr(id){
            this.hr = id
            this.ipost.ren_type_number = id
        }
    }
}
</script>



<style lang="scss" scoped>
    @import './style.scss'
</style>


