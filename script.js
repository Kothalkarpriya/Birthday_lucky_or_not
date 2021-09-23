const birthDate = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#number-input');
const buttonCheck = document.querySelector('#btn-check');
const result = document.querySelector('#output');
// Created variables using id from Html

// Adding a event listerner for button click
buttonCheck.addEventListener('click', ()=>{
    if(luckyNumber.value >= 0)
    {
        clickHandler();
    }else{
        result.style.color = 'red';
        result.innerText = 'Please enter positive Value';
    }
});

// function clickhandler as a first function to call summation and final function required
function clickHandler() {
    const dob = birthDate.value;
    const sum = calculateSumOfBirthDate(dob);
    if (sum && dob) {
        birthDateIsLuckyOrNot(sum, luckyNumber.value);
    } else {
        result.style.color = 'red';
        result.innerText = 'Please enter both the fields';
    }
}

// Calculate the sum of Birth date
function calculateSumOfBirthDate(dob) {
    // relacing - with nospace with the replaceAll method
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
    // added all the numbers in bithdate
}

// Checking Birthdate is lucky or not
function birthDateIsLuckyOrNot(sum, luckyNumber) {
    // finding modulus of dateof birth number sum by the lucky number

    if (sum % luckyNumber === 0) {
        result.style.color = 'yellow';
        result.innerText = 'Your Birthday is lucky';
    } else {
        result.innerText = 'Your Birthday is not lucky, So sad';
    }
}