<template>
    <div class="LabourPage">
        <router-view></router-view>
        <Labour/>
    </div>
</template>

<script>
import Labour from '@/components/Labour/Labour'

export default {
    name: 'LabourPage',
    components: {
        Labour
    }
}
</script>

