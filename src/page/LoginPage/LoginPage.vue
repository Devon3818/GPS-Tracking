<template>
    <div class="LoginPage">
        <ContainBox>

            <div class="login-wrap">

                <div class="int-wrap clear">
                    <span class="fl">账号</span>
                    <input v-model="idata.mobile_phone" type="text" class="fl" placeholder="请输入手机号">
                </div>

                <div class="int-wrap clear">
                    <span class="fl">密码</span>
                    <input v-model="idata.password" type="password" class="fl" placeholder="请输入密码">
                </div>
                
            </div>

            <div class="log" @click="login">登录</div>

            <div class="aply clear">
                <router-link to="/" class="fl">注册</router-link>
                <router-link to="/" class="fr">忘记密码</router-link>
            </div>

            <p class="visitor">游客模式</p>

        </ContainBox>
    </div>
</template>

<script>
var qs = require('qs');

export default {
    name: 'LoginPage',
    data(){
        return {
            idata: {
                mobile_phone: '',
                password: '',
                is_web_login: 1
            }
        }
    },
    methods: {
        login(){

            if( this.idata.mobile_phone == '' || this.idata.password == '' ){
                
                 this.$createDialog({
                    type: 'alert',
                    title: '请填写账户和密码',
                    content: ''
                }).show()

            }else{

                this.$request.post('/user_api/register_login/login',qs.stringify(this.idata)).then(rs=>{
                    console.log(rs)

                    if( rs['data']['code'] == 0 ){

                        var token = rs['data']['data']['access_token'],
                            uid = rs['data']['data']['user_id'];

                        this.$store.dispatch('LoginByUsername',{
                            "token": token,
                            "uid": uid
                        } ).then(() => {
                            //this.NProgress.done();
                            this.$router.push({ path: '/' })
                        }).catch(() => {
                            //this.NProgress.done();
                        })
                        
                    }

                }).catch(error=>{
                    console.log(error)
                })

            }

        }
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


