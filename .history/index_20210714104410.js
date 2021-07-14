var obj;

fetch(" 'https://shazam.p.rapidapi.com/search'")
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

        var nome = document.createElement("h1");
        var brand = document.createElement("h3");
        var malto = document.createElement("p");
        var alchol = document.createElement("p");
        
        nome.innerHTML = obj.name;
        document.body.appendChild(nome);  

        brand.innerHTML = obj.brand;
        document.body.appendChild(brand);  

        malto.innerHTML = obj.malts;
        document.body.appendChild(malto);  

        alchol.innerHTML = obj.alcohol;
        document.body.appendChild(alchol);  

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