<template>
    <div class="filter-sort-container">
        <div class="filter-sort-container1">
            <div class="category-sort-container">
                <button className="filter-button">Фильтр</button>
                <div class="fullwidth-container">
                    <p class="category-title-style">Категория</p>
                    <div class="rounded-shadow-box">
                        <div class="content-wrapper">
                            <div class="border-box-with-top-border"></div>
                            <div class="border-box-with-top-margin"></div>
                            <div class="border-box-with-top-border1"></div>
                        </div>
                    </div>
                </div>
                <p class="category-sort-label">Сортировать</p>
                <div class="vertical-flex-container">
                    <div class="relevant-sort-container">
                        <div class="publication-sort-container">
                            <svg viewBox="0 0 24 24" x="0" y="0" fill="#F3D431" xmlns="http://www.w3.org/2000/svg">
                                <rect id="Rectangle 14_4" data-node-id="282:336" x="0.2686999999998534" y="0.5"
                                    width="23.4715" height="23" rx="11.5" stroke="#BCBCBC"
                                    xmlns="http://www.w3.org/2000/svg" />
                            </svg>
                            <p class="relevance-text">По дате публикаци</p>
                        </div>
                    </div>
                    <div class="relevant-sort-container">
                        <div class="svg-container">
                            <svg viewBox="0 0 24 24" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect id="Rectangle 14_4" data-node-id="282:336" x="0.2686999999998534" y="0.5"
                                    width="23.4715" height="23" rx="11.5" stroke="#BCBCBC"
                                    xmlns="http://www.w3.org/2000/svg" />
                            </svg>
                        </div>
                        <p class="relevance-text">По релевантности</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter-sort-container {
    flex: 0 0 auto;
    padding-left: 2.25px;

    .filter-sort-container1 {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        padding-top: 28px;
        padding-bottom: 48px;
        background: #fffbf5;
        border-radius: 36px;
        box-shadow: 0px 1px 20.5px rgba(0, 0, 0, 0.25);

        .category-sort-container {
            flex: 0 0 auto;
            padding-right: 37px;
            padding-left: 37px;
            margin-top: 20px;

            .filter-button {
                box-sizing: border-box;
                display: block;
                flex: 0 0 auto;
                align-self: center;
                width: 291px;
                min-width: 291px;
                height: 50px;
                margin-bottom: 15px;
                font: 400 20px "Roboto Slab", serif;
                color: #1f1f18;
                cursor: pointer;
                background: rgba(243, 212, 49, 0.6);
                border: 1px solid #bcbcbc;
                border-radius: 13px;
                box-shadow: 0px 4px 5.75px rgba(0, 0, 0, 0.25);
            }

            .fullwidth-container {
                box-sizing: border-box;
                width: 100%;

                .category-title-style {
                    padding: 0;
                    margin: 0;
                    font: 400 18px "Roboto Slab", serif;
                    color: #1f1f18;
                }

                .rounded-shadow-box {
                    box-sizing: border-box;
                    width: 100%;
                    margin-top: 19px;
                    margin-right: -11px;
                    border-radius: 17px;
                    box-shadow: 0px 0px 4.75px rgba(0, 0, 0, 0.15);

                    .content-wrapper {
                        box-sizing: border-box;
                        width: 100%;
                        padding: 12px 15.5px 11px;

                        .border-box-with-top-border {
                            box-sizing: border-box;
                            width: 25px;
                            border-top: 4px solid #bcbcbc;
                        }

                        .border-box-with-top-margin {
                            box-sizing: border-box;
                            width: 25px;
                            margin-top: 4px;
                            border-top: 4px solid #bcbcbc;
                        }

                        .border-box-with-top-border1 {
                            box-sizing: border-box;
                            width: 25px;
                            margin-top: 3px;
                            border-top: 4px solid #bcbcbc;
                        }
                    }
                }
            }

            .category-sort-label {
                padding: 0;
                margin: 0;
                margin-top: 23px;
                font: 400 18px "Roboto Slab", serif;
                color: #1f1f18;
            }

            .vertical-flex-container {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                width: 100%;
                margin-top: 17px;

                .publication-sort-container {
                    box-sizing: border-box;
                    display: flex;
                    flex: 0 0 auto;
                    flex-direction: row;
                    align-items: stretch;
                    justify-content: flex-start;
                    height: 24px;

                    .date-publication-container {
                        box-sizing: border-box;
                        display: flex;
                        flex: 0 0 auto;
                        flex-direction: column;
                        align-items: stretch;
                        justify-content: center;
                        width: 24.5px;
                        padding-right: 6px;
                        padding-left: 5.5px;
                        background: #f3d431;
                        border: 1px solid #bcbcbc;
                        border-radius: 15px;

                        .mini-image-container {
                            display: block;
                            flex: 0 0 auto;
                            max-width: initial;
                            height: 10.5px;
                        }

                        .publication-date-heading {
                            box-sizing: border-box;
                            flex: 0 0 auto;
                            width: 179px;
                            padding: 0;
                            margin: 0;
                            margin-left: 22.5px;
                            font: 300 18px "Roboto Slab", serif;
                            color: #1f1f18;
                            text-align: center;
                        }
                    }
                }

                .relevant-sort-container {
                    display: flex;
                    flex: 0 0 auto;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    margin-top: 21px;

                    .svg-container {
                        display: flex;
                        flex: 0 0 auto;
                        width: 24px;
                        height: 24px;
                    }

                    .relevance-text {
                        flex: 0 0 auto;
                        padding: 0;
                        margin: 0;
                        margin-left: 22.5px;
                        font: 300 18px "Roboto Slab", serif;
                        color: #1f1f18;
                    }
                }
            }
        }
    }
}
</style>