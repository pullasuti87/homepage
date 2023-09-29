'use strict';

const updated = '30/09/2023';
window.onload = function () {
  // create and add stars
  for (let i = 0; i <= 100; i++) {
    const star = document.createElement('div');
    star.className = 'stars';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 10}s`; //  delay 10 seconds, 5 is too little
    document.body.appendChild(star);
  }

  const hiddenText = document.getElementById('textBox');
  //  hiddenText.style.display = 'none';

  const updatedElements = document.getElementsByClassName('footer');
  for (const element of updatedElements) {
    element.textContent = 'updated: ' + updated;
  }

  document.getElementById('showButton').addEventListener('click', function () {
    hiddenText.classList.add('visible');
    //     if (hiddenText.style.display === 'none') {
    //       hiddenText.style.display = 'block';
    //     } else {
    //       hiddenText.style.display = 'none';
    //     }
  });
};
