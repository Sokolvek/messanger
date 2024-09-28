<template>
    <div class="content-section">
        <div class="featured-content-container">
            <div class="recommendation-section">
                <p class="featured-content-text-style1">Рекомендации</p>
                <p class="featured-content-text-style">Новое</p>
            </div>
            <div class="search-section">
                <div class="search-container1">
                    <div class="search-container">
                        <img src="../../assets/image_89dbfb8e.png" class="search-icon" />
                        <p class="search-button-style">Искать</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content-container1">
            <CreatingNewPost />
            <div class="sidebar-container">
                <FilterSortContainer />
                <FuturePartnersContainer />
            </div>
        </div>
    </div>

</template>
<script setup>
import FilterSortContainer from './SideBarContent/FilterSortContainer.vue';
import FuturePartnersContainer from './SideBarContent/FuturePartnersContainer.vue';
import CreatingNewPost from './MainContent/CreatingNewPost.vue';
</script>

<style lang="scss" scoped>
.content-section {
    flex: 1 0 auto;
    padding-top: 28px;
    margin-left: 67px;

    .featured-content-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 120px;
        padding-right: 52px;
        padding-left: 52px;
        background: #fffbf5;
        border-radius: 36px;
        box-shadow: 0px 1px 20.5px rgba(0, 0, 0, 0.25);

        .recommendation-section {
            box-sizing: border-box;
            display: flex;
            flex: 0 0 auto;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 64.53%;
            height: 120px;

            .featured-content-text-style1 {
                box-sizing: border-box;
                display: block;
                flex: 0 0 auto;
                width: 195px;
                min-width: 195px;
                height: 50px;
                font: 450 20px "Roboto Slab", serif;
                color: #1f1f18;
                cursor: pointer;
                background: rgba(243, 212, 49, 0.6);
                border: 1px solid #bcbcbc;
                text-align: center;
                padding-top: 7px;
                border-radius: 13px;
                box-shadow: 0px 4px 5.75px rgba(0, 0, 0, 0.25);
            }

            .featured-content-text-style {
                box-sizing: border-box;
                flex: 0 0 auto;
                width: 157px;
                padding: 0;
                margin: 0;
                margin-left: 11px;
                font: 400 20px "Roboto Slab", serif;
                color: #1f1f18;
                text-align: center;
            }
        }

        .search-section {
            box-sizing: border-box;
            display: flex;
            flex: 0 0 auto;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;
            width: 35.47%;
            padding-left: 15px;

            .search-container1 {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                width: 100%;
                margin-right: -26px;
                box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);

                .search-container {
                    box-sizing: border-box;
                    display: flex;
                    flex: 0 0 auto;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 17px 28px 19px;
                    background: #fffbf5;
                    border: 1px solid rgba(188, 188, 188, 0.3);
                    border-radius: 17px;

                    .search-icon {
                        box-sizing: border-box;
                        display: block;
                        width: 26px;
                        max-width: initial;
                        height: 24px;
                        border: none;
                        object-fit: cover;
                    }

                    .search-button-style {
                        box-sizing: border-box;
                        flex: 0 0 auto;
                        width: 80px;
                        padding: 0;
                        margin: 0;
                        margin-left: 17.5px;
                        font: 400 20px "Roboto Slab", serif;
                        color: #bcbcbc;
                        text-align: center;
                    }
                }
            }
        }
    }

    .main-content-container1 {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin-top: 19px;

        .sidebar-container {
            box-sizing: border-box;
            display: flex;
            flex: 0 0 356px;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            margin-left: 24px;
        }
    }
}
</style>