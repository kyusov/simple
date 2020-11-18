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

  for (let i = 0; i < dark.children.length; i++) {
    dark.children[i].style.display = 'none'
  }

  white.classList.toggle('active')
  defs.style.display = 'none'

  let sideBarWidth = 0

  if (window.innerWidth < 1440 && window.innerWidth > 1366) {
    sideBarWidth = 15
  } else {
    sideBarWidth = 15
  }

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
    white.classList.toggle('active')

    for (let i = 0; i < dark.children.length; i++) {
      dark.children[i].style.display = 'block'
    }

    if (right) {
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
          rect.setAttribute('x', sideBarWidth)
          tempRect.setAttribute('x', 0)
          tempRect.style.display = 'block'
          tempRect.style.fill = "#fff"

          for (let i = 0; i < white.children.length; i++) {
            white.children[i].style.display = 'none'
          }

          defs.style.display = 'none'
        }
      }

      window.requestAnimationFrame(step)

      right = false
    } else {
      svg.style.left = 'unset'
      svg.style.right = 0

      for (let i = 0; i < white.children.length; i++) {
        white.children[i].style.display = 'block'
      }

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
          
          white.classList.toggle('active')

          white.classList.remove('bottom')
          white.classList.add('top')
          dark.classList.remove('top')
          dark.classList.add('bottom')

          for (let i = 0; i < dark.children.length; i++) {
            dark.children[i].style.display = 'none'
          }

          tempRect.style.display = 'block'
          tempRect.style.fill = "#333"
          defs.style.display = 'none'
          white.classList.toggle('active')
        }
      }

      window.requestAnimationFrame(step)

      right = true
    }
  })

  // modals
  const buyCardBtns = [...document.querySelectorAll('.offer__purchase-card')]
  const overlay = document.querySelector('.modal-buy')
  const becomePartnerBtn = document.querySelector('.offer__partner-btn')

  for (let i = 0; i < buyCardBtns.length; i++) {
    buyCardBtns[i].addEventListener('click', (e) => {
      if (overlay.classList.contains('active')) {
        document.body.style.overflowY = 'unset'
        overlay.classList.remove('active')
      } else {
        document.body.style.overflowY = 'hidden'
        overlay.classList.add('active')
      }
    })
  }

  overlay.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('modal-buy') ||
      e.target.classList.contains('modal-buy__inner_wrapper')
    ) {
      document.body.style.overflowY = 'unset'
      overlay.classList.remove('active')
    }
  })
}
