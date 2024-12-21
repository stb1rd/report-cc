import { API_URL, POLLING_INTERVAL } from '/src/const.js';
import { renderState } from '/src/render-state.js';

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
