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
      let res = true

      data.forEach((item) => {
        if(item == "")
          res = false
      })
      
      return res
    }
  },
});