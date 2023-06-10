  function updateClock(){
    const elementClock = document.querySelector(".clock");
    const elementHours = document.querySelector(".hours");
    const elementMinutes = document.querySelector(".minutes");
    const elementSeconds = document.querySelector(".seconds");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    elementHours.textContent = hours;
    elementMinutes.textContent = minutes;
    elementSeconds.textContent = seconds;

    console.log(now, hours, minutes, seconds)

  }

  setInterval(updateClock, 1000) 

//   setInterval atualiza a função a cada 1000 milisegundos