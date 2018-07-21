<template>
    <div class="sendHousePage">
        <ContainBox>

            <div class="banner">
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
const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' },
  { text: '幽鬼', value: '幽鬼' }]

export default {
    name: 'sendHousePage',
    created() {
        this.picker = this.$createPicker({
      title: 'Picker',
      data: [col1Data],
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/>
            - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      onCancel: () => {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    })

    // this.picker.show();
    },
    methods: {
        filesAdded(){

        }
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


