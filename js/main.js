window.onload = () => {
  const height = document.body.clientHeight
  const svg = document.querySelector('svg')
  const path = svg.children[0]

  svg.setAttribute('height', height)

  init(path, height)

  let ticking = false

  function doSomething(offset) {
    const h = window.innerHeight
    path.setAttribute('d', getPath(h / 2, 70, 70, h, 0))
    path.style.transform = `translateY(${offset}px)`
  }

  window.addEventListener('scroll', function (e) {
    let offset = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(offset)
        ticking = false
      })
      ticking = true
    }
  })
}

function init(path) {
  const h = window.innerHeight

  path.setAttribute('d', getPath(h, 0, 70, h, 0, 0))
  // path.setAttribute('d', getPath(h / 2, 70, 70, h, 0))
}

function getPath(y, x, width, height, of) {
  const anchorDistance = 200 + x * 0.5
  const curviness = anchorDistance - 60

  return `
  M0 ${height} 
  H0 
  V${of} 
  h${width} 
  v${y - anchorDistance} 
  c0 ${curviness + of}
  ${x} ${curviness + of} 
  ${x} ${anchorDistance + of} 
  S${width} ${y + of} 
  ${width} ${y + anchorDistance * 2 + of}
  V ${height}
  z`
}
