<template>
    <div class="registration-form-container">
        <div class="form-layout-container">
            <div class="email-input-container1">
                <p class="email-input-title-style">Почта</p>
                <input class="email-input-container" type="text" v-model="data.email" placeholder=" Введите E-mail">
            </div>
            <div class="nickname-input-container">
                <p class="email-input-title-style">Никнейм</p>
                <input class="email-input-container" type="text" v-model="data.username" placeholder=" Введите никнейм">
            </div>
            <div class="password-input-container">
                <p class="email-input-title-style">Пароль</p>
                <input class="email-input-container1" src="../assets/password-eye.svg" type="password" v-model="data.password"
                    placeholder=" Введите пароль">
                <img src="../assets/password-eye.svg" class="password-input-icon" />
            </div>
            <div class="main-content-container">
                <div class="email-input-container1">
                    <!-- Требования к паролю -->
                    <div class="password-requirement-list password-requirement-list1">
                        <ul class="special-symbol-list">
                            <li>Пароль должен содержать один спец символ</li>
                        </ul>
                    </div>
                    <div class="password-requirement-list password-requirement-list1">
                        <ul class="special-symbol-list">
                            <li>Пароль должен содержать хотя бы одну заглавную букву</li>
                        </ul>
                    </div>
                    <div class="password-requirement-list password-requirement-list1">
                        <ul class="special-symbol-list">
                            <li>Пароль должен содержать хотя бы одну цифру</li>
                        </ul>
                    </div>
                </div>
                <div class="remember-me-section">
                    <input type="checkbox" v-model="data.rememberMe">
                    <label class="remember-me-text-style">Запомнить меня</label>
                </div>
            </div>

        </div>
        <div class="button-form-container">
            <button class="register-button" @click="register">Зарегистрироваться</button>
        </div>
    </div>
</template>


<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useCounterStore } from '../stores/counter';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useCounterStore()
const baseUrl = import.meta.env.VITE_BASE

const data = reactive({
    email: "",
    username: "",
    password: "",
    rememberMe: false
})

async function register() {
    if (!store.checkIfEmpty([data.email, data.username, data.password])) return

    await axios.post(`${baseUrl}/api/auth/signup`, {
        "email": data.email,
        "username": data.username,
        "password": data.password,
        "RememberMe": data.rememberMe
    }).then((resp) => {
        if (resp.status != 200) return

        return resp.json()
    }).then((data) => {
        store.jwt = data.access.jwt
        router.push("/")
    })
}

</script>

<style lang="scss" scoped>
.registration-form-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-top: 37px;

    .form-layout-container {
        padding-right: 72px;
        padding-left: 72px;

        .email-input-container1 {
            box-sizing: border-box;
            width: 100%;

            .email-input-container {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                width: 100%;
                height: 76px;
                padding-right: 7px;
                padding-left: 7px;
                margin-top: 13px;
                border: 1px solid #bcbcbc;
                border-radius: 16px;
                box-shadow: 2px 2px 4px rgba(23, 23, 23, 0.25);
                padding: 0;
                padding-right: 8px;
                padding-left: 8px;
                margin: 0;
                font: 400 20px "Roboto Slab", serif;
                color: #1f1f18;
            }

            .email-input-title-style {
                padding: 0;
                padding-right: 8px;
                padding-left: 8px;
                margin: 0;
                font: 400 20px "Roboto Slab", serif;
                color: #1f1f18;
            }
        }

        .nickname-input-container {
            box-sizing: border-box;
            width: 100%;
            margin-top: 23px;

            .email-input-container {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                width: 100%;
                height: 76px;
                padding-right: 7px;
                padding-left: 7px;
                margin-top: 13px;
                border: 1px solid #bcbcbc;
                border-radius: 16px;
                box-shadow: 2px 2px 4px rgba(23, 23, 23, 0.25);
                flex: 0 0 auto;
                padding: 0;
                margin-left: 0;
                font: 400 20px "Roboto Slab", serif;
                color: #bcbcbc;

            }

            .email-input-title-style {
                padding: 0;
                padding-right: 8px;
                padding-left: 8px;
                margin: 0;
                font: 400 20px "Roboto Slab", serif;
                color: #1f1f18;
            }
        }

        .password-input-container {
            box-sizing: border-box;
            width: 100%;
            margin-top: 23px;

            .email-input-container1 {
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                justify-content: center;
                width: 100%;
                height: 76px;
                padding-right: 7px;
                padding-left: 7px;
                margin-top: 13px;
                border: 1px solid #bcbcbc;
                border-radius: 16px;
                box-shadow: 2px 2px 4px rgba(23, 23, 23, 0.25);
                flex: 0 0 auto;
                padding: 0;
                margin-left: 0;
                font: 400 20px "Roboto Slab", serif;
                color: #bcbcbc;

            }

            .email-input-title-style {
                padding: 0;
                padding-right: 8px;
                padding-left: 8px;
                margin: 0;
                font: 400 20px "Roboto Slab", serif;
                color: #1f1f18;
            }

            .password-input-icon {
                box-sizing: border-box;
                display: block;
                width: 24px;
                max-width: initial;
                height: 24px;
                border: none;
                object-fit: cover;
            }
        }

        .main-content-container {
            box-sizing: border-box;
            width: 100%;
            margin-top: 13px;

            .email-input-container1 {
                box-sizing: border-box;
                width: 100%;

                .password-requirement-list {
                    padding: 0;
                    margin: 0;
                    font: 400 18px "Roboto Slab", serif;
                    color: #ef888b;
                    white-space: pre-wrap;

                    .password-requirement-list1 {
                        margin-top: 12px;

                        .password-requirement-list:first-child {
                            margin-top: 0px;

                            .special-symbol-list {
                                padding-left: 1.5em;
                                margin: 0;
                                list-style: disc;
                            }
                        }
                    }
                }
            }



            .remember-me-section {
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding-right: 9px;
                padding-left: 9px;
                margin-top: 35px;

                .remember-me-text-style {
                    flex: 0 0 auto;
                    padding: 0;
                    margin: 0;
                    margin-left: 13px;
                    font: 400 20px "Roboto Slab", serif;
                    color: #1f1f18;
                }
            }


        }
    }

    .button-form-container {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;

        .register-button {
            box-sizing: border-box;
            display: block;
            flex: 0 0 auto;
            align-self: center;
            width: 588px;
            min-width: 588px;
            height: 62px;
            margin-top: 20px;
            font: 400 20px "Roboto Slab", serif;
            color: #1f1f18;
            cursor: pointer;
            background: #f3d431;
            border: none;
            border-radius: 20px;
            box-shadow: 2px 2px 4px rgba(23, 23, 23, 0.25);
        }
    }
}
</style>
