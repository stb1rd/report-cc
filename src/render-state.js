import { BASE_PATH } from '/src/const.js';
import * as THREE from 'three';

export const scene = new THREE.Scene();
scene.background = new THREE.Color('white');
const loader = new THREE.TextureLoader();

const fillEdges = (maxX, maxY, maxZ) => {
  const cubeGeo = new THREE.BoxGeometry(maxX, maxY, maxZ);
  const edges = new THREE.EdgesGeometry(cubeGeo);
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.05 });

  const line = new THREE.LineSegments(edges, material);
  line.position.set(maxX / 2, maxY / 2, maxZ / 2);
  scene.add(line);
};

const getCube = (x, y, z, color = 'green', opacity = 0.3) => {
  const cubeSize = 1;
  const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

  const cubeMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity });
  const mesh = new THREE.Mesh(cubeGeo, cubeMat);
  mesh.position.set(x * cubeSize + cubeSize / 2, y * cubeSize + cubeSize / 2, z * cubeSize + cubeSize / 2);

  return mesh;
};

const textureTree = loader.load(`${BASE_PATH}/resources/images/christmas-tree.jpg`);
textureTree.colorSpace = THREE.SRGBColorSpace;
const materialTree = new THREE.MeshBasicMaterial({ map: textureTree, opacity: 1, transparent: true });

const getTreeSphere = (x, y, z) => {
  const cubeSize = 1;
  const sphereGeo = new THREE.SphereGeometry(cubeSize * 0.5);
  const mesh = new THREE.Mesh(sphereGeo, materialTree);
  mesh.position.set(x * cubeSize + cubeSize / 2, y * cubeSize + cubeSize / 2, z * cubeSize + cubeSize / 2);

  return mesh;
};

const textureMandarin = loader.load(`${BASE_PATH}/resources/images/mandarin.png`);
textureMandarin.colorSpace = THREE.SRGBColorSpace;
const materialMandarin = new THREE.MeshBasicMaterial({ map: textureMandarin });

const getMandarin = (x, y, z) => {
  const cubeSize = 1;
  const sphereGeo = new THREE.SphereGeometry(cubeSize * 0.5);
  const mesh = new THREE.Mesh(sphereGeo, materialMandarin);
  mesh.position.set(x * cubeSize + cubeSize / 2, y * cubeSize + cubeSize / 2, z * cubeSize + cubeSize / 2);

  return mesh;
};

const textureBlueDeer = loader.load(`${BASE_PATH}/resources/images/deers-blue.jpg`);
textureBlueDeer.colorSpace = THREE.SRGBColorSpace;
const materialBlueDeer = new THREE.MeshBasicMaterial({ map: textureBlueDeer });

const getBlueDeer = (x, y, z) => {
  const cubeSize = 1;
  const sphereGeo = new THREE.SphereGeometry(cubeSize * 0.5);
  const mesh = new THREE.Mesh(sphereGeo, materialBlueDeer);
  mesh.position.set(x * cubeSize + cubeSize / 2, y * cubeSize + cubeSize / 2, z * cubeSize + cubeSize / 2);

  return mesh;
};

const textureRedDeer = loader.load(`${BASE_PATH}/resources/images/deers-red.jpg`);
textureBlueDeer.colorSpace = THREE.SRGBColorSpace;
const materialRedDeer = new THREE.MeshBasicMaterial({ map: textureRedDeer });
const materialRedDeerOpaque = new THREE.MeshBasicMaterial({ map: textureRedDeer, opacity: 0.5, transparent: true });

const getRedDeer = (x, y, z, isOpaque) => {
  const cubeSize = 1;
  const sphereGeo = new THREE.SphereGeometry(cubeSize * 0.5);
  const mesh = new THREE.Mesh(sphereGeo, isOpaque ? materialRedDeerOpaque : materialRedDeer);
  mesh.position.set(x * cubeSize + cubeSize / 2, y * cubeSize + cubeSize / 2, z * cubeSize + cubeSize / 2);

  return mesh;
};

export const renderState = (state) => {
  scene.clear();

  {
    const color = 0xffffff;
    const intensity = 5;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);
  }

  console.log(`=== start of turn ${state.turn} ===`);
  console.log(`score: ${state.points}`);

  fillEdges(state.mapSize[0], state.mapSize[1], state.mapSize[2]);

  state.fences.forEach((fenceCoords) => {
    const sphere = getTreeSphere(fenceCoords[0], fenceCoords[1], fenceCoords[2]);
    scene.add(sphere);
  });

  state.snakes.forEach((snake, i) => {
    console.log(`snake green #${i} | ${snake.status} | length: ${snake.geometry.length} | head at: ${snake.geometry[0] || ''}`);
    snake.geometry.forEach((snakeCoords) => {
      const blueDeer = getBlueDeer(snakeCoords[0], snakeCoords[1], snakeCoords[2]);
      scene.add(blueDeer);
    });
  });

  state.enemies.forEach((enemy) => {
    const redDeer = getRedDeer(enemy.geometry[0][0], enemy.geometry[0][1], enemy.geometry[0][2], false);
    scene.add(redDeer);
    enemy.geometry.slice(1).forEach((enemyCoords) => {
      const redDeer = getRedDeer(enemyCoords[0], enemyCoords[1], enemyCoords[2], true);
      scene.add(redDeer);
    });
  });

  state.food.forEach((foodItem) => {
    const mandarin = getMandarin(foodItem.c[0], foodItem.c[1], foodItem.c[2]);
    scene.add(mandarin);
  });

  console.log(`golden food count: ${state.specialFood.golden.length}`);
  state.specialFood.golden.forEach((goldenFoodItem) => {
    console.log(`golden food coords :: ${goldenFoodItem}`);
    const cube = getCube(goldenFoodItem[0], goldenFoodItem[1], goldenFoodItem[2], 'gold', 0.9);
    scene.add(cube);
  });

  // state.specialFood.suspicious.forEach((suspiciousItem) => {
  //   const cube = getCube(suspiciousItem[0], suspiciousItem[1], suspiciousItem[2], 'mediumslateblue');
  //   scene.add(cube);
  // });

  console.log(`=== end of turn ${state.turn} ===`);
};
