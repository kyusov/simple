window.onload = () => {
  const rect = document.querySelector('.right-slider-svg > clipPath > rect')
  rect.setAttribute('width', window.innerWidth - 85)
  rect.setAttribute('height', document.body.clientHeight)
}
