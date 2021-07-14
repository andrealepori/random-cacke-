var obj;

fetch("https://random-data-api.com/api/dessert/random_dessert")
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

        var term = document.createElement("h1");
        var locale = document.createElement("h3");
        var offset = document.createElement("p");
        var limit = document.createElement("p");
        
        term.innerHTML = obj.term;
        document.body.appendChild(term);  

        locale.innerHTML = obj.locale;
        document.body.appendChild(locale);  

        offset.innerHTML = obj.offset;
        document.body.appendChild(offset);  

        limit.innerHTML = obj.limit;
        document.body.appendChild(limit);  

    })

