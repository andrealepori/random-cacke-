var obj;

fetch("https://random-data-api.com/api/dessert/random_dessert")
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

      var variety = document.createElement("h1");
        var id = document.createElement("h1");
        var uid = document.createElement("h3");
        var flavor = document.createElement("p");
        
        variety.innerHTML = obj.variety;
        document.body.appendChild(variety);  
        
        id.innerHTML = obj.term;
        document.body.appendChild(id);  

        uid.innerHTML = obj.uid;
        document.body.appendChild(uid);  


        flavor.innerHTML = obj.flavor;
        document.body.appendChild(flavor);  

    })

