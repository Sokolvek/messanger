<template>
    <div class="team-member-card1">
        <p class="partner-test">Будущие коллеги</p>
        <div class="border-box-divider"></div>
        <div class="flex-container-with-text-aligned-left">
            <img src="../../../assets/image_8a6e3097.png" class="avatar-image" />
            <div class="designer-info-block">
                <div class="flex-container-with-text-aligned-left">
                    <p class="deficit-title">Deficit<br /></p>
                    <p class="author-signature">(Иван Петров)</p>
                </div>
                <p class="golden-text-stylist">Web-designer</p>
            </div>
        </div>
        <div class="flex-container-with-text-aligned-left">
            <img src="../../../assets/image_5e63cb53.png" class="avatar-image" />
            <div class="designer-info-block">
                <div class="flex-container-with-text-aligned-left">
                    <p class="deficit-title">Loser<br /></p>
                    <p class="author-signature">(Василий Бойко)</p>
                </div>
                <p class="golden-text-stylist">SMM-manager</p>
            </div>
        </div>
        <div class="flex-container-with-text-aligned-left">
            <img src="../../../assets/image_5e63cb53.png" class="avatar-image" />
            <div class="designer-info-block">
                <div class="flex-container-with-text-aligned-left">
                    <p class="deficit-title">Winner<br /></p>
                    <p class="author-signature">(Григорий Бойко)</p>
                </div>
                <p class="golden-text-stylist">IT</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400');
@import url('https://fonts.googleapis.com/css2?family=Gloock:wght@400');

.team-member-card1 {
    box-sizing: border-box;
    flex: 0 0 auto;
    max-width: initial;
    height: 363px;
    padding: 86px 26px 10px;
    margin-top: 21px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    padding-top: 10px;
    background: #fffbf5;
    border-radius: 36px;
    box-shadow: 0px 1px 20.5px rgba(0, 0, 0, 0.25);

    .partner-test {
        flex: 0 0 auto;
        padding: 0;
        margin: 0;
        font: 450 22px "Roboto Slab", serif;
        color: #1f1f18;
        margin-bottom: 20px;
    }

    .border-box-divider {
        box-sizing: border-box;
        width: 100%;
        border-top: 1px solid #bcbcbc;
    }

    .flex-container-with-text-aligned-left {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 10px;

        .avatar-image {
            box-sizing: border-box;
            display: block;
            width: 73px;
            max-width: initial;
            height: 72px;
            border: none;
            border-radius: 50%;
            object-fit: cover;
        }

        .designer-info-block {
            flex: 0 0 auto;
            padding-top: 7px;
            margin-left: 11px;

            .flex-container-with-text-aligned-left {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;

                .deficit-title {
                    flex: 0 0 auto;
                    padding: 0;
                    padding-bottom: 3.5px;
                    margin: 0;
                    font: 400 20px "Roboto Slab", serif;
                    color: #1f1f18;
                }

                .author-signature {
                    flex: 0 0 auto;
                    padding: 0;
                    padding-top: 4px;
                    margin: 0;
                    margin-left: 11px;
                    font: 400 16px "Roboto Slab", serif;
                    color: #1f1f18;
                }
            }

            .golden-text-stylist {
                padding: 0;
                margin: 0;
                margin-top: 0.4px;
                font: 400 14px "Roboto Slab", serif;
                color: #b29300;
            }
        }
    }
}
</style>