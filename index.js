'use strict';

{
  const progress = document.querySelector('progress');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const p = document.querySelector('p');
  

  let val = 0;
  let intervalId;
  stop.classList.add('disabled');
  reset.classList.add('disabled');

  start.addEventListener('click', () => {
    // console.log('click');
    intervalId = setInterval(updateProgress, 50);

    start.classList.add('disabled');
    stop.classList.remove('disabled');
  });

  stop.addEventListener('click', () => {
    clearInterval(intervalId);

    start.classList.remove('disabled');
    stop.classList.add('disabled');
    reset.classList.remove('disabled');

    // progress.setAttribute('value', val);
    // p.textContent = `${val}%`;
  });

  reset.addEventListener('click', () => {
    clearInterval(intervalId);
    val = 0;

    start.classList.remove('disabled');
    stop.classList.add('disabled');
    reset.classList.add('disabled');

    progress.setAttribute('value', 0);
    p.textContent = `${val}%`;
  });

  function updateProgress() {
    val += 1;
    progress.value = val;
    progress.innerText = val + "%";
    p.textContent = `${val}%`;
    // console.log("progress:", val, "%");

    if(val == 100) {
      clearInterval(intervalId);
    }
  }

}
