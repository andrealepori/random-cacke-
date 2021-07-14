var obj;

fetch("https://random-data-api.com/api/beer/random_beer")
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

