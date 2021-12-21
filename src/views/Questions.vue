<template>
  <div>

    <form @submit.prevent="submitAnswers">

        <div class="border mb-5" :class="applyClass(question.id)"  v-for="(question, index) in questions" v-bind:key="question.id" :id="`question${question.id}`">

            <p>{{ question.question }}</p>
            {{ index }}

            <div class="">
                        
                <input type="radio" :id="`one${question.id}`"  value="A" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`one${question.id}`">A</label>{{ question.optionA }}<br> 

                <input type="radio" :id="`two${question.id}`" value="B" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`two${question.id}`">B</label>{{ question.optionB }}<br>

                <input type="radio" :id="`three${question.id}`" value="C" v-model="objAnswers.optionChosen[question.id]">
                <label :for="`three${question.id}`">C</label>{{ question.optionC }}<br>

                <!--<span v-if="revealAnswers">ANSWER: {{ question.answer }}</span>  <br>

                <div v-if="revealAnswers">
                    <div class="failedQuestio" v-if="question.answer != questionStatus(question.id)">
                        failed
                    </div>
                    <div class="gottenQuestio" v-if="question.answer == questionStatus(question.id)">
                        correct
                    </div>
                </div>-->

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

            /*if(this.questions.length != Object.keys(this.objAnswers.optionChosen).length){
                return true
            }*/
            return false

        },
        
        yes:function(){
            return true
            //:class="{yess:yes}"
        },
        theObject:function(){
            return Object.keys(this.objAnswers.optionChosen)
        }


    }, 
    methods:{
        applyClass(e){
            return{
                'yess':e == 2 || e == 0,
            }
        },
        questionStatus:function(e){
            return this.objAnswers.optionChosen[e]
        },
        submitAnswers:function(){
            this.revealAnswers = true

            //console.log(this.objAnswers.optionChosen);
            
            let keysLength = Object.keys(this.objAnswers.optionChosen)
            console.log(keysLength);

            //console.log(this.objAnswers);
            //console.log(this.questions);

            //let something = 
            /*Object.keys(this.objAnswers.optionChosen).forEach(element => {
                console.log(element)
                console.log(this.questions);
                /*let something = this.questions.filter(normall => normall.id !== element)
                console.log(something);
            })*/
            

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

</style>
