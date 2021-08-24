import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Camera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThreedSetupServiceService } from '../services/threed-setup-service.service';



@Component({
  selector: 'app-threed-hero',
  templateUrl: './threed-hero.component.html',
  styleUrls: ['./threed-hero.component.css']
})
export class ThreedHeroComponent implements OnInit {

  constructor(public threeDService: ThreedSetupServiceService) { }
  ngOnInit(): void {
    //threeDsetup();
    gltfLoader = this.threeDService.gltfLoader;
    const container = document.createElement('div');
    document.getElementById('tdBikeContainer')!.appendChild(container);
    container.appendChild(renderer.domElement);

    gltfLoader.load('../../assets/hoverBike/scene.gltf', function (gltf) {
      bike = gltf.scene.children[0];
      scene.add(gltf.scene);

    })
    animate();

  }

  refresh() {
    window.location.reload();
  }

  // threeDsetup() {
  //   // camera 
  //   cam = this.threeDService.camera;
  //   cam.position.set(0, 0, 5)
  //   //cam.position.set(800, 100, 1000);
  //   cam.lookAt(0, 0, 0);

  //   // scene
  //   scene = this.threeDService.scene;
  //   let ambLight = this.threeDService.ambientLight;
  //   let pontLight = this.threeDService.pointLight;
  //   pontLight.position.set(0, 1, 0);
  //   pontLight.castShadow = true;

  //   // cube 
  //   let cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xFF0000 }));
  //   scene.add(cube);
  //   scene.add(ambLight);
  //   scene.add(pontLight);



  //   // renderer
  //   renderer = this.threeDService.renderer;
  //   renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  //   let control = this.threeDService.control;

  // }

}


const cam: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 5000);
cam.rotation.y = 45 / 180 * Math.PI;
cam.position.set(800, 100, 1000);
cam.lookAt(0, 0, 0);

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

const scene: THREE.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a192f);
let light = new THREE.AmbientLight(0x404040, 100);
let dirLight = new THREE.PointLight(0xffffff, 100);
dirLight.position.set(0, 1, 0);
dirLight.castShadow = true;

scene.add(light);
scene.add(dirLight);

let controls: OrbitControls = new OrbitControls(cam, renderer.domElement);
// let cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
// scene.add(cube);

let bike: any;

let gltfLoader;
export function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, cam);
  bike.rotation.z += 0.01
}

export function onWindowResize() {
  cam.aspect = window.innerWidth / window.innerHeight
  cam.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
}
window.addEventListener('resize', onWindowResize);