<template>
    <section>
        <div class="title"></div>
        <div>
            <div>
                <h4 @click="currentComponent = Auth">Войти</h4>
                <h4 @click="currentComponent = Registration">Зарегестрироваться</h4>
                <KeepAlive>
                    <component :is="currentComponent"></component>
                </KeepAlive>
            </div>
        </div>
    </section>

</template>

<script setup>

import { ref } from 'vue';
import Auth from '../components/Auth.vue';
import Registration from '../components/Registration.vue';
const currentComponent = ref(Auth)



</script>