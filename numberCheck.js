async function checkNumber(number) {
var myHeaders = new Headers();
myHeaders.append("apikey", "vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

await fetch("https://api.apilayer.com/number_verification/countries", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

var validateRequestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

await fetch(`https://api.apilayer.com/number_verification/validate?number=%2B27${number}`, validateRequestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
event.preventDefault();
// let input = document.getElementById('input');
// console.log(input.value);
// input = input.value;
checkNumber(input.value);
});
// let inputNumber = window.location.href;
// console.log(inputNumber);
// checkNumber();
