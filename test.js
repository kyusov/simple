let smiles = false
let lightTheme = true

window.onload = () => {
  const $mf = $('.first').marquee({
    // add marquee hide while scroll down
    duration: 15000,
    startVisible: true,
    duplicated: true,
  })

  const $ms = $('.second').marquee({
    duration: 15000,
    startVisible: true,
    duplicated: true,
  })

  $ms.marquee('pause')

  const white = document.querySelector('.white')
  const dark = document.querySelector('.darken')

  const svgRight = document.querySelector('.svg-slider-right')
  const svgLeft = document.querySelector('.svg-slider-left')

  const rectRight = document.querySelector('.svg-slider-right > rect')
  const rectLeft = document.querySelector('.svg-slider-left > rect')

  const defsRight = document.querySelector(
    '.svg-slider-right > defs > clipPath > rect'
  )
  const defsLeft = document.querySelector(
    '.svg-slider-left > defs > clipPath > rect'
  )

  const clipRectRight = document.querySelector(
    '.svg-slider-right > defs > clipPath > rect'
  )
  const clipRectLeft = document.querySelector(
    '.svg-slider-left > defs > clipPath > rect'
  )

  //скрываем левую svg
  svgLeft.style.display = 'none'

  svgRight.addEventListener('click', () => {
    for (let i = 0; i < dark.children.length; i++) {
      dark.children[i].style.display = 'block'
    }

    white.classList.toggle('active')
    white.classList.toggle('clip-right')

    anime({
      targets: clipRectRight,
      translateX: 'calc(-100% + 10px)',
      easing: 'spring(3, 10, 10, 0)',
      complete: function () {
        for (let i = 0; i < white.children.length; i++) {
          white.children[i].style.display = 'none'
        }

        white.classList.toggle('top')
        white.classList.toggle('bottom')
        dark.classList.toggle('bottom')
        dark.classList.toggle('top')

        dark.classList.toggle('active')

        white.classList.toggle('clip-right')
        svgRight.style.display = 'none'
        svgLeft.style.display = 'block'

        clipRectRight.style.transform = 'translateX(0)'
      },
    })
  })

  svgLeft.addEventListener('click', () => {
    for (let i = 0; i < white.children.length; i++) {
      white.children[i].style.display = 'block'
    }

    dark.classList.toggle('active')
    dark.classList.toggle('clip-left')

    anime({
      targets: clipRectLeft,
      translateX: 'calc(100% - 10px)',
      easing: 'spring(3, 10, 10, 0)',
      complete: function () {
        for (let i = 0; i < dark.children.length; i++) {
          dark.children[i].style.display = 'none'
        }

        white.classList.toggle('top')
        white.classList.toggle('bottom')
        dark.classList.toggle('bottom')
        dark.classList.toggle('top')

        white.classList.toggle('active')
        dark.classList.toggle('clip-left')

        svgRight.style.display = 'block'
        svgLeft.style.display = 'none'

        clipRectLeft.style.transform = 'translateX(0)'
      },
    })
  })
}

function basketAnimation(show) {
  if (show) {
    $('.basket-front').transition({
      x: '0',
      y: '0',
      opacity: 1,
      duration: 1000,
    })

    $('.basket-back').transition({
      x: '0',
      y: '0',
      opacity: 1,
      duration: 1000,
    })

    $('.basket-bag-big').transition({
      y: '0',
      opacity: 1,
      duration: 1000,
      delay: 400,
    })

    $('.basket-bag-middle').transition({
      y: '0',
      opacity: 1,
      duration: 1000,
      delay: 500,
    })

    $('.basket-bag-top').transition({
      y: '0',
      opacity: 1,
      duration: 700,
      delay: 400,
    })
  } else {
    $('.basket-front').transition({
      x: '-60%',
      y: '-38%',
      opacity: 0,
    })

    $('.basket-back').transition({
      x: '-60%',
      y: '-38%',
      opacity: 0,
    })

    $('.basket-bag-big').transition({
      y: '-100%',
      opacity: 0,
    })

    $('.basket-bag-middle').transition({
      y: '-150%',
      opacity: 0,
    })

    $('.basket-bag-top').transition({
      y: '-150%',
      opacity: 0,
    })
  }
}

