import * as THREE from 'three';

export const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

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
