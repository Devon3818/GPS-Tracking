<template>
    <div class="Talent">
        <nav class="clear">
           <router-link to="talentJob" active-class="on" class="tab">
            <i class="iconfont icon-gongjuxiang"></i>
            <p>职位</p>
           </router-link>
           <router-link to="talentResume" active-class="on" class="tab">
            <i class="iconfont icon-yaoqing-neirong"></i>
            <p>简历</p>
           </router-link> 
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Talent'
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


