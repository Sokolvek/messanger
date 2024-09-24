<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gloock:wght@400" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400" />
    <section class="section">
        <div class="career-boost-container">
            <div class="career-boost-section">
                <Banner class="banner-container" />
                <div class="form-container">
                    <div class="auth-form-container">
                        <div class="auth-form-tab">
                            <label
                                class="login-title"
                                :class="{ active: componentName == 'Auth' }"
                                @click="switchComponent('Auth')">
                                Войти
                            </label>
                            <label
                                class="login-title"
                                :class="{ active: componentName == 'Registration' }"
                                @click="switchComponent('Registration')">
                                Регистрация
                            </label>
                        </div>
                        <KeepAlive>
                            <component :is="currentComponent"></component>
                        </KeepAlive>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import Auth from '../components/AuthComponents/Auth.vue';
import Registration from '../components/AuthComponents/Registration.vue';
import Banner from '../components/AuthComponents/Banner.vue';
var componentName = 'Auth';
const currentComponent = ref(componentName);

function switchComponent(componentName) {
    if (componentName === 'Auth') {
        currentComponent.value = Auth;
    } else if (componentName === 'Registration') {
        currentComponent.value = Registration;
    }
    this.componentName = componentName;
}
</script>

<style scoped lang="scss">
.section {
    background: #fffbf2;

    .career-boost-container {
        display: flex;
        justify-content: center;
        padding-right: 24px;

        .career-boost-section {
            display: flex;
            padding-top: 150px;
            padding-bottom: 55px;

            .form-container {
                width: 782px;
                padding-left: 48px;

                .auth-form-container {
                    padding-top: 39px;
                    padding-bottom: 57px;
                    border: 1px solid #1f1f18;
                    border-radius: 17px;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                    .auth-form-tab {
                        display: flex;
                        flex: 0 0 auto;
                        flex-direction: row;
                        align-items: center;
                        align-self: center;
                        justify-content: flex-start;
                        margin-left: 34%;

                        .login-title {
                            box-sizing: border-box;
                            display: block;
                            position: relative;
                            flex: 0 0 auto;
                            width: 158px;
                            min-width: 158px;
                            height: 40px;
                            font: 400 20px "Roboto Slab", serif;
                            color: #1f1f18;
                            cursor: pointer;
                            border: none;
                            border-radius: 13px;
                            background: rgba(255,255,255,0);
                        }

                        .login-title.active {
                            background: rgba(243, 212, 49, 0.6);
                        }
                    }


                }
            }

            .banner-container {
                box-sizing: border-box;
                display: flex;
                flex: 0 0 auto;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                width: 810px;
                padding-top: 124px;
                padding-right: 15px;
                padding-bottom: 360px;
            }
        }
    }
}
</style>
