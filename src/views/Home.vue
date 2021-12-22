<template>
  <div>

    <div id="container">
    </div>

    
    <h1 class="textFloat fm text-theme font-xxl">Quizzard</h1>
  
    <h4 class="textFloat fs text-theme-blend">The Quiz Wizzard</h4>

    <div class="row">
      <div class="col-10 col-md-6 textFloat fb">
        <router-link to="/Questions">
          <button class="btn button-theme pt-3 pb-3 font-xl" style="width: 100%;">
            Continue
          </button>
        </router-link>
      </div>
    </div>
    

  </div>
</template>

<script>

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from "gsap";

export default {
  name: 'Home',
  data(){
    return{
      scene: null,
      camera: null,
      renderer: null,
      ani:null,
    }
  },
  methods:{
    init: function() {

      let container = document.getElementById('container');
      this.camera = new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,0.1, 1000);

      //this.camera.position.set(0, 0, 0)
      this.scene = new THREE.Scene();

      // light
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(2,2,5)
      this.scene.add(light);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      this.camera.position.z = 5;
      this.scene.background = new THREE.Color( 0xffffff );

      this.ani = gsap.timeline({repeat:-1});

      const loader = new GLTFLoader();
      const newScene = this.scene
      let newAni = this.ani

      loader.load(
        'models/model.gltf',
        function ( gltf ) {
          newScene.add( gltf.scene );
          gltf.scene.position.y = 1
          newAni.to(gltf.scene.rotation, {duration: 15, y:Math.PI*5});

        },
        function ( xhr ) {
          console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function ( error ) {
          console.log( 'An error happened',error );
        }
      );

    },
    resizeRenderer: function() {
        let container = document.getElementById('container');
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.camera.aspect = container.clientWidth/container.clientHeight;
        this.camera.updateProjectionMatrix();
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);           
    },

  },
  mounted(){
    this.init();
    this.animate();
    window.addEventListener('resize', this.resizeRenderer)
  },
}
</script>

<style>
  #container{
    height: 100vh;
  } 
  .textFloat{
    position:fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width:100%;
  }
  .fm{
    bottom:40%;
  }
  .fs{
    bottom:35%;
  }
  .fb{
    bottom:15%;
  }
  .text-theme{
    color: #3CAC70;
  }
  .text-theme-blend{
    color: #184d31;
  }
  .font-xxl{
    font-size: xxx-large;
  }
  .font-xl{
    font-size: x-large;
  }
  .button-theme{
    background-color: #3CAC70;
    color: white;
    font-weight: bolder;
    border-radius:50px ;
  }
  .button-theme:hover{
    background-color: #0f3822;
    transition: .5s ease;
    color: white;
  }
</style>