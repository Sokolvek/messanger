<template>
    <div class="main-content-container2">
        <div class="publication-card">
            <div class="publication-container">
                <div class="publication-card1">
                    <img src="../../../assets/image_503d9cfb.png" class="image-container2" />
                </div>
                <p class="publication-title-text-style">Создайте новую публикацю</p>
            </div>
            <div class="publish-button-container1">
                <img src="../../../assets/image_5527c0f0.png" class="image-with-publish-text" />
                <div class="publish-button-container">
                    <p class="publish-button-text-style">Опубликовать</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-content-container2 {
    box-sizing: border-box;
    flex: 0 0 1107px;

    .publication-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        width: 100%;
        height: 91px;
        padding-right: 57px;
        padding-left: 57px;
        border: 1px solid #bcbcbc;
        border-radius: 23px;
        box-shadow: 2px 2px 20.5px 2px rgba(23, 23, 23, 0.25);

        .publication-container {
            box-sizing: border-box;
            display: flex;
            flex: 0 0 auto;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 77.42%;

            .publication-card1 {
                box-sizing: border-box;
                display: flex;
                flex: 0 0 auto;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                width: 55px;
                height: 54px;
                padding-right: 11px;
                padding-left: 11px;
                background: #f8e37e;
                border-radius: 15px;

                .image-container2 {
                    box-sizing: border-box;
                    display: block;
                    flex: 0 0 auto;
                    max-width: initial;
                    height: 32px;
                    border: none;
                    object-fit: cover;
                }

                .publication-title-text-style {
                    box-sizing: border-box;
                    flex: 0 0 auto;
                    width: 426px;
                    padding: 0;
                    margin: 0;
                    margin-left: -34px;
                    font: 400 20px "Roboto Slab", serif;
                    color: #bcbcbc;
                    text-align: center;
                }


            }

            .publication-title-text-style {
                box-sizing: border-box;
                flex: 0 0 auto;
                width: 426px;
                padding: 0;
                margin: 0;
                margin-left: -34px;
                font: 400 20px "Roboto Slab", serif;
                color: #bcbcbc;
                text-align: center;
            }
        }

        .publish-button-container1 {
            box-sizing: border-box;
            display: flex;
            flex: 0 0 auto;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            width: 22.58%;

            .image-with-publish-text {
                box-sizing: border-box;
                display: block;
                width: 46px;
                max-width: initial;
                height: 45px;
                margin-right: 4px;
                border: none;
                object-fit: cover;
            }

            .publish-button-container {
                box-sizing: border-box;
                display: flex;
                flex: 0 0 auto;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                width: 184px;
                height: 38px;
                padding-right: 14px;
                padding-left: 14px;
                background: rgba(243, 212, 49, 0.6);
                border: 1px solid #bcbcbc;
                border-radius: 13px;
                box-shadow: 0px 4px 5.75px rgba(0, 0, 0, 0.25);

                .publish-button-text-style {
                    flex: 0 0 auto;
                    padding: 0;
                    margin: 0;
                    font: 400 18px "Roboto Slab", serif;
                    color: #1f1f18;
                    text-align: center;
                }
            }
        }
    }
}
</style>