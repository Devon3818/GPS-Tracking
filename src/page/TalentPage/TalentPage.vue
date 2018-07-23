<template>
    <div class="TalentPage">
        <router-view></router-view>
        <Talent/>
    </div>
</template>

<script>
import Talent from '@/components/Talent/Talent'

export default {
    name: 'TalentPage',
    components: {
        Talent
    }
}
</script>

