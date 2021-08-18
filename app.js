document.getElementById('phone-plus').addEventListener('click', function () {
    const phoneInputField = document.getElementById('phone-count');
    const phoneCount = phoneInputField.value;
    phoneInputField.value = parseInt(phoneCount) + 1;
    let phoneDisplayPrice = document.getElementById('phone-price');
    phoneTotalPrice = 1219 * phoneInputField.value;
    phoneDisplayPrice.innerText = phoneTotalPrice;
});

document.getElementById('phone-minus').addEventListener('click', function () {
    const phoneInputField = document.getElementById('phone-count');
    const phoneCount = phoneInputField.value;
    phoneInputField.value = parseInt(phoneCount) - 1;
    let phoneDisplayPrice = document.getElementById('phone-price');
    phoneTotalPrice = 1219 * phoneInputField.value;
    phoneDisplayPrice.innerText = phoneTotalPrice;
});

document.getElementById('case-plus').addEventListener('click', function () {
    const caseInputField = document.getElementById('case-count');
    const caseCount = caseInputField.value;
    caseInputField.value = parseInt(caseCount) + 1;
    let caseDisplayPrice = document.getElementById('case-price');
    caseTotalPrice = 59 * caseInputField.value;
    caseDisplayPrice.innerText = caseTotalPrice;
});

document.getElementById('case-minus').addEventListener('click', function () {
    const caseInputField = document.getElementById('case-count');
    const caseCount = caseInputField.value;
    caseInputField.value = parseInt(caseCount) - 1;
    let caseDisplayPrice = document.getElementById('case-price');
    caseTotalPrice = 59 * caseInputField.value;
    caseDisplayPrice.innerText = caseTotalPrice;
});

function subtotalAmount() {
    const subtotalDisplayAmount = document.getElementById('subtotal');
    const subtotalAmount = subtotalDisplayAmount.innerText;
    const phoneCount = document.getElementById('phone-count');
    const caseCount = document.getElementById('case-count');
    subtotalPhoneAmount = phoneCount.value * 1219;
    subtotalCaseAmount = caseCount * 59;
    subtotalAmount = subtotalPhoneAmount + subtotalCaseAmount;
    subtotalDisplayAmount.innerText = subtotalAmount;
}


/*
    new code for total price section
*/

/*
document.getElementById('phone-plus').addEventListener('click', function phonePricePlus() {
    const phoneInputField = document.getElementById('phone-count');
    const phoneCount = phoneInputField.value;
    phoneInputField.value = parseInt(phoneCount) + 1;
    let phoneDisplayPrice = document.getElementById('phone-price');
    phoneTotalPrice = 1219 * phoneInputField.value;
    phoneDisplayPrice.innerText = phoneTotalPrice;

    return phoneTotalPrice;
});

document.getElementById('phone-minus').addEventListener('click', function phonePriceMinus() {
    const phoneInputField = document.getElementById('phone-count');
    const phoneCount = phoneInputField.value;
    phoneInputField.value = parseInt(phoneCount) - 1;
    let phoneDisplayPrice = document.getElementById('phone-price');
    phoneTotalPrice = 1219 * phoneInputField.value;
    phoneDisplayPrice.innerText = phoneTotalPrice;

    return phoneTotalPrice;
});

document.getElementById('case-plus').addEventListener('click', function casePricePlus() {
    const caseInputField = document.getElementById('case-count');
    const caseCount = caseInputField.value;
    caseInputField.value = parseInt(caseCount) + 1;
    let caseDisplayPrice = document.getElementById('case-price');
    caseTotalPrice = 59 * caseInputField.value;
    caseDisplayPrice.innerText = caseTotalPrice;

    return caseTotalPrice;
});

document.getElementById('case-minus').addEventListener('click', function casePriceMinus() {
    const caseInputField = document.getElementById('case-count');
    const caseCount = caseInputField.value;
    caseInputField.value = parseInt(caseCount) - 1;
    let caseDisplayPrice = document.getElementById('case-price');
    caseTotalPrice = 59 * caseInputField.value;
    caseDisplayPrice.innerText = caseTotalPrice;

    return caseTotalPrice;
});

function subtotalAmount() {
    phonePricePlus();
    phonePriceMinus();
    casePricePlus();
    casePriceMinus();
    const subtotalDisplayAmount = document.getElementById('subtotal');
    const subtotalAmount = subtotalDisplayAmount.innerText;
    subtotalAmount = phoneTotalPrice + caseTotalPrice;
    subtotalDisplayAmount.innerText = subtotalAmount;
}

const subtotal = subtotalAmount();
console.log(subtotal);
 */