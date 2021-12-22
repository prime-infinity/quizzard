<template>
  <div class="container-fluid">

    <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutLeft">  
      <router-view/>
    </transition>
  </div>
</template>

<style>

  *{
    font-family: Roboto;
  }

</style>
