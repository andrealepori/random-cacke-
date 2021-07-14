var obj;

fetch("https://random-data-api.com/api/dessert/random_dessert")
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

        var id = document.createElement("h1");
        var uid = document.createElement("h3");
        var variety = document.createElement("p");
        var limit = document.createElement("p");
        
        id.innerHTML = obj.term;
        document.body.appendChild(id);  

        uid.innerHTML = obj.locale;
        document.body.appendChild(uid);  

        offset.innerHTML = obj.offset;
        document.body.appendChild(offset);  

        limit.innerHTML = obj.limit;
        document.body.appendChild(limit);  

    })

