async function resumeParse() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    await fetch("https://seanpatterson.co.za/assets/upload/resume.pdf", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
resumeParse()
