const updated = '27/10/2025';
const starsOn = false;

window.onload = function () {
  if (starsOn) {
    // create and add stars
    for (let i = 0; i <= 100; i++) {
      const star = document.createElement('div');
      star.className = 'stars';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 10}s`; //  delay 10 seconds, 5 is too little
      document.body.appendChild(star);
    }
  }

  const hiddenBox = document.getElementById('text-box');
  const hiddenAboutMe = document.getElementById('about-me');
  const hiddenText = document.getElementById('about-me-text');
  //  hiddenText.style.display = 'none';

  const updatedElements = document.getElementsByClassName('footer');
  for (const element of updatedElements) {
    element.textContent = 'updated: ' + updated;
  }

  document.getElementById('show-button').addEventListener('click', function () {
    hiddenBox.style.display = 'block';
    setTimeout(function () {
      hiddenAboutMe.classList.add('visible');
      hiddenText.classList.add('visible');
    }, 250);
    //     if (hiddenText.style.display === 'none') {
    //       hiddenText.style.display = 'block';
    //     } else {
    //       hiddenText.style.display = 'none';
    //     }
  });
};
