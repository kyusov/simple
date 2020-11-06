window.onload = () => {
  const svg = document.querySelector('.svg-slider')
  const rect = document.querySelector('.svg-slider > defs > clipPath > rect')

  const white = document.querySelector('.white')
  const dark = document.querySelector('.darken')

  let sideBarWidth = 0

  if (window.innerWidth < 1440 && window.innerWidth > 1366) {
    sideBarWidth = 0
  } else {
    sideBarWidth = 0
  }
   

  rect.setAttribute('width', window.innerWidth)
  rect.setAttribute('x', -sideBarWidth)
  rect.setAttribute('height', document.body.clientHeight)
  svg.setAttribute('width', sideBarWidth)
  svg.setAttribute('height', document.body.clientHeight)

  let right = true
  svg.addEventListener('click', (e) => {
    if (right) {
      svg.style.right = 'unset'
      svg.style.left = 0
      white.classList.remove('top')
      white.classList.add('bottom')
      dark.classList.remove('bottom')
      dark.classList.add('top')
      rect.setAttribute('x', window.innerWidth - sideBarWidth)

      
      let start = null
      function step(timestamp) {
        if (!start) start = timestamp
        let progress = (timestamp - start) / 30
        let temp = +rect.getAttribute('x')

        if (temp - progress > sideBarWidth) {
          rect.setAttribute('x', temp - progress)
          window.requestAnimationFrame(step)
        } else {
          rect.setAttribute('x', sideBarWidth)
        }
      }

      window.requestAnimationFrame(step)

      right = false
    } else {
      svg.style.left = 'unset'
      svg.style.right = 0

      rect.setAttribute('x', sideBarWidth)
      const windowWidth = window.innerWidth

      let start = null
      function step(timestamp) {
        if (!start) start = timestamp
        let progress = (timestamp - start) / 30
        let temp = +rect.getAttribute('x')

        if (temp < windowWidth - sideBarWidth) {
          rect.setAttribute('x', temp + progress)
          window.requestAnimationFrame(step)
        } else {
          rect.setAttribute('x', -sideBarWidth)
          white.classList.remove('bottom')
          white.classList.add('top')
          dark.classList.remove('top')
          dark.classList.add('bottom')
        }
      }

      window.requestAnimationFrame(step)

      right = true
    }
  })
}
