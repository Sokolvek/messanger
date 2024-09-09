<template>
    <div class="auth">
        register
        <div>
            <label for="">Почта</label>
            <input type="text" v-model="data.email" placeholder="Введите E-mail">
        </div>
        <div>
            <label for="">Никнейм</label>
            <input type="password" v-model="data.username" placeholder="Введите никнейм">
        </div>
        <div>
            <label for="">Пароль</label>
            <input type="password" v-model="data.password" placeholder="Введите пароль">
        </div>
        <div>
            <div>
                <input type="checkbox" v-model="data.rememberMe">
                <label for="">Запомнить меня</label>
            </div>
            <p>Забыли пароль?</p>
        </div>
        <button @click="register">Войти</button>
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
    email:"",
    username:"",
    password:"",
    rememberMe:false
})

async function register() {
    if(!store.checkIfEmpty(data)) return

    await axios.post(`${baseUrl}/api/auth/signup`, {
        "email":data.email,
        "username":data.username,
        "password":data.password,
        "RememberMe":data.rememberMe
    }).then((resp) => {
        if(resp.status != 200) return

        return resp.json()
    }).then((data) => {
        store.jwt = data.access.jwt
        router.push("/")
    })
}

</script>