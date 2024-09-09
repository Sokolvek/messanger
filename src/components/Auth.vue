<template>
    <div class="auth">
        auth
        <div>
            <label for="">Почта</label>
            <input type="text" v-model="data.email" placeholder="Введите E-mail">
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
        <button @click="auth">Войти</button>
    </div>
</template>


<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useCounterStore } from '../stores/counter';

const baseUrl = import.meta.env.VITE_BASE
const store = useCounterStore()

const data = reactive({
    email: "",
    password: "",
    rememberMe: false
})



async function auth() {
    if (!store.checkIfEmpty([data.email,data.password])) return
    
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
            if(resp.status != 200) return

            return resp.json()
        }).then((data) => {
            store.jwt = data.access.jwt
        })
}

onMounted(() => console.log(baseUrl))
</script>
