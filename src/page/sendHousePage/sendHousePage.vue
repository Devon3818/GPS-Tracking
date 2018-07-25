<template>
    <div class="sendHousePage">
        <ContainBox>

            <div class="banner">
                <input @change="addBanner" id="ifile" type="file" name="files">
                <div class="upimg">
                    <span>
                        <i class="iconfont icon-tupianshangchuan"></i>
                    </span>
                    <p class="tip">点击上传图片</p>
                </div>
            </div>

            <div class="iform">
                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  小区名称</span>
                        <input v-model="postData.community_name" type="text" class="fr" placeholder="1-30字">
                    </div>

                    <div @click="choseArea" class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  房屋地址</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr"></p>
                    </div>

                </div>


                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  户型</span>
                        <div class="fr hx clear">
                            <div class="sm-inp fl">
                                <input v-model="postData.house_rooms" type="text" class="fl"><span class="fl">房</span>
                            </div>
                            <div class="sm-inp fl">
                                <input v-model="postData.house_parlor" type="text" class="fl"><span class="fl">厅</span>
                            </div>
                        </div>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  楼层</span>
                        <p class="text fr">楼</p>
                        <input v-model="postData.floor" type="text" class="fr" placeholder="请输入数字">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  面积</span>
                        <p class="text fr">㎡</p>
                        <input v-model="postData.floor_area" type="text" class="fr" placeholder="请输入面积">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  售价</span>
                        <p class="text fr">万元</p>
                        <input v-model="postData.total_price" type="text" class="fr" placeholder="请输入面积">
                    </div>

                </div>

                <div class="mb clear">

                    <div @click="orientations" class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  朝向</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">{{orientation}}</p>
                    </div>

                    <div @click="decoration" class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  装修</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">{{decoration_str}}</p>
                    </div>

                    <div @click="house_type" class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  类型</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">{{house_type_str}}</p>
                    </div>

                    <div @click="property_right" class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  产权</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">{{property_right_str}}</p>
                    </div>

                    <div @click="school_degree_type" class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-yuandian"></i>   学位</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">{{school_degree_type_str}}</p>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-yuandian"></i>   开发商</span>
                        <input v-model="postData.developers_name" type="text" class="fr" placeholder="输入开发商">
                    </div>

                </div>

                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  标题</span>
                        <input v-model="postData.title" type="text" class="fr" placeholder="输入标题">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  描述</span>
                        <input v-model="postData.description" type="text" class="fr" placeholder="输入标题">
                    </div>

                </div>

                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  联系人</span>
                        <input v-model="postData.contact_person" type="text" class="fr" placeholder="输输入联系人">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  手机号</span>
                        <input v-model="postData.contact_mobile_phone" type="text" class="fr" placeholder="输输入手机号">
                    </div>

                </div>

                <!-- 房产证 -->
                <div class="houseImg">
                    <p class="title">*以下资料仅用于平台审核，不外传</p>
                
                    <cube-upload
                    :action="{
                        'target': 'http://shunfengche.qishare.cn/windmillsteward/user_api/common/imgUpload',
                        'fileName': 'img1'
                    }"
                    v-model="pic"
                    :simultaneous-uploads="1"
                    @files-added="filesAdded" />

                </div>

                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  房屋地址</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">选择地区</p>
                    </div>

                </div>

                <div class="btn-send">
                    <cube-button :primary="true">发布</cube-button>
                </div>

            </div>

            

        </ContainBox>
    </div>
</template>

<script>
import imgUpload from '@/utils/imgUpload'
import $ from 'jquery'

var qs = require('qs');

export default {
    name: 'sendHousePage',
    data(){
        return {
            houseTypeList: [],
            pic: [],

            orientation: '',    //朝向
            decoration_str: '',     //装修
            house_type_str: '',     //类型
            property_right_str: '', //产权
            school_degree_type_str: '', //学位

            postData: {
                require_type: 1,
                house_second_id: this.$store.getters.cityId,
                house_third_id: '',
                house_fourth_id: 0,
                house_rooms: '',
                house_parlor: '',
                floor: '',
                total_price: '',
                title: '',
                description: '',
                contact_person: '',
                contact_mobile_phone: '',
                second_area_id: '',
                third_area_id: '',
                floor_area: '',
                orientation: '',
                decoration: '',
                pic_urls: '',
                community_name: '',
                property_cert_pic_url: '',
                house_type: '',
                property_right: '',
                developers_name: '',
                school_degree_type: '',
                access_token: this.$store.getters.token,
                cover_url: '',


                rent_deposit_type: '',
                house_config_ids: ''
            }
        }
    },
    created() {
        this.houseTypeListInit()
    },
    methods: {
        addBanner(){
            var ifiel = $('#ifile').get(0).files[0];
            
            imgUpload(ifiel).then(rs=>{
                console.log(rs.data.fileUrls[0])
                this.postData.cover_url = rs.data.fileUrls[0];
            })
        },
        filesAdded(files) {
            let hasIgnore = false
            const maxSize = 1 * 1024 * 1024 // 1M
            for (let k in files) {
                const file = files[k]
                if (file.size > maxSize) {
                file.ignore = true
                hasIgnore = true
                }
            }
            hasIgnore && this.$createToast({
                type: 'warn',
                time: 1000,
                txt: 'You selected >1M files'
            }).show()
        },
        //获取类型
        houseTypeListInit(){

            this.$request.post('/user_api/house_rent/house_type_list',qs.stringify({
                type: 2
            })).then(rs=>{
                console.log(rs)
                if(rs.data.code == 0){
                    this.houseTypeList = rs.data.data;
                }
            })

        },
        //房屋地址
        choseArea(){

            if(this.picker){
                this.picker.show();
                return true;
            }

            this.picker = this.$createPicker({
                title: '地区选择',
                alias: { value: 'fourth_area_id', text: 'fourth_area_name'},
                data: [this.$store.getters.cityList],
                onSelect: (selectedVal, selectedIndex, selectedText) => {
                    console.log(selectedVal, selectedIndex, selectedText)
                },
        
            }).show();
        },
        //朝向
        orientations(){
            if(this.orientations_picker){
                this.orientations_picker.show();
                return true;
            }

            this.orientations_picker = this.$createPicker({
                title: '朝向',
                data: [[{
                    text: '东',
                    value:  1
                },{
                    text: '南',
                    value:  2
                },{
                    text: '西',
                    value:  3
                },{
                    text: '北',
                    value:  4
                },{
                    text: '南北',
                    value:  5
                },{
                    text: '东西',
                    value:  6
                },{
                    text: '东南',
                    value:  7
                },{
                    text: '西南',
                    value:  8
                },{
                    text: '东北',
                    value:  9
                },{
                    text: '西北',
                    value:  10
                }]],
                onSelect: (selectedVal, selectedIndex, selectedText) => {
                    console.log(selectedVal, selectedIndex, selectedText)
                    this.postData.orientation = selectedVal[0]
                    this.orientation = selectedText[0]
                },
        
            }).show();
        },
        //装修
        decoration(){
            if(this.decoration_picker){
                this.decoration_picker.show();
                return true;
            }

            this.decoration_picker = this.$createPicker({
                title: '装修',
                data: [[{
                    text: '毛培',
                    value:  1
                },{
                    text: '简单装修',
                    value:  2
                },{
                    text: '中等装修',
                    value:  3
                },{
                    text: '精装修',
                    value:  4
                },{
                    text: '豪华装修',
                    value:  5
                }]],
                onSelect: (selectedVal, selectedIndex, selectedText) => {
                    console.log(selectedVal, selectedIndex, selectedText)
                    this.postData.decoration = selectedVal[0]
                    this.decoration_str = selectedText[0]
                },
        
            }).show();
        },
        //类型
        house_type(){
            if(this.house_type_picker){
                this.house_type_picker.show();
                return true;
            }

            this.house_type_picker = this.$createPicker({
                title: '类型',
                alias: { value: 'house_type_id', text: 'house_type_name'},
                data: [this.houseTypeList],
                onSelect: (selectedVal, selectedIndex, selectedText) => {
                    console.log(selectedVal, selectedIndex, selectedText)
                    this.postData.house_type = selectedVal[0]
                    this.house_type_str = selectedText[0]
                },
        
            }).show();
        },
        //产权
        property_right(){
            if(this.property_right_picker){
                this.property_right_picker.show();
                return true;
            }

            this.property_right_picker = this.$createPicker({
                title: '产权',
                data: [[{
                    text: '70年',
                    value: '70年'
                },{
                    text: '50年',
                    value: '50年'
                },{
                    text: '40年',
                    value: '40年'
                },{
                    text: '无',
                    value: '无'
                }]],
                onSelect: (selectedVal, selectedIndex, selectedText) => {
                    console.log(selectedVal, selectedIndex, selectedText)
                    this.postData.property_right = selectedVal[0]
                    this.property_right_str = selectedVal[0]
                },
        
            }).show();
        },
        //学位
        school_degree_type(){
            if(this.school_degree_type_picker){
                this.school_degree_type_picker.show();
                return true;
            }

            this.school_degree_type_picker = this.$createPicker({
                title: '学位',
                data: [[{
                    text: '不带学位',
                    value: 0
                },{
                    text: '带学位',
                    value: 1
                }]],
                onSelect: (selectedVal, selectedIndex, selectedText) => {
                    console.log(selectedVal, selectedIndex, selectedText)
                    this.postData.school_degree_type = selectedVal[0]
                    this.school_degree_type_str = selectedText[0]
                },
        
            }).show();
        },



    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


