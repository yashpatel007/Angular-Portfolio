import { Injectable } from '@angular/core';
import * as THREE from 'three';


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

  constructor() {
    // camera
    this.camera = new THREE.PerspectiveCamera(75, this.aspectRatio, 5, 1500);
    this.camera.position.set(0, 0, 5);

    //scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    //renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.pointLight = new THREE.PointLight(0xffffff, 0.6);
  }


}
