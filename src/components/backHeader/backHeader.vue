<template>
    <div class="backHeader">
        <header class="clear">
            <span @click="back" class="back">
                <i class="iconfont icon-fanhui"></i>
            </span>
            <div class="fr aply clear">
                <slot></slot>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'backHeader',
    methods: {
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>


