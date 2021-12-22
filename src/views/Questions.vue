<template>
  <div>

    <form @submit.prevent="submitAnswers">

        <div class="border mb-5" :class="[ objAnswers.optionChosen[question.id] ? 'yess':'no' ]" v-for="(question, index) in questions" v-bind:key="question.id" :id="`question${question.id}`">

            <p>{{ question.question }}</p>
            {{ index }}

            <div class="">
                        
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

        <button :disabled="cannotSubmit" class="btn btn-success">SUBMIT</button>

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
            //console.log(this.questions);
            /*console.log(this.questions.map(({ answer }) => answer));
            console.log(Object.values(this.objAnswers.optionChosen));*/

            let realAns = this.questions.map(({ answer }) => answer)
            let givenAns = Object.values(this.objAnswers.optionChosen)
            
            let count = 0

            for (let i = 0; i < realAns.length; i++) {
                const ans = realAns[i];
              
                if(ans == givenAns[i]){
                    count ++;
                }

            }
            console.log(count);

        }
    },
    mounted(){

    }
}
</script>

<style>

    .yess{
        background-color: yellow;
    }
    .no{
        background-color: tomato;
    }

</style>
