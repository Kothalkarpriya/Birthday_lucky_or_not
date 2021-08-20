const birthDate = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#number-input');
const buttonCheck = document.querySelector('#btn-check');
const result = document.querySelector('#output');

buttonCheck.addEventListener('click', clickHandler);

function clickHandler() {
    const dob = birthDate.value;
    const sum = calculateSumOfBirthDate(dob);
    if (sum && dob) {
        birthDateIsLuckyOrNot(sum, luckyNumber.value);
    } else {
        result.innerText = 'Please enter both the fields';
    }
}

// Calculate the sum of Birth date
function calculateSumOfBirthDate(dob) {

    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
    // console.log(replace);
}

// Checking Birthdate is lucky or not
function birthDateIsLuckyOrNot(sum, luckyNumber) {
    // finding modulus of dateof birth number sum by the lucky number

    if (sum % luckyNumber === 0) {
        result.innerText = 'Your Birthday is lucky';
    } else {
        result.innerText = 'Your Birthday is not lucky, So sad';
    }
}