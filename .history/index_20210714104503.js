var obj;

fetch("https://shazam.p.rapidapi.com/search")
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

        var term = document.createElement("h1");
        var locale = document.createElement("h3");
        var malto = document.createElement("p");
        var alchol = document.createElement("p");
        
        term.innerHTML = obj.term;
        document.body.appendChild(term);  

        locale.innerHTML = obj.locale;
        document.body.appendChild(locale);  

        offset.innerHTML = obj.offset;
        document.body.appendChild(offset);  

        limit.innerHTML = obj.limit;
        document.body.appendChild(limit);  

    })

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