<template>
    <div class="PurchasePage">
        <ContainBox>

            <p class="top-tip">房屋信息</p>

            <div class="iform">
                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  小区名称</span>
                        <input type="text" class="fr" placeholder="1-30字">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  房屋地址</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr"></p>
                    </div>

                </div>


                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  户型</span>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  楼层</span>
                        <p class="text fr">楼</p>
                        <input type="text" class="fr" placeholder="请输入数字">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  面积</span>
                        <p class="text fr">㎡</p>
                        <input type="text" class="fr" placeholder="请输入面积">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  售价</span>
                        <p class="text fr">万元</p>
                        <input type="text" class="fr" placeholder="请输入面积">
                    </div>

                </div>

                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  朝向</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">东</p>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  装修</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">毛坯</p>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  类型</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">住宅</p>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  产权</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">70年</p>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-yuandian"></i>   学位</span>
                        <i class="r-arrow fr iconfont icon-arrow-right"></i>
                        <p class="text fr">带学位</p>
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-yuandian"></i>   开发商</span>
                        <input type="text" class="fr" placeholder="输入开发商">
                    </div>

                </div>

                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  标题</span>
                        <input type="text" class="fr" placeholder="输入标题">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  描述</span>
                        <input type="text" class="fr" placeholder="输入标题">
                    </div>

                </div>

                <div class="mb clear">

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  联系人</span>
                        <input type="text" class="fr" placeholder="输输入联系人">
                    </div>

                    <div class="inp-wrap clear">
                        <span class="fl"><i class="iconfont icon-bixutian"></i>  手机号</span>
                        <input type="text" class="fr" placeholder="输输入手机号">
                    </div>

                </div>

                <!-- 房产证 -->
                <div class="houseImg">
                    <p class="title">*以下资料仅用于平台审核，不外传</p>
                
                    <cube-upload
                    action="//jsonplaceholder.typicode.com/photos/"
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
export default {
    name: "PurchasePage"
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


