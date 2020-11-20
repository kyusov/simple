window.onload = () => {
  $('.marquee').marquee({
    duration: 15000,
    startVisible: true,
    duplicated: true,
  })

  const svg = document.querySelector('.svg-slider')
  const tempRect = document.querySelector('.svg-slider > rect')
  const rect = document.querySelector('.svg-slider > defs > clipPath > rect')
  const defs = document.querySelector('.svg-slider > defs')

  const white = document.querySelector('.white')
  const dark = document.querySelector('.darken')

  
  defs.style.display = 'none'

  let sideBarWidth = 15

  // if (window.innerWidth < 1440 && window.innerWidth > 1366) {
  //   sideBarWidth = 15
  // } else {
  //   sideBarWidth = 15
  // }

  tempRect.setAttribute('width', window.innerWidth)
  tempRect.setAttribute('x', -sideBarWidth)
  tempRect.setAttribute('height', document.body.clientHeight)

  rect.setAttribute('width', window.innerWidth)
  rect.setAttribute('x', -sideBarWidth)
  rect.setAttribute('height', document.body.clientHeight)
  svg.setAttribute('width', sideBarWidth)
  svg.setAttribute('height', document.body.clientHeight)

  let right = true

  svg.addEventListener('click', (e) => {
    tempRect.style.display = 'none'
    defs.style.display = 'block'

    if (right) {
      white.classList.toggle('active')

      for (let i = 0; i < dark.children.length; i++) {
        dark.children[i].style.display = 'block'
      }

      svg.style.right = 'unset'
      svg.style.left = 0
      white.classList.remove('top')
      white.classList.add('bottom')
      dark.classList.remove('bottom')
      dark.classList.add('top')
      rect.setAttribute('x', window.innerWidth - sideBarWidth)
      tempRect.setAttribute('x', window.innerWidth - sideBarWidth)

      let start = null
      function step(timestamp) {
        if (!start) start = timestamp
        let progress = (timestamp - start) / 60
        let temp = +rect.getAttribute('x')

        if (temp - progress > sideBarWidth) {
          rect.setAttribute('x', temp - progress)
          tempRect.setAttribute('x', temp - progress)
          window.requestAnimationFrame(step)
        } else {
          for (let i = 0; i < white.children.length; i++) {
            white.children[i].style.display = 'none'
          }

          dark.classList.toggle('active')

          rect.setAttribute('x', sideBarWidth)
          tempRect.setAttribute('x', 0)
          tempRect.style.display = 'block'
          tempRect.style.fill = '#fff'

          svg.setAttribute('height', document.body.clientHeight)
          tempRect.setAttribute('height', document.body.clientHeight)
          rect.setAttribute('height', document.body.clientHeight)

          defs.style.display = 'none'

          basketAnimation(true)
        }
      }

      window.requestAnimationFrame(step)

      right = false
    } else {
      dark.classList.toggle('active')

      for (let i = 0; i < white.children.length; i++) {
        white.children[i].style.display = 'block'
      }

      svg.style.left = 'unset'
      svg.style.right = 0

      rect.setAttribute('x', sideBarWidth)
      tempRect.setAttribute('x', sideBarWidth)
      const windowWidth = window.innerWidth

      let start = null
      function step(timestamp) {
        if (!start) start = timestamp
        let progress = (timestamp - start) / 30
        let temp = +rect.getAttribute('x')

        if (temp < windowWidth - sideBarWidth) {
          rect.setAttribute('x', temp + progress)
          tempRect.setAttribute('x', temp + progress)
          window.requestAnimationFrame(step)
        } else {
          rect.setAttribute('x', -sideBarWidth)
          tempRect.setAttribute('x', -sideBarWidth)

          white.classList.remove('bottom')
          white.classList.add('top')
          dark.classList.remove('top')
          dark.classList.add('bottom')

          for (let i = 0; i < dark.children.length; i++) {
            dark.children[i].style.display = 'none'
          }

          tempRect.style.display = 'block'
          tempRect.style.fill = '#333'
          defs.style.display = 'none'
          white.classList.toggle('active')

          svg.setAttribute('height', document.body.clientHeight)
          tempRect.setAttribute('height', document.body.clientHeight)
          rect.setAttribute('height', document.body.clientHeight)

          basketAnimation(false)
        }
      }

      window.requestAnimationFrame(step)

      right = true
    }
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
      y: '0',
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

$(document).ready(() => {
  const dark = document.querySelector('.darken')
  const white = document.querySelector('.white')
  white.classList.toggle('active')
  for (let i = 0; i < dark.children.length; i++) {
    dark.children[i].style.display = 'none'
  }
})
