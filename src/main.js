import * as THREE from 'three';

import { initMocks } from '/src/mocks.js';
import { handleMove, initControls } from '/src/controls.js';
import { scene } from '/src/render-state.js';
import { initGui } from '/src/min-max-gui-helper.js';
import * as live from '/src/live.js';

function main() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
  camera.position.set(90, 120, -120);
  camera.lookAt(new THREE.Vector3(90, 90, 90));

  initGui(camera);
  initMocks();
  initControls(camera, renderer);

  function render() {
    handleMove();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
