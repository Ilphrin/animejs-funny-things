const spans = document.querySelectorAll('span');
let tlBottom = anime.timeline({
  duration: 10000,
  complete: function() { tlBottom.restart(); },
});
let tlLeft = anime.timeline({
  duration: 10000,
  complete: function() { tlLeft.restart(); },
});

let tlRight = anime.timeline({
  duration: 10000,
  complete: function() { tlRight.restart(); },
});

tlBottom.add({
  begin: function() {
    anime({
      targets: spans[0],
      scale: [1, 4],
      top: ['50%', '60%'],
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  }
});

tlLeft.add({
  begin: function() {
    anime({
      targets: spans[1],
      scale: [
        { value: .5, duration: 500},
        { value: 1, duration: 500},
        { value: 2, duration: 500 },
        { value: 4, duration: 500, delay: 500 },
      ],
      rotate: [
        { value: '0deg', duration: 0, elasticity: 0},
        { value: '120deg', duration: 500, elasticity: 0},
        { value: '115deg', duration: 400},
        { value: '65deg', duration: 400},
        { value: '0deg', duration: 500, delay: 500},
      ],
      left: [
        { value: '50%', duration: 0, delay: 0, elasticity: 0},
        { value: '45%', duration: 500, elasticity: 0 },
        { value: '49.5%', duration: 350, elasticity: 0},
        { value: '55%', duration: 500, delay: 100},
        { value: '50%', duration: 500, delay: 500},
      ],
      top: [
        { value: '50%', duration: 0},
        { value: '50%', duration: 500},
        { value: '50%', duration: 500, delay: 500},
        { value: '55%', duration: 500},
      ],
      easing: 'easeInOutQuad',
    })
  }
});

tlRight.add({
  begin: function() {
    anime({
      targets: spans[2],
      scale: [
        { value: .5, duration: 500},
        { value: 1, duration: 500},
        { value: 2, duration: 500 },
        { value: 4, duration: 500, delay: 500 },
      ],
      rotate: [
        { value: '0deg', duration: 0, elasticity: 0},
        { value: '65deg', duration: 500},
        { value: '65deg', duration: 400},
        { value: '120deg', duration: 400},
        { value: '0deg', duration: 500, delay: 500},
      ],
      left: [
        { value: '50%', duration: 0, delay: 0, elasticity: 0},
        { value: '55%', duration: 500, delay: 100},
        { value: '50.5%', duration: 350, elasticity: 0},
        { value: '45%', duration: 500, elasticity: 0 },
        { value: '50%', duration: 500, delay: 500},
      ],
      top: [
        { value: '50%', duration: 0},
        { value: '50%', duration: 500},
        { value: '50%', duration: 500, delay: 500},
        { value: '50%', duration: 500},
      ],
      easing: 'easeInOutQuad',
    })
  }
})
