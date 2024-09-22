<template>
    <section>
        <div class="title">
            <h2>
                Развивайте карьеру и бизнес с помощью <span>GROSSMANN</span> 
            </h2>
            <span>Пространство для твоих достижений</span>
        </div>
        <div class="auth-wrap">
            <div>
                <div class="auth-opt">
                    <h4 @click="currentComponent = Auth" :class="{active : currentComponent.__name === 'Auth'}">Вход</h4>
                    <h4 @click="currentComponent = Registration" :class="{active : currentComponent.__name === 'Registration'}">Регистрация</h4>
                </div>
                <KeepAlive>
                    <component :is="currentComponent"></component>
                </KeepAlive>
            </div>
        </div>
    </section>

</template>

<script setup>

import { onMounted, ref } from 'vue';
import Auth from '../components/Auth.vue';
import Registration from '../components/Registration.vue';
const currentComponent = ref(Auth)

onMounted(() => {
    console.log(currentComponent.value.__name)
})
</script>

<style scoped>

section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
}

.title{
    text-align: center;
    width: 45%;
}

.title > h2{
    font-size: 74px;
    font-weight: normal;
    font-family: "Roboto", sans-serif;
}

.title > h2 > span{
    font-family: 'Didot', serif;
}

.auth-wrap{
    border: 1px solid #1F1F18;
    padding: 40px;
    border-radius: 17px;
    width: 30%;
}

.auth-opt{
    display: flex;
    justify-content: center;
    gap: 10px;
}



.active{
    background-color: #F3D431;
    border-radius: 12px;
    transition: 0.6s;
}

section{
    height: 100svh;
}

h4{
    padding: 5px 0;
    width: 130px;
    text-align: center;
    cursor: pointer;
}

.input-wrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;

}


.auth {
    display: flex;
    flex-direction: column;
    gap: 20px;
}


input{
    padding: 20px 10px;
    border: 1px solid #BCBCBC;
    border-radius: 16px;
}

.forgot-pass{
    color: #977F00;
}

button{
    background: #F3D431;
    border: none;
    padding: 15px 0;
    border-radius: 20px;
}

.input-wrapper-last{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

</style>