<template>
    <div class="xl-button">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'xl-button',
    props: {
        type: String
    }
}
</script>
<style scoped>
.xl-button {
    display: inline-block;
    padding: 3px 6px;
    background: #000;
    color: #fff;
    cursor: pointer;
}
</style>