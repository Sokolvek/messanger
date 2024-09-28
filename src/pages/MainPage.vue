<template>
    <UpperBanner/>
    <div class="main-content-container">
        <LeftPannel/>
        <MainPageContent/>
    </div>
</template>

<script setup>
import UpperBanner from '../components/MainComponents/UpperBanner.vue';
import LeftPannel from '../components/MainComponents/LeftPannel.vue';
import MainPageContent from '../components/MainComponents/MainPageContent.vue';
</script>

<style lang="scss" scoped>
.main-content-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 1920px;
    padding-top: 22px;
}
</style>