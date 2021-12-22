<template>
  <div>

    <div id="container">
    </div>

  </div>
</template>

<script>

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'Home',
  data(){
    return{
      scene: null,
      camera: null,
      renderer: null,
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
      //this.scene.background = new THREE.Color( 0xffffff );

      const loader = new GLTFLoader();
      const newScene = this.scene
      loader.load(
        'models/model.gltf',
        function ( gltf ) {
          newScene.add( gltf.scene );
          console.log("loaded");
          //console.log(gltf);
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

<style scoped>
  #container{
    height: 100vh;
  } 
</style>