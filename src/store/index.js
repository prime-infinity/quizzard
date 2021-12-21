import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions:[
      {
        id:0,
        question:"this and that",
        optionA:"yes",
        optionB:"no",
        optionC:"maybe",
        answer:"B",
      },
      {
        id:1,
        question:"yes and no",
        optionA:"this",
        optionB:"that",
        optionC:"maybe",
        answer:"A",
      },
      {
        id:2,
        question:"car and bike",
        optionA:"mirro",
        optionB:"bonnet",
        optionC:"maybe",
        answer:"C",
      },
      {
        id:3,
        question:"malaria and fever",
        optionA:"quinee",
        optionB:"lonart",
        optionC:"maybe",
        answer:"A",
      },
      {
        id:4,
        question:"health center",
        optionA:"why not",
        optionB:"not really",
        optionC:"maybe",
        answer:"B",
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
