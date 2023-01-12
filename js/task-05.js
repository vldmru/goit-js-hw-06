const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputChanges = event => {
  if (event.currentTarget.value === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
};

inputEl.addEventListener('input', onInputChanges);