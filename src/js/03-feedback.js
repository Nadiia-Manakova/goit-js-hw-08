import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
let userData = {};

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);
window.addEventListener('load', onLoad);

const LOCAL_STORAGE_KEY = 'feedback-form-state';

function onInput(e) {
  const target = e.target;
  const formElValue = target.value;
  const formElName = target.name;
  userData[formElName] = formElValue;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(userData);
  userData = {};
  e.target.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onLoad() {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) return;
    userData = JSON.parse(data);
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        formEl.elements[key].value = userData[key];
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}