window.onload = () => {
  const svgRight = document.querySelector('.svg-slider-right')
  const svgLeft = document.querySelector('.svg-slider-left')

  const pathRight = document.querySelector('.svg-slider-right > path')
  const pathLeft = document.querySelector('.svg-slider-left > path')

  const clipPathRight = document.querySelector(
    '.svg-slider-right > defs > clipPath > path'
  )
  const clipPathLeft = document.querySelector(
    '.svg-slider-left > defs > clipPath > path'
  )

  //скрываем левую svg
  svgLeft.style.display = 'none'

  const width = svgRight.clientWidth - 20
  const height = svgRight.clientHeight

  const offset = 10
  const pip = 40

  pathRight.setAttribute('d', getPath(width, height, offset, 0, false, 0))

  clipPathRight.setAttribute('d', getPath(width, height, offset, 0, false, 0))

  const mouseLeave = () => {
    anime({
      targets: [pathRight, clipPathRight],
      d: [
        {
          value: getPath(width, height, offset, 0, false, 0),
        },
      ],
      duration: 400,
      easing: 'easeInQuad',
    })
    console.log('mouseleave')
    svgRight.style.width = '50px'
    pathRight.removeEventListener('mousedown', mouseDown)
  }

  const mouseEnter = () => {
    anime({
      targets: [pathRight, clipPathRight],
      d: [
        {
          value: getPath(width, height, offset, pip, true, 0),
        },
      ],
      duration: 400,
      easing: 'easeInQuad',
    })
    pathRight.addEventListener('mousedown', mouseDown)
  }

  const mouseDown = function (e) {
    svgRight.removeEventListener('mouseleave', mouseLeave)
    svgRight.removeEventListener('mouseenter', mouseEnter)

    let shiftX = e.clientX + pip + 50
    let shiftY = e.clientY + 60

    let widthInner = svgRight.clientWidth - 20

    pathRight.setAttribute(
      'd',
      getPath(widthInner, height, offset, 0, false, 0)
    )

    moveAt(e.screenX, e.screenY)

    function moveAt(pageX, pageY) {
      const x = pageX - shiftX
      const y = pageY - shiftY

      svgRight.style.width = Math.abs(x) + 20 + 'px'
      widthInner = svgRight.clientWidth - 20

      pathRight.setAttribute(
        'd',
        getPath(widthInner, height, offset, Math.abs(x), true, y)
      )

      if (Math.abs(x) >= window.innerWidth / 4) {
        svgRight.style.width = '100%'
        document.removeEventListener('mousemove', onMouseMove)
        svgRight.onmouseup = null

        pathRight.setAttribute(
            'd',
            getPath(svgRight.clientWidth, height, offset, Math.abs(x), true, y)
          )

        pathRight.removeEventListener('mousedown', mouseDown)

        anime({
            targets: pathRight,
            d: [
              {
                value: [getPath(svgRight.clientWidth, height, offset, Math.abs(x), true, y), getPath(10, height, svgRight.clientWidth, 0, false, 0) ]
              },
            ],
            easing: 'spring(1, 30, 10, 0)',
            duration: 2000
        })
      }
    }

    function onMouseMove(e) {
      moveAt(e.screenX, e.screenY)
    }

    document.addEventListener('mousemove', onMouseMove)

    svgRight.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove)

      anime({
        targets: pathRight,
        d: [
          {
            value: getPath(width, height, offset, 0, false, 0),
          },
        ],
      })

      svgRight.style.width = '50px'
      svgRight.addEventListener('mouseleave', mouseLeave)
      svgRight.addEventListener('mouseenter', mouseEnter)

      svgRight.onmouseup = null
    }
  }

  svgRight.addEventListener('mouseenter', mouseEnter)
  svgRight.addEventListener('mouseleave', mouseLeave)

  pathRight.addEventListener('dragstart', () => {
    return false
  })
}

function getPath(w, h, offset, pip = 0, resize = false, y = 0) {
  return `
  M${w} 0 
  H${w + offset} 
  V${h} 
  H${w} 
  V${h / 2 + y} 
  C
  ${resize ? w - offset : w} ${h / 2 - 150 + y} 
  ${w - pip} ${h / 2 - 150 + y} 
  ${w - pip} ${h / 2 - 200 + y} 
  S
  ${w} ${h / 2 - 250 + y} 
  ${w} ${h / 2 - 400 + y} 
  V0 
  Z`
}
