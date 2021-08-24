import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


@Injectable({
  providedIn: 'root'
})
export class ThreedSetupServiceService {

  aspectRatio = window.innerWidth / window.innerHeight;

  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  ambientLight: THREE.AmbientLight;
  pointLight: THREE.PointLight;
  dirLight: THREE.DirectionalLight;
  control: OrbitControls;
  gltfLoader: GLTFLoader;

  constructor() {
    // camera
    this.camera = new THREE.PerspectiveCamera(75, this.aspectRatio, 5, 5000);
    this.camera.position.set(0, 0, 5);

    //scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    //renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.pointLight = new THREE.PointLight(0xffffff, 0.6);
    this.dirLight = new THREE.DirectionalLight(0xffffff, 0.6);

    //controls
    this.control = new OrbitControls(this.camera, this.renderer.domElement);

    this.gltfLoader = new GLTFLoader();


  }


}
