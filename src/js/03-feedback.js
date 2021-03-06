import throttle from 'lodash.throttle'

const formEl = document.querySelector(`.feedback-form`)
const STORAGE_KEY = "feedback-form-state";

formEl.addEventListener(`input`, throttle(saveFormData, 500))
formEl.addEventListener(`submit`, onFormSubmit)

let formData = {};

restoreFormData()

function saveFormData(event) {

    formData[event.target.name] = event.target.value;

    const localFormData = JSON.stringify(formData)

    localStorage.setItem(STORAGE_KEY, localFormData)
}

function restoreFormData() {

    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
    const parsedData = JSON.parse(savedData)
        const elements = formEl.querySelectorAll(`[name]`)

    for (const element of elements) {
        if (Object.keys(parsedData).includes(element.name)) {
            element.value = parsedData[element.name];
            formData[element.name] = parsedData[element.name];
        }
        }
    }
    
    return;
}
    
function onFormSubmit(event) {
    event.preventDefault()
    console.log(formData)
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY)
    formData = {}
}
    
