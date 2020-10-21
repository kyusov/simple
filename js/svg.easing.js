// Based on Easing Equations (c) 2003 [Robert Penner](http://www.robertpenner.com/), all rights reserved.

;(function () {
  var easing = {
    quadIn: function (pos) {
      return Math.pow(pos, 2)
    },
    elastic: function (pos) {
      if (pos == !!pos) return pos
      return Math.pow(2, -10 * pos) * Math.sin(((pos - 0.095) * (2 * Math.PI)) / 0.3) + 1
    },
  }

  for (var key in easing) SVG.easing[key] = easing[key]
})()
