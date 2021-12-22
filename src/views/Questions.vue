<template>
  <div class="row justify-content-center mt-5 mb-5 pt-5 pb-5">

    <div class="col-11 border question-border col-md-8 mb-5 p-3 bg-question" :class="[ objAnswers.optionChosen[question.id] ? 'answered':'not-answered' ]" v-for="(question, index) in questions" v-bind:key="question.id" :id="`question${question.id}`">
        
        <div class="row">
            <div class="col-12">
                <span>Question {{ index + 1 }}</span>
            </div>
            <div class="col-12">
                <span class="font-weight-bold">{{ question.question }}</span>
            </div>
        </div>
 


        <div class="row mt-3">

            <div class="col-12">

                
                <input type="radio" :id="`one${question.id}`"  value="A" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`one${question.id}`">A</label> <span class="ml-2"> {{ question.optionA }} </span><br> 

                <input type="radio" :id="`two${question.id}`" value="B" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`two${question.id}`">B</label> <span class="ml-2"> {{ question.optionB }}</span><br>

                <input type="radio" :id="`three${question.id}`" value="C" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`three${question.id}`">C</label> <span class="ml-2"> {{ question.optionC }}</span><br>

                <span v-if="revealAnswers">ANSWER: {{ question.answer }}</span>  <br>

                <div v-if="revealAnswers">
                    <div class="failed-question p-2" v-if="question.answer != questionStatus(question.id)">
                        failed
                    </div>
                    <div class="gotten-question p-2" v-if="question.answer == questionStatus(question.id)">
                        correct
                    </div>
                </div>

            </div> 

        </div>

    </div>

    
        <div class="col-10 col-md-6" v-if="!revealAnswers">
            <button style="width: 100%;" :disabled="cannotSubmit" class="btn button-theme pt-3 pb-3 font-xl" @click="submitAnswers">SUBMIT</button>
        </div>

        
        <div class="col-10 col-md-6" v-if="hasResults">
            <router-link to="/results"><button style="width: 100%;" class="btn button-theme pt-3 pb-3 font-xl">Results</button></router-link>
        </div>
   
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
        hasResults:false,
      }
    },
    computed:{

        ...mapState({
            questions:'questions',
        }),
    
        cannotSubmit:function(){

            if(this.questions.length != Object.keys(this.objAnswers.optionChosen).length){
                return true
            }
            return false

        },
        

    }, 
    methods:{
 
        questionStatus:function(e){
            return this.objAnswers.optionChosen[e]
        },
        submitAnswers:function(){
            this.revealAnswers = true
           
            let realAns = this.questions.map(({ answer }) => answer)
            let givenAns = Object.values(this.objAnswers.optionChosen)
            
            let count = 0

            for (let i = 0; i < realAns.length; i++) {
                const ans = realAns[i];
              
                if(ans == givenAns[i]){
                    count ++;
                }

                //

            }
            this.$store.commit("SET_RESULTS",count)
            this.hasResults = true
            //console.log(count);

        }
    },
    mounted(){

    }
}
</script>

<style>
    .question-border{
        border-radius: 20px;
    }
    .answered{
        border:1px solid #3CAC70 !important;
    }
    .not-answered{
        border: 1px solid red !important;
    }
    .bg-question{
        background-color: #f8f8f8;
    }
    .failed-question{
        background-color:lightcoral;
        color:white;
        border-radius: 50px;
    }
    .gotten-question{
        background-color: #3CAC70;
        color:white;
        border-radius: 50px;
    }
</style>
