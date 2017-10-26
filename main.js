const spans = document.querySelectorAll('span');
let tlBottom = anime.timeline({
  duration: 10000,
  complete: function() { tlBottom.restart(); },
});
let tlLeft = anime.timeline({
  duration: 10000,
  complete: function() { tlLeft.restart(); },
});

tlBottom.add({
  begin: function() {
    anime({
      targets: spans[0],
      scale: [1, 4],
      top: ['50%', '70%'],
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  }
});

tlLeft.add({
  begin: function() {
    anime({
      targets: spans[1],
      scale: [1, 2],
      rotate: ['0deg', '120deg'],
      direction: 'alternate',
      duration: 1000,
    })
  }
})
