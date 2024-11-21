
  
    const counter = document.getElementById('counter');

    let count = 0;


    function updateCounter() {
      count++;
      counter.textContent = count;

      counter.classList.add('animate');
      setTimeout(() => counter.classList.remove('animate'), 500);

      const colors = [
        ['#ff5f6d', '#ffc371'], 
        ['#36d1dc', '#5b86e5'], 
        ['#ff7eb3', '#ff758c'], 
        ['#f79d00', '#64f38c'], 
        ['#8e2de2', '#4a00e0']  
      ];
      const randomGradient = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.background = `linear-gradient(135deg, ${randomGradient[0]}, ${randomGradient[1]})`;
    }


    
    setInterval(updateCounter, 1000);
