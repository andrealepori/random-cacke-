var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/search',
  params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
  headers: {'x-rapidapi-host': 'shazam.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});