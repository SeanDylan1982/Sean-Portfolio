const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("src", "Hello, world!");
encodedParams.append("hl", "en-us");
encodedParams.append("r", "0");
encodedParams.append("c", "mp3");
encodedParams.append("f", "8khz_8bit_mono");

const options = {
    method: 'POST',
    url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
    params: {key: 'hello'},
    headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'ffed743089msh612b5845ecca1d6p14b49ajsnf201af83a424',
    'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
    },
    data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});