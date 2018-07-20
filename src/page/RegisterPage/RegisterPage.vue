<template>
    <div class="RegisterPage">
        <ContainBox>

            <div class="login-wrap">

                <div class="int-wrap clear">
                    <span class="fl">手机号</span>
                    <input type="text" class="fl" placeholder="请输入手机号">
                </div>

                <div class="int-wrap clear">
                    <span class="fl">验证码</span>
                    <input type="password" class="fl yzm" placeholder="请输入短信验证码">
                    <p class="yzm-p fr">获取验证码</p>
                </div>

                <div class="int-wrap clear">
                    <span class="fl">新密码</span>
                    <input type="password" class="fl" placeholder="请输入密码">
                </div>
                
            </div>

            <div class="log">完成</div>

        </ContainBox>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage'
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


