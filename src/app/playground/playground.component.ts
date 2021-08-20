import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { AmbientLight, Color, Scene } from 'three';

const aspectRatio = window.innerWidth / window.innerHeight;
// camera
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, aspectRatio, 5, 1500);
camera.position.set(0, 0, 5)
camera.lookAt(0, 0, 0)

// scene
const scene: THREE.Scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff)

// renderer
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// light
const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const pointLight: THREE.PointLight = new THREE.PointLight(0xffffff, 0.6);

// animation loop
export function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.appendChild(renderer.domElement);
    animate();
  }

}
