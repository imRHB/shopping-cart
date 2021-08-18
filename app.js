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
    phonePrice = 1219 * phoneInputField.value;
    phoneDisplayPrice.innerText = phonePrice;
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