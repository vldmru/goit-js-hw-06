const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValues = 0;

decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValues -= 1;
  valueEl.textContent = counterValues;
}

function onIncrementBtnClick() {
  counterValues += 1;
  valueEl.textContent = counterValues;
}