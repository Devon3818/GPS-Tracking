<template>
    <div class="LoginPage">
        <ContainBox>

            <div class="login-wrap">

                <div class="int-wrap clear">
                    <span class="fl">账号</span>
                    <input type="text" class="fl" placeholder="请输入手机号">
                </div>

                <div class="int-wrap clear">
                    <span class="fl">密码</span>
                    <input type="password" class="fl" placeholder="请输入密码">
                </div>
                
            </div>

            <div class="log">登录</div>

            <div class="aply clear">
                <router-link to="/" class="fl">注册</router-link>
                <router-link to="/" class="fr">忘记密码</router-link>
            </div>

            <p class="visitor">游客模式</p>

        </ContainBox>
    </div>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


