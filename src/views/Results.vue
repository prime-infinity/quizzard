<template>
  <div class="row justify-content-center mt-5 mb-5 pt-5 pb-5">

    <div class="col-10 mb-5 text-center">
        <h2>Your Results</h2>
    </div>

    <div class="col-10">
        <div class="row justify-content-center">
     
            <div class="col-12 mr-md-3 p-5 h3 text-center col-md-3 border bg-second-theme r-10">
                {{ questions.length }} Questions
            </div>

            <div class="col-12 mr-md-3 p-5 h3 text-center col-md-3 border bg-theme r-10">
                {{ results }} Correct
            </div>

            <div class="col-12 col-md-3 p-5 h3 text-center border bg-wrong r-10">
                {{ questions.length - results }} Wrong
            </div>

        </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Results',

    computed:{

        ...mapState({
            results:'results',
            questions:'questions',
        }),

    }, 

}
</script>

<style>
    .bg-second-theme{
        background-color:#FBBB07 ;
    }
    .bg-theme{
        background-color: #3CAC70;;
    }
    .bg-wrong{
        background-color: lightcoral;
    }
    .r-10{
        border-radius:10px;
    }
</style>
