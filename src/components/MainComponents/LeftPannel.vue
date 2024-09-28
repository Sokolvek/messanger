<template>
    <div class="content-panel">
        <div class="fullwidth-container">
            <div class="celebrity-profile-card">
                <img src="../../assets/image_b8fef5c2.png" class="profile-image-container" />
                <p class="actor-name-text-style">Дикаприо Леонардо</p>
            </div>
            <div class="border-box-divider"></div>
        </div>
        <div class="feed-section-container">
            <div class="dynamic-feed-section-container1">
                <div class="dynamic-feed-section-container">
                    <img class="image-container1" src="../../assets/image_e7423e9c.png" />
                    <p class="dynamic-feed-section-style">Лента</p>
                </div>
                <div class="item-counter-section">
                    
                </div>
            </div>
            <div class="dynamic-feed-section-container1">
                <div class="dynamic-feed-section-container">
                    <img class="image-container1" src="../../assets/image_ea307edb.png" />
                    <p class="dynamic-feed-section-style">Профиль</p>
                </div>
                <div class="item-counter-section">
                    <!-- Счетчик новых событий --->
                </div>
            </div>
            <div class="dynamic-feed-section-container1">
                <div class="dynamic-feed-section-container">
                    <img class="image-container1" src="../../assets/image_f731cbd6.png" />
                    <p class="dynamic-feed-section-style">Чаты</p>
                </div>
                <div class="item-counter-section">
                    <!-- Счетчик новых событий --->
                </div>
            </div>
            <div class="dynamic-feed-section-container1">
                <div class="dynamic-feed-section-container">
                    <img class="image-container1" src="../../assets/image_452fec18.png" />
                    <p class="dynamic-feed-section-style">Коллеги</p>
                </div>
                <div class="item-counter-section">
                    <!-- Счетчик новых событий --->
                </div>
            </div>
            <div class="dynamic-feed-section-container1">
                <div class="dynamic-feed-section-container">
                    <img class="image-container1" src="../../assets/image_64eac8a2.png" />
                    <p class="dynamic-feed-section-style">События</p>
                </div>
                <div class="item-counter-section">
                    <!-- Счетчик новых событий --->
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.content-panel {
    box-sizing: border-box;
    flex: 0 0 auto;
    width: 307px;
    padding-bottom: 429px;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #bcbcbc;
    
    .fullwidth-container {
        box-sizing: border-box;
        width: 100%;

        .celebrity-profile-card {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            width: 100%;
            padding-right: 30px;
            padding-left: 30px;

            .profile-image-container {
                box-sizing: border-box;
                display: block;
                flex: 0 0 auto;
                align-self: center;
                width: 160px;
                max-width: initial;
                height: 160px;
                margin-left: 11.5px;
                border: none;
                border-radius: 50%;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                object-fit: cover;
            }

            .actor-name-text-style {
                flex: 0 0 auto;
                padding: 0;
                margin: 0;
                margin-top: 19px;
                font: 400 20px "Roboto Slab", serif;
                color: #1f1f18;
                text-align: center;
            }
        }

        .border-box-divider {
            box-sizing: border-box;
            width: 100%;
            margin-top: 27.5px;
            border-top: 1px solid #bcbcbc;
        }

    }

    .feed-section-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 34px;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 21.5px;

        .dynamic-feed-section-container1 {
            box-sizing: border-box;
            display: flex;
            flex: 0 0 auto;
            flex-direction: row;
            gap: 8px;
            align-items: center;
            justify-content: space-between;
            min-width: 209px;
            margin-left: -19.5px;

            .dynamic-feed-section-container {
                display: flex;
                flex: 0 0 auto;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;

                .image-container1 {
                    box-sizing: border-box;
                    display: block;
                    width: 24px;
                    max-width: initial;
                    height: 24px;
                    border: none;
                    object-fit: cover;
                }

                .dynamic-feed-section-style {
                    flex: 0 0 auto;
                    padding: 0;
                    margin: 0;
                    margin-left: 15px;
                    font: 400 20px "Roboto Slab", serif;
                    color: #1f1f18;
                    white-space: pre-wrap;
                }
            }

            .item-counter-section {
                display: flex;
                flex: 0 0 auto;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
            }
        }
    }
}
</style>