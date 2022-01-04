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
// Adding three new cubes
const Scene = new THREE.Scene();
let cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 0xff0000})
);


let cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 0xffff00})
);

cube2.position.x = -1;

let cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color: 0x000fff})
);

cube3.position.x = 1;

// Adding transforms
cube1.scale.y = cube1.scale.y * 0.5;
cube2.scale.y = cube2.scale.y * 0.4;
cube3.scale.y = cube3.scale.y * 0.3;

//creating the group
let MeshGroup = new THREE.Group();
MeshGroup.add(cube1);
MeshGroup.add(cube2);
MeshGroup.add(cube3);

const Camera = new THREE.PerspectiveCamera( settings.fov, settings.aspect, settings.near, settings.far);
Camera.position.z = 3;

Scene.add(Camera);
Scene.add(MeshGroup);

Renderer.setSize(settings.width, settings.height);

let Animate = () => {
  requestAnimationFrame(Animate);
  Renderer.render(Scene, Camera);
  MeshGroup.rotation.y += 0.002;
};

Animate();