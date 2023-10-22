
import throttle from "lodash.throttle";

const formEl = document.querySelector(`.feedback-form`);

formEl.addEventListener('input', onInput);
formEl.addEventListener('submit', onSubmit);
window.addEventListener('load', onLoad)

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let formData = {};

function onInput(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    formData = {};
    evt.target.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onLoad() {
    
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        formData = JSON.parse(data);
        Object.entries(formData).forEach(([key, val]) => {
            const element = formEl.elements[key];
            if (element) {
                element.value = val;
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}