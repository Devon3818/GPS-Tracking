<template>
    <div class="TabRentingPage">
        <router-view></router-view>
        <TabRenting/>
    </div>
</template>

<script>
import TabRenting from '@/components/TabRenting/TabRenting'

export default {
    name: 'TabRentingPage',
    components: {
        TabRenting
    }
}
</script>

<style lang="scss" scoped>
    @import './style.scss'
</style>




