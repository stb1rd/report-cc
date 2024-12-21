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

const getCube = (x, y, z, color = 'green') => {
  const cubeSize = 1;
  const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

  const cubeMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.3 });
  const mesh = new THREE.Mesh(cubeGeo, cubeMat);
  mesh.position.set(x * cubeSize + cubeSize / 2, y * cubeSize + cubeSize / 2, z * cubeSize + cubeSize / 2);

  return mesh;
};

function main() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(-200, 200, -200);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  const fillEdges = (maxX, maxY, maxZ) => {
    const cubeSize = 1;
    const cubeGeo = new THREE.BoxGeometry(maxX, maxY, maxZ);
    const edges = new THREE.EdgesGeometry(cubeGeo);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.05 });

    const line = new THREE.LineSegments(edges, material);
    line.position.set(maxX / 2, maxY / 2, maxZ / 2);
    scene.add(line);
  };

  const addPlane = () => {
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
    mesh.position.y = -0.01;
    scene.add(mesh);
  };

  {
    const color = 0xffffff;
    const intensity = 5;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);
  }

  // addPlane();
  fillEdges(180, 180, 60);
  const c1 = getCube(0, 0, 0);
  const c2 = getCube(1, 0, 0);
  const c3 = getCube(2, 0, 0);

  scene.add(c1);
  scene.add(c2);
  scene.add(c3);

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
