import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");
const Renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

let settings = {
  width: 800,
  height: 600,
  near: 1,
  far: 1000,
  aspect: 0,
  fov: 45,
};
settings.aspect = (settings.width/settings.height);

const Scene = new THREE.Scene();
const cubeGeo = new THREE.BoxGeometry(1,1,1);
const cubeMat = new THREE.MeshBasicMaterial({
  color: 0x0ff0000,
});

let cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);

const Camera = new THREE.PerspectiveCamera( settings.fov, settings.aspect, settings.near, settings.far);
Camera.position.z = 3;

Scene.add(Camera);
Scene.add(cubeMesh);
Renderer.setSize(settings.width, settings.height);
Renderer.render(Scene, Camera);