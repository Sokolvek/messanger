import { defineStore } from "pinia";



export const useCounterStore = defineStore("counter", {
  state: () => ({
    test:"hello world",
    jwt:""
  }),
  getters: {

  },
  actions: {
    checkIfEmpty(data){
      for(let item in data){
        if(!item) return false
      }
      return true
    }
  },
});