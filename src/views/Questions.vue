<template>
  <div>

    <form @submit.prevent="submitAnswers">

        <div v-for="(question, index) in questions" v-bind:key="question.id">

            <p>{{ question.question }}</p> <br>
            {{ index }}
            {{ question.id }}

            <div class="border mt-2 mb-2">
                        
                <input type="radio" :id="`one${question.id}`"  value="A" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`one${question.id}`">A</label>{{ question.optionA }}<br> 

                <input type="radio" :id="`two${question.id}`" value="B" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`two${question.id}`">B</label>{{ question.optionB }}<br>

                <input type="radio" :id="`three${question.id}`" value="C" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`three${question.id}`">C</label>{{ question.optionC }}<br>

                <span v-if="revealAnswers">ANSWER: {{ question.answer }}</span>  <br>

                <div v-if="revealAnswers">
                    <div class="failedQuestio" v-if="question.answer != questionStatus(question.id)">
                        failed
                    </div>
                    <div class="gottenQuestio" v-if="question.answer == questionStatus(question.id)">
                        correct
                    </div>
                </div>

            </div>

        </div>

        <button class="btn btn-success">SUBMIT</button>

    </form>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Questions',
    data(){
      return{
        objAnswers:{
            optionChosen:{},
        },
        revealAnswers:false,
      }
    },
    computed:{

        ...mapState({
            questions:'questions',
        }),

    }, 
    methods:{
        questionStatus:function(e){
            return this.objAnswers.optionChosen[e]
        },
        submitAnswers:function(){
            this.revealAnswers = true
        }
    },
    mounted(){

    }
}
</script>
