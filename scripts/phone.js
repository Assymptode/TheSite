const handset = document.getElementById('phone-handset');

if (handset) {
  let isPlaying = false;

  function shakeHandset() {
    if (isPlaying) return;

    isPlaying = true;

    const animation = handset.animate(
      [
        { transform: 'translate(0, 0) rotate(0deg)' },
        { transform: 'translate(-2px, 1px) rotate(-4deg)' },
        { transform: 'translate(2px, -1px) rotate(4deg)' },
        { transform: 'translate(-1px, -2px) rotate(-3deg)' },
        { transform: 'translate(2px, 1px) rotate(3deg)' },
        { transform: 'translate(-2px, -1px) rotate(-4deg)' },
        { transform: 'translate(1px, 2px) rotate(4deg)' },
        { transform: 'translate(-1px, -1px) rotate(-2deg)' },
        { transform: 'translate(1px, 1px) rotate(2deg)' },
        { transform: 'translate(0, 0) rotate(0deg)' },
      ],
      {
        duration: 1000,
        iterations: 1,
        easing: 'linear',
      },
    );

    animation.finished.finally(() => {
      isPlaying = false;
    });
  }

  handset.addEventListener('click', shakeHandset);
}
