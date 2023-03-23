const http = require('http');
const querystring = require('querystring');

let query = {
    access_key: '2fbf28f456748e1e7f2b6c7d3e3ca3e8',
    ua: 'Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1'
};

http.get(`http://api.userstack.com/detect?${querystring.stringify(query)}`, response => {
    let data = '';

    response.on('data', chunk => data += chunk);

    response.on('end', () => {
    let api_response = JSON.parse(data);

    if (api_response.device === 'tablet' && api_response.device.type === 'tablet') {
        console.log('It\'s a tablet.');
    } else if (api_response.device === 'phone' && api_response.device.type === 'phone') {
        console.log('It\'s a phone.');
    } else if (api_response.device === 'pc' && api_response.device.type === 'pc') {
        console.log('It\'s a pc.');
    } 
    });
});
