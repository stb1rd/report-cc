import { BASE_PATH } from '/src/const.js';
import { renderState } from '/src/render-state.js';

let activeFileIndex;
export const mocks = import.meta.glob('/mocks/*.json');
const mocksLength = Object.keys(mocks).length;

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

export const renderMock = async (targetIndex) => {
  const fullName = Object.keys(mocks).at(targetIndex);
  const response = await fetch(`${BASE_PATH}${fullName}`);
  const state = await response.json();
  renderState(state);
};

export const initMocks = () => {
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
};
