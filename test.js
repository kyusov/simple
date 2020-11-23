let smiles = false

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

  //   const svg = document.querySelector('.svg-slider-right')
  //   const tempRect = document.querySelector('.svg-slider-right > rect')
  //   const rect = document.querySelector('.svg-slider-right > defs > clipPath > rect')
  //   const defs = document.querySelector('.svg-slider-right > defs')

  //   const white = document.querySelector('.white')
  //   const dark = document.querySelector('.darken')

  //   defs.style.display = 'none'

  //   let sideBarWidth = 15

  //   cardAnimation(true)

  //   // if (window.innerWidth < 1440 && window.innerWidth > 1366) {
  //   //   sideBarWidth = 15
  //   // } else {
  //   //   sideBarWidth = 15
  //   // }

  //   tempRect.setAttribute('width', window.innerWidth)
  //   tempRect.setAttribute('x', -sideBarWidth)
  //   tempRect.setAttribute('height', document.body.clientHeight)

  //   rect.setAttribute('width', window.innerWidth)
  //   rect.setAttribute('x', -sideBarWidth)
  //   rect.setAttribute('height', document.body.clientHeight)
  //   svg.setAttribute('width', sideBarWidth)
  //   svg.setAttribute('height', document.body.clientHeight)

  //   let right = true

  //   svg.addEventListener('click', (e) => {
  //     tempRect.style.display = 'none'
  //     defs.style.display = 'block'

  //     if (right) {
  //       white.classList.toggle('active')
  //       cardAnimation(false)

  //       for (let i = 0; i < dark.children.length; i++) {
  //         dark.children[i].style.display = 'block'
  //       }

  //       svg.style.right = 'unset'
  //       svg.style.left = 0

  //       white.classList.remove('top')
  //       white.classList.add('bottom')
  //       dark.classList.remove('bottom')
  //       dark.classList.add('top')

  //       rect.setAttribute('x', window.innerWidth - sideBarWidth)
  //       tempRect.setAttribute('x', window.innerWidth - sideBarWidth)

  //       let start = null
  //       function step(timestamp) {
  //         if (!start) start = timestamp
  //         let progress = (timestamp - start) / 60
  //         let temp = +rect.getAttribute('x')

  //         if (temp - progress > sideBarWidth) {
  //           rect.setAttribute('x', temp - progress)
  //           tempRect.setAttribute('x', temp - progress)
  //           window.requestAnimationFrame(step)
  //         } else {
  //           for (let i = 0; i < white.children.length; i++) {
  //             white.children[i].style.display = 'none'
  //           }

  //           dark.classList.toggle('active')

  //           rect.setAttribute('x', sideBarWidth)
  //           tempRect.setAttribute('x', 0)
  //           tempRect.style.display = 'block'
  //           tempRect.style.fill = '#fff'

  //           svg.setAttribute('height', document.body.clientHeight)
  //           tempRect.setAttribute('height', document.body.clientHeight)
  //           rect.setAttribute('height', document.body.clientHeight)

  //           defs.style.display = 'none'

  //           $ms.marquee('resume')
  //           $mf.marquee('pause')
  //           smiles = true
  //           basketAnimation(true)
  //         }
  //       }

  //       window.requestAnimationFrame(step)

  //       right = false
  //     } else {
  //       dark.classList.toggle('active')

  //       for (let i = 0; i < white.children.length; i++) {
  //         white.children[i].style.display = 'block'
  //       }

  //       svg.style.left = 'unset'
  //       svg.style.right = 0

  //       rect.setAttribute('x', sideBarWidth)
  //       tempRect.setAttribute('x', sideBarWidth)
  //       const windowWidth = window.innerWidth

  //       let start = null
  //       function step(timestamp) {
  //         if (!start) start = timestamp
  //         let progress = (timestamp - start) / 30
  //         let temp = +rect.getAttribute('x')

  //         if (temp < windowWidth - sideBarWidth) {
  //           rect.setAttribute('x', temp + progress)
  //           tempRect.setAttribute('x', temp + progress)
  //           window.requestAnimationFrame(step)
  //         } else {
  //           rect.setAttribute('x', -sideBarWidth)
  //           tempRect.setAttribute('x', -sideBarWidth)

  //           white.classList.remove('bottom')
  //           white.classList.add('top')
  //           dark.classList.remove('top')
  //           dark.classList.add('bottom')

  //           for (let i = 0; i < dark.children.length; i++) {
  //             dark.children[i].style.display = 'none'
  //           }

  //           tempRect.style.display = 'block'
  //           tempRect.style.fill = '#333'
  //           defs.style.display = 'none'
  //           white.classList.toggle('active')

  //           svg.setAttribute('height', document.body.clientHeight)
  //           tempRect.setAttribute('height', document.body.clientHeight)
  //           rect.setAttribute('height', document.body.clientHeight)

  //           $('.smiles').css('animation-play-state', 'paused')
  //           $('.smiles-faster').css('animation-play-state', 'paused')

  //           cardAnimation(true)
  //           basketAnimation(false)
  //           smiles = false

  //           $ms.marquee('pause')
  //           $mf.marquee('resume')
  //         }
  //       }

  //       window.requestAnimationFrame(step)

  //       right = true
  //     }
  //   })
  // }
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

$(document).on('mousewheel touchmove', (e) => {
  const documentHeight = $(document).scrollTop() + window.innerHeight / 0.9

  if (
    documentHeight >= $('.card-terminal').closest('div').offset().top * 2 ||
    documentHeight < $('.card-terminal').closest('div').offset().top
  ) {
    cardAnimation(false)
  } else if (
    documentHeight >= $('.card-terminal').closest('div').offset().top
  ) {
    cardAnimation(true)
  }

  if (
    documentHeight >= $('.fire').closest('div').offset().top * 2 ||
    documentHeight < $('.fire').closest('div').offset().top
  ) {
    fireAnimation(false)
  } else if (documentHeight >= $('.fire').closest('div').offset().top) {
    fireAnimation(true)
  }

  if (
    documentHeight >= $('.smiles').closest('div').offset().top * 2 ||
    (documentHeight < $('.smiles').closest('div').offset().top && smiles)
  ) {
    smiles = false
    smilesAnimation()
  } else if (documentHeight >= $('.smiles').closest('div').offset().top) {
    smiles = true
    smilesAnimation()
  }
})

$(document).ready(() => {
  const dark = document.querySelector('.darken')
  const white = document.querySelector('.white')

  for (let i = 0; i < dark.children.length; i++) {
    dark.children[i].style.display = 'none'
  }
})
