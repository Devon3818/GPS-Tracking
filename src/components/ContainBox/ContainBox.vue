<template>
    <div class="ContainBox-component">
        <backHeader>
            <slot name="backHeader"></slot>
        </backHeader>
        <slot></slot>
    </div>
</template>

<script>
import backHeader from '@/components/backHeader/backHeader'

export default {
    name: 'ContainBox',
    components: {
        backHeader
    }
}
</script>

<style lang="scss">
    .ContainBox-component {
        padding-top: 1.4rem;
    }
</style>
