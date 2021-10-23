const nameErrors = document.getElementById('nameErrors');
const nameUser = document.getElementById('nameUser');
const buttonSubmit = document.getElementById('buttonSubmit');
const surname = document.getElementById('surname');
const surnameErrors = document.getElementById('surnameErrors');
const numberPhone = document.getElementById('numberPhone');
const phoneErrors = document.getElementById('phoneErrors');
const email = document.getElementById('email');
const emailErrors = document.getElementById('emailErrors');
const userForm = document.getElementById('userForm');
const errors = document.getElementById('errors');
let fieldInput = document.querySelectorAll('input');
let errorArr = [];

function checkInputValidity(val) {
    console.log(val);
    errorArr = [];
    let input = val.target;
    let validity = input.validity;
    if (validity.patternMismatch) {
        errorArr.push('Неправильный формат ввода');
    }

    if (validity.valueMissing) {
        errorArr.push('Заполните, пожалуйста, поле' + ' ' + input.name);
    }

    if (validity.rangeUnderflow) {
        errorArr.push('Слишком мало символов' + ' ' + 'в' + ' ' + input.name);
        console.log(errorArr);
    }

    if (validity.rangeOverflow) {
        errorArr.push('Слишком много символов' + ' ' + 'в' + ' ' + input.name);
    }

    if (validity.tooLong) {
        errorArr.push('Значение' + ' ' + input.name + ' ' + 'слишком длинное');
    }

    if (validity.tooShort) {
        errorArr.push('Значение' + ' ' + input.name + ' ' + 'слишком короткое');
    }
    return errorArr;
}



// function checkRequired(errorArr) {
//     errorArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`)
//         }else {
//             showSucces(input);
//         }
//     });
// }



 function checkEachInput(data){
     console.log("data");
    let valueNameError = checkInputValidity(data);

    const wrapperBlockInput = data.target.parentElement;
    //formControl.className = 'wrapperBlockInput';
    const divError = wrapperBlockInput.querySelector('div');
    divError.innerText = valueNameError;

    // let valueSurnameErrors = checkInputValidity(data);
    // surnameErrors.innerText = valueSurnameErrors;

    // let valueNumPhoneErrors = checkInputValidity(data);
    // phoneErrors.innerText = valueNumPhoneErrors;

    // let valueEmailErrors = checkInputValidity(data);
    // emailErrors.innerText = valueEmailErrors;
} 


// function checkName(data) {
//     let valueNameError = checkInputValidity(data);
//     nameErrors.innerText = valueNameError;
// }

function cleanErrorsName() {
    errorArr = [];
    nameErrors.innerText = "";
}


// function checkSurname(data) {
//     let valueSurnameErrors = checkInputValidity(data);
//     surnameErrors.innerText = valueSurnameErrors;
// }

function cleanErrorsSurname() {
    errorArr = [];
    surnameErrors.innerText = "";
}

// function checkNumberPhone(data) {
//     let valueNumPhoneErrors = checkInputValidity(data);
//     phoneErrors.innerText = valueNumPhoneErrors;
// }

function cleanNumPhone() {
    errorArr = [];
    phoneErrors.innerText = "";
}

// function checkEmail(data) {
//     let valueEmailErrors = checkInputValidity(data);
//     emailErrors.innerText = valueEmailErrors;
// }

function cleanErrorsEmail() {
    errorArr = [];
    emailErrors.innerText = "";
}




function setEvenListeners(elem, checkEachInput) {
    //console.log(elem);
    elem.addEventListener('blur', checkEachInput);
}





// fieldInput.addEventListener('blur', checkEachInput());


//  nameUser.addEventListener('blur', setEvenListeners());
nameUser.addEventListener('click', cleanErrorsName);

// surname.addEventListener('blur', setEvenListeners());
surname.addEventListener('click', cleanErrorsSurname);

//numberPhone.addEventListener('blur', checkNumberPhone);
numberPhone.addEventListener('click', cleanNumPhone);

//email.addEventListener('blur', checkEmail);
email.addEventListener('click', cleanErrorsEmail);

buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    let user = {
        name: nameUser.value,
        surname: surname.value,
        numberPhone: numberPhone.value,
        email: email.value,
    }
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user), 
})
.then(response => response.json())
.then(responseUser => {
    console.log(responseUser);
})
.catch(error => console.log(error));    
})