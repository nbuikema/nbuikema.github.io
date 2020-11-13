window.onload = (e) => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  let funMode = false;
  document.getElementById('fun-mode-btn').addEventListener('click', () => {
    funMode = !funMode;

    if (funMode) {
      setTimeout(() => {
        let modifier = 5;

        const rocket = document.getElementById('rocket');
        rocket.style = 'bottom: 0px; right: -15px;';

        window.addEventListener('keydown', (e) => {
          switch (e.key) {
            case 'ArrowUp':
              rocket.classList.remove('rotated-right');
              rocket.classList.remove('rotated-left');
              rocket.classList.add('rotated');
              rocket.style.bottom = `${
                parseInt(rocket.style.bottom) + modifier
              }px`;
              break;
            case 'ArrowDown':
              rocket.classList.remove('rotated-right');
              rocket.classList.remove('rotated-left');
              rocket.classList.remove('rotated');
              rocket.style.bottom = `${
                parseInt(rocket.style.bottom) - modifier
              }px`;
              break;
            case 'ArrowLeft':
              rocket.classList.remove('rotated-right');
              rocket.classList.add('rotated-left');
              rocket.style.right = `${
                parseInt(rocket.style.right) + modifier
              }px`;
              break;
            case 'ArrowRight':
              rocket.classList.remove('rotated-left');
              rocket.classList.add('rotated-right');
              rocket.style.right = `${
                parseInt(rocket.style.right) - modifier
              }px`;
              break;
          }
        });
      }, 5000);
    }
  });
};
