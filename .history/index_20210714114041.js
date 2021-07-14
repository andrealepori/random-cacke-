var obj;

fetch("https://random-data-api.com/api/dessert/random_dessert")
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

      var variety = document.createElement("h1");
        var id = document.createElement("h1");
        var uid = document.createElement("h3");
        var flavor = document.createElement("p");
        
        uid.innerHTML = obj.uid;
        document.body.appendChild(uid);  

        variety.innerHTML = obj.variety;
        document.body.appendChild(variety);  

        flavor.innerHTML = obj.flavor;
        document.body.appendChild(flavor);  

    })

    const Confettiful = function(el) {
      this.el = el;
      this.containerEl = null;
      
      this.confettiFrequency = 3;
      this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
      this.confettiAnimations = ['slow', 'medium', 'fast'];
      
      this._setupElements();
      this._renderConfetti();
    };
    
    Confettiful.prototype._setupElements = function() {
      const containerEl = document.createElement('div');
      const elPosition = this.el.style.position;
      
      if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.el.style.position = 'relative';
      }
      
      containerEl.classList.add('confetti-container');
      
      this.el.appendChild(containerEl);
      
      this.containerEl = containerEl;
    };
    
    Confettiful.prototype._renderConfetti = function() {
      this.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement('div');
        const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
        
        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;
        
        confettiEl.removeTimeout = setTimeout(function() {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);
        
        this.containerEl.appendChild(confettiEl);
      }, 25);
    };
    
    window.confettiful = new Confettiful(document.querySelector('.js-container'));
    
    
    