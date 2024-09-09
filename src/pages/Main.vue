<template>
    <div>
        <h2>main page</h2>
        <h3>{{store.jwt}}</h3>
    </div>
     
</template>

<script setup>
import { useCounterStore } from '../stores/counter';


const store = useCounterStore()

</script>