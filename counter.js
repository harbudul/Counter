<script>
const counters = document.querySelectorAll('.list');
const speed = 10;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('number');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});




</script>