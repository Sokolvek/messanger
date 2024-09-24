<template>
    <div class="login-form-container">
        <div class="email-input-container">
            <label class="email-input-title-style" for="">Почта</label>
            <input class="email-input-container1" type="text" v-model="data.email" placeholder=" Введите E-mail">
        </div>
        <div class="email-input-container">
            <label class="email-input-title-style" for="">Пароль</label>
            <input class="email-input-container1" type="password" v-model="data.password" placeholder=" Введите пароль">
            <img src="../../assets/password-eye.svg" class="password-input-icon" />
        </div>
        <div class="login-section">
            <div>
                <input class="remember-me-section" type="checkbox" v-model="data.rememberMe">
                <label class="remember-me-text-style" for="">Запомнить меня</label>
            </div>
            <p class="forgot-pass">Забыли пароль?</p>
        </div>
        <div class="button-form-container">
            <button class="login-button" @click="auth">Войти</button>
        </div>
    </div>
</template>


<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useCounterStore } from '../../stores/counter';

const baseUrl = import.meta.env.VITE_BASE
const store = useCounterStore()

const data = reactive({
    email: "",
    password: "",
    rememberMe: false
})

async function auth() {
    if (!store.checkIfEmpty([data.email, data.password])) return

    axios.post(`${baseUrl}/api/auth/signin`, {
        "email": data.email,
        "password": data.password,
        "rememberMe": data.rememberMe
    },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => {
            if (resp.status != 200) return

            return resp.json()
        }).then((data) => {
            store.jwt = data.access.jwt
        })
}

onMounted(() => console.log(baseUrl))
</script>

<style lang="scss" scoped>
.login-form-container {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 47px;
    align-items: center;
    justify-content: flex-start;
    margin-top: 36px;

    .email-input-container {
        box-sizing: border-box;
        flex: 0 0 auto;
        min-width: 588px;

        .email-input-title-style {
            padding: 0;
            padding-right: 7px;
            padding-left: 7px;
            margin: 0;
            font: 400 20px "Roboto Slab", serif;
            color: #1f1f18;
        }

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
            padding-right: 8px;
            padding-left: 8px;
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

    .login-section {
        box-sizing: border-box;
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        gap: 8px;
        align-items: flex-start;
        justify-content: space-between;
        min-width: 589px;
        margin-top: 4px;

        .remember-me-section {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }

        .remember-me-text-style {
            flex: 0 0 auto;
            padding: 0;
            margin: 0;
            margin-left: 13px;
            font: 400 20px "Roboto Slab", serif;
            color: #1f1f18;
        }

        .forgot-pass {
            flex: 0 0 auto;
            padding: 0;
            margin: 0;
            font: 400 20px "Roboto Slab", serif;
            color: #977f00;
        }

    }

    .button-form-container {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;

        .login-button {
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