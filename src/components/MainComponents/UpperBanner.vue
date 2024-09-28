<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gloock:wght@400" />
    <div style="display: inline-block; width: 1920px">
        <div class="centered-panel-with-text">
            <p class="gloock-serif-heading">GROSSMANN</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.centered-panel-with-text {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    min-width: 100%;
    height: 108px;
    padding-right: 48px;
    padding-left: 59px;
    background: #fffbf5;
    border: 1px solid #bcbcbc;
    box-shadow: 288px -1px 49px rgba(0, 0, 0, 0.13);

    .gloock-serif-heading {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font: 400 32px Gloock, serif;
        color: #1f1f18;
        letter-spacing: 8.01px;
    }
}
</style>