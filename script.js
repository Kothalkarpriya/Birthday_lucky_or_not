const birthDate = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#number-input');
const buttonCheck = document.querySelector('#btn-check');

buttonCheck.addEventListener('click',() => {
    console.log(birthDate.value, luckyNumber.value);
})