import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const POLLING_INTERVAL = 1000;
const API_URL = 'http://localhost:8080/';
const BASE_PATH = '/report-cc';

const getCube = (x, y, z, color = 'green', opacity = 0.3) => {
  const cubeSize = 1;
  const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

  const cubeMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity });
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

  const renderState = (state) => {
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
      const cube = getCube(fenceCoords[0], fenceCoords[1], fenceCoords[2], '#ccc');
      scene.add(cube);
    });

    state.snakes.forEach((snake, i) => {
      console.log(`snake green #${i} | ${snake.status} | length: ${snake.geometry.length} | head at: ${snake.geometry[0] || ''}`);
      snake.geometry.forEach((snakeCoords) => {
        const cube = getCube(snakeCoords[0], snakeCoords[1], snakeCoords[2], 'green', 0.9);
        scene.add(cube);
      });
    });

    state.enemies.forEach((enemy) => {
      enemy.geometry.forEach((enemyCoords) => {
        const cube = getCube(enemyCoords[0], enemyCoords[1], enemyCoords[2], enemy.status === 'alive' ? 'red' : '#000');
        scene.add(cube);
      });
    });

    state.food.forEach((foodItem) => {
      const cube = getCube(foodItem.c[0], foodItem.c[1], foodItem.c[2], 'moccasin', 0.9);
      scene.add(cube);
    });

    console.log(`golden food count: ${state.specialFood.golden.length}`);
    state.specialFood.golden.forEach((goldenFoodItem) => {
      console.log(`golden food coords :: ${goldenFoodItem}`);
      const cube = getCube(goldenFoodItem[0], goldenFoodItem[1], goldenFoodItem[2], 'gold', 0.9);
      scene.add(cube);
    });

    state.specialFood.suspicious.forEach((suspiciousItem) => {
      const cube = getCube(suspiciousItem[0], suspiciousItem[1], suspiciousItem[2], 'mediumslateblue');
      scene.add(cube);
    });

    console.log(`=== end of turn ${state.turn} ===`);
  };

  let activeFileIndex;
  const mocks = import.meta.glob('/mocks/*.json');
  const mocksLength = Object.keys(mocks).length;
  Object.entries(mocks).forEach(([fullName, file]) => {
    const name = fullName.split('/').at(-1);
    const button = document.createElement('button');
    button.setAttribute(`for`, name);
    button.innerHTML = name;
    button.onclick = async () => {
      const response = await fetch(`${BASE_PATH}${fullName}`);
      const state = await response.json();
      renderState(state);
    };

    document.getElementById('states').appendChild(button);
  });

  const renderMock = async (targetIndex) => {
    const fullName = Object.keys(mocks).at(targetIndex);
    const response = await fetch(`${BASE_PATH}${fullName}`);
    const state = await response.json();
    renderState(state);
  };

  document.getElementById('prev').onclick = async () => {
    if (isNaN(activeFileIndex) || !activeFileIndex) {
      activeFileIndex = mocksLength - 1;
    } else {
      activeFileIndex = activeFileIndex - 1;
    }
    renderMock(activeFileIndex);
  };

  document.getElementById('next').onclick = async () => {
    if (isNaN(activeFileIndex) || activeFileIndex === mocksLength - 1) {
      activeFileIndex = 0;
    } else {
      activeFileIndex = activeFileIndex + 1;
    }
    renderMock(activeFileIndex);
  };

  let timerId;
  document.getElementById('isLive').onchange = (event) => {
    if (event.target.checked) {
      if (!API_URL) {
        console.error('API_URL is null');
        event.target.checked = false;
      } else {
        timerId = setInterval(async () => {
          const response = await fetch(API_URL);
          const state = await response.json();

          renderState(state);
        }, POLLING_INTERVAL);
      }
    }
    if (!event.target.checked) {
      clearTimeout(timerId);
    }
  };

  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
