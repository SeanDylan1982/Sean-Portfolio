function amountToFrom(countryTo,countryFrom,TotalAmount) {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${countryTo}&from=${countryFrom}&amount=${totalAmount}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
amountToFrom(countryTo,countryFrom,TotalAmount);

async function dateRange() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  await fetch("https://api.apilayer.com/exchangerates_data/fluctuation?start_date={start_date}&end_date={end_date}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

async function latest() {
  var myHeaders = new Headers()
  myHeaders.append('apikey', 'vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9')

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  }

  await fetch(
    'https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}',
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

async function symbols() {
  var myHeaders = new Headers()
  myHeaders.append('apikey', 'vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9')

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  }

  await fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

async function timeSeries() {
  var myHeaders = new Headers()
  myHeaders.append('apikey', 'vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9')

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  }

  await fetch(
    'https://api.apilayer.com/exchangerates_data/timeseries?start_date={start_date}&end_date={end_date}',
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

async function history() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "vWsFDkv6oFYtZ8WV3vQtbtb15AirCks9");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  await fetch("https://api.apilayer.com/exchangerates_data/{date}?symbols={symbols}&base={base}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

