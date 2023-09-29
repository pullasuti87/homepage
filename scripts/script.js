'use strict';

const updated = '20/09/2023';
window.onload = function () {
  const hiddenText = document.getElementById('textBox');
//  hiddenText.style.display = 'none';

  const updatedElements = document.getElementsByClassName('footer');
  for (const element of updatedElements) {
    element.textContent = 'updated: ' + updated;
  }

  document.getElementById('showButton').addEventListener('click', function () {
 hiddenText.classList.add("visible");
//     if (hiddenText.style.display === 'none') {
//       hiddenText.style.display = 'block';
//     } else {
//       hiddenText.style.display = 'none';
//     }
  });
};
