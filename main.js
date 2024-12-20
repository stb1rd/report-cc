// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 10, 20);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(0, 5, 0);
// controls.update();

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 10;
// controls.update();

// const axesHelper = new THREE.AxesHelper(50);
// scene.add(axesHelper);

// function animate() {
//   renderer.render(scene, camera);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   controls.update();
// }
// renderer.setAnimationLoop(animate);

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

function main() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  {
    const planeSize = 40;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -0.5;
    scene.add(mesh);
  }

  {
    const cubeSize = 4;
    const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

    const cubeMat = new THREE.MeshBasicMaterial({ color: 'green', transparent: true, opacity: 0.3 });
    const mesh = new THREE.Mesh(cubeGeo, cubeMat);
    mesh.position.set(0, cubeSize / 2, cubeSize);
    scene.add(mesh);

    const edges = new THREE.EdgesGeometry(cubeGeo);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    line.position.set(0, cubeSize / 2, cubeSize);
    scene.add(line);
  }

  {
    const cubeSize = 4;
    const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cubeMat = new THREE.MeshPhongMaterial({ color: 'green', transparent: true, opacity: 0.3 });
    const mesh = new THREE.Mesh(cubeGeo, cubeMat);
    mesh.position.set(0, cubeSize / 2, cubeSize * 2);
    scene.add(mesh);

    const edges = new THREE.EdgesGeometry(cubeGeo);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    line.position.set(0, cubeSize / 2, cubeSize * 2);
    scene.add(line);
  }

  {
    const color = 0xffffff;
    const intensity = 5;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);
  }

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
