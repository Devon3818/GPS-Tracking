<template>
    <div class="RegisterPage">
        <ContainBox>

            <div class="login-wrap">

                <div class="int-wrap clear">
                    <span class="fl">手机号</span>
                    <input v-model="idata.mobile_phone" type="text" class="fl" placeholder="请输入手机号">
                </div>

                <div class="int-wrap clear">
                    <span class="fl">验证码</span>
                    <input v-model="verify_code" type="password" class="fl yzm" placeholder="请输入短信验证码">
                    <p @click="getYZM" class="yzm-p fr">{{YZM}}</p>
                </div>

                <div class="int-wrap clear">
                    <span class="fl">昵称</span>
                    <input v-model="idata.nickname" type="text" class="fl" placeholder="最多(7个字)">
                </div>

                <div class="int-wrap clear">
                    <span class="fl">新密码</span>
                    <input v-model="idata.password" type="password" class="fl" placeholder="请输入密码">
                </div>
                
            </div>

            <div class="log" @click="send">注册</div>

        </ContainBox>
    </div>
</template>

<script>
var qs = require('qs');

export default {
    name: 'RegisterPage',
    data(){
        return {
            idata: {
                mobile_phone: '',
                nickname: '',
                password: ''
            },
            YZM: '获取验证码',
            s: 60,
            iTimer: null,
            verify_code: '' //验证码
        }
    },
    methods: {
        //获取验证码
        getYZM(){

            if( this.YZM != "获取验证码" ){
                return true;
            }

            this.$request.post('/user_api/register_login/get_register_code', qs.stringify( {"mobile_phone":this.idata.mobile_phone} ) ).then(rs=>{
                console.log(rs)
                if( rs['data']['code'] == 0 ){
                    //成功发送
                    
                    this.iTimer = setInterval(()=>{
                        if( this.s > 0 ){
                            this.s--;
                            this.YZM = this.s + 's';
                        }else{
                            clearInterval( this.iTimer );
                            this.YZM = "获取验证码"
                            this.s = 60;
                        }
                        
                    },1000)
                }else{
                    this.$createDialog({
                        type: 'alert',
                        title: '温馨提示',
                        content: rs['data']['msg']
                    }).show()
                }
            }).catch((error)=>{
                console.log(error)
            })

        },
        //验证码检测
        checkYZM(){

            this.$request.post('/user_api/register_login/verify_register_code',qs.stringify( {
                "verify_code": this.verify_code,
                "mobile_phone": this.idata.mobile_phone
            })).then(rs=>{
                console.log(rs)
                if( rs['data']['code'] == 0 ){

                    this.reg();

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
        //注册提交
        reg(){
            this.$request.post('/user_api/register_login/register', qs.stringify( this.idata ) ).then(rs=>{
                console.log(rs)
                if( rs['data']['code'] == 0 ){
                    this.$createDialog({
                        type: 'alert',
                        title: '温馨提示',
                        content: rs['data']['msg']
                    }).show()
                    this.$router.push({ path: '/login' })
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
        send(){
            if( this.idata.mobile_phone == '' || this.idata.password == '' || this.idata.nickname == '' || this.verify_code == '' ){
                this.$createDialog({
                    type: 'alert',
                    title: '温馨提示',
                    content: "请把注册信息填写完整"
                }).show()
                return true;
            }

            this.checkYZM();

        }
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