function cardAnimation(show) {
  if (show) {
    $('.card-terminal').css('animation-play-state', 'running')
    $('.terminal-shadow').css('animation-play-state', 'running')
    $('.one-money').css('animation-play-state', 'running')
    $('.two-money').css('animation-play-state', 'running')
  } else {
    $('.card-terminal').css('animation-play-state', 'paused')
    $('.terminal-shadow').css('animation-play-state', 'paused')
    $('.one-money').css('animation-play-state', 'paused')
    $('.two-money').css('animation-play-state', 'paused')
  }
}

function fireAnimation(show) {
  if (show) {
    $('.fire').css('animation-play-state', 'running')
    $('.fire-shadow').css('animation-play-state', 'running')
  } else {
    $('.fire').css('animation-play-state', 'paused')
    $('.fire-shadow').css('animation-play-state', 'paused')
  }
}

function smilesAnimation() {
  if (smiles) {
    $('.smiles').css('animation-play-state', 'running')
    $('.smiles-faster').css('animation-play-state', 'running')
  } else {
    $('.smiles').css('animation-play-state', 'paused')
    $('.smiles-faster').css('animation-play-state', 'paused')
  }
}

$(window).scroll(function () {
  if ($(this).scrollTop() > $('.first').offset().top + 50) {
    $('.first').marquee('pause')
  } else {
    $('.first').marquee('resume')
  }

  if (
    ($(this).scrollTop() >
      $('.card-terminal').closest('div').offset().top - 250 &&
      lightTheme) ||
    ($(this).scrollTop() <
      $('.card-terminal').closest('div').offset().top - 250 &&
      lightTheme)
  ) {
    if (
      $(this).scrollTop() >
        $('.card-terminal').closest('div').height() +
          $('.card-terminal').closest('div').offset().top ||
      $(this).scrollTop() <
        $('.card-terminal').closest('div').offset().top - 500
    ) {
      cardAnimation(false)
    } else {
      cardAnimation(true)
    }
  }

  if (
    ($(this).scrollTop() > $('.fire').closest('div').offset().top - 250 &&
      lightTheme) ||
    ($(this).scrollTop() < $('.fire').closest('div').offset().top - 250 &&
      lightTheme)
  ) {
    if (
      $(this).scrollTop() >
        $('.fire').closest('div').height() +
          $('.fire').closest('div').offset().top ||
      $(this).scrollTop() <
        $('.fire').closest('div').offset().top - 500
    ) {
      fireAnimation(false)
    } else {
      fireAnimation(true)
    }
  }

  if (
    ($(this).scrollTop() > $('.smiles').closest('div').offset().top - 250 &&
      !lightTheme) ||
    ($(this).scrollTop() < $('.smiles').closest('div').offset().top - 250 &&
      !lightTheme)
  ) {
    if (
      $(this).scrollTop() >
        $('.smiles').closest('div').height() +
          $('.smiles').closest('div').offset().top ||
      $(this).scrollTop() <
        $('.smiles').closest('div').offset().top - 500
    ) {
      fireAnimation(false)
    } else {
      fireAnimation(true)
    }
  }

})

// $(document).on('mousewheel touchmove', (e) => {
//   if (
//     documentHeight >= $('.smiles').closest('div').offset().top * 2 ||
//     (documentHeight < $('.smiles').closest('div').offset().top && smiles)
//   ) {
//     smiles = false
//     smilesAnimation()
//   } else if (documentHeight >= $('.smiles').closest('div').offset().top) {
//     smiles = true
//     smilesAnimation()
//   }
// })

$(document).ready(() => {
  const dark = document.querySelector('.darken')

  for (let i = 0; i < dark.children.length; i++) {
    dark.children[i].style.display = 'none'
  }
})
