'use strict';

{
  const progress = document.querySelector('progress');
  const start = document.querySelector('input[value="start"]');
  const stop = document.querySelector('input[value="stop"]');
  const reset = document.querySelector('input[value="reset"]');
  const p = document.querySelector('p');
  

  let val = 0;
  let intervalId;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;

  start.addEventListener('click', () => {
    // console.log('click');
    intervalId = setInterval(updateProgress, 50);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
  });

  stop.addEventListener('click', () => {
    clearInterval(intervalId);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
    // progress.setAttribute('value', val);
    // p.textContent = `${val}%`;
  });

  reset.addEventListener('click', () => {
    clearInterval(intervalId);
    val = 0;
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
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

  function resetProgress() {
    val = 0;
    start.disabled = false;
  }
}