import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    backendhost:'https://my-json-server.typicode.com/prime-infinity/quizzard',
    //backendhost:'http://localhost:5000',
    questions:[],
    results:null,

  },
  mutations: {
    SET_RESULTS(state,gotten){
      state.results = gotten
    },
    GOTTEN_QUESTIONS(state,gotten){
      state.questions = gotten
    },

  },
  actions: {

    getQuestions(context){
      axios.get(this.state.backendhost+'/questions')
      .then((res) =>{
          context.commit('GOTTEN_QUESTIONS', res.data)
          //console.log(res);
      })
      .catch((error) => {
          console.log(error)
      });
    }

  },
  modules: {
  }
})
