let lightTheme = true

const windowHeight = window.innerHeight
var windowWidth = window.innerWidth

window.onload = () => {
  $('.first').marquee({
    duration: 15000,
    startVisible: true,
    duplicated: true,
  })

  $('.second').marquee({
    duration: 15000,
    startVisible: true,
    duplicated: true,
  })

  const white = document.querySelector('.white')
  const dark = document.querySelector('.darken')
}

function basketAnimation(show) {
  if (show) {
    $('.basket-front').transition({
      x: '0',
      y: '0',
      opacity: 1,
      duration: 700,
    })

    $('.basket-back').transition({
      x: '0',
      y: '0',
      opacity: 1,
      duration: 700,
    })

    $('.basket-bag-big').transition({
      y: '0',
      opacity: 1,
      duration: 1000,
      delay: 200,
    })

    $('.basket-bag-middle').transition({
      y: '0',
      opacity: 1,
      duration: 700,
      delay: 300,
    })

    $('.basket-bag-top').transition({
      y: '0',
      opacity: 1,
      duration: 500,
      delay: 200,
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

function smilesAnimation(show) {
  if (show) {
    $('.smiles').css('animation-play-state', 'running')
    $('.smiles-faster').css('animation-play-state', 'running')
  } else {
    $('.smiles').css('animation-play-state', 'paused')
    $('.smiles-faster').css('animation-play-state', 'paused')
  }
}

$(window).scroll(function () {
  if ($(this).scrollTop() > $('.first').offset().top + 100) {
    $('.first').marquee('pause')
    $('.second').marquee('pause')
  } else {
    if (lightTheme) {
      $('.first').marquee('resume')
    } else {
      $('.second').marquee('resume')
    }
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
      $(this).scrollTop() < $('.fire').closest('div').offset().top - 500
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
      $(this).scrollTop() < $('.smiles').closest('div').offset().top - 500
    ) {
      smilesAnimation(false)
    } else {
      smilesAnimation(true)
    }
  }

  if (
    $(this).scrollTop() >
      $('.basket-front').closest('div').offset().top - 250 &&
    $(this).scrollTop() <
      $('.basket-front').closest('div').offset().top + 500 &&
    !lightTheme
  ) {
    basketAnimation(true)
  }
})

$(document).ready(() => {
  const dark = document.querySelector('.darken')

  for (let i = 2; i < dark.children.length; i++) {
    dark.children[i].style.display = 'none'
  }

  $('.header__menu-btn').on('click', (e) => {
    if (!lightTheme) {
      $('.menu__wrapper').css('background-color', '#fff')
      $('.menu__close').css('background-color', '#333')
      $('.menu__close span').css('background-color', '#fff')
      $('.menu__title').css('color', 'rgba(51, 51, 51, 0.3)')

      const items = [...document.querySelectorAll('.menu__item')]
      for (let i = 0; i < items.length; i++) {
        $(items[i]).css('color', '#333')
      }

      const imgs = [...document.querySelectorAll('.menu__social > a')]
      imgs[0].children[0].setAttribute(
        'src',
        'assets/pictures/social/Facebook icon.svg'
      )
      imgs[1].children[0].setAttribute(
        'src',
        'assets/pictures/social/Instagram icon.svg'
      )
      imgs[2].children[0].setAttribute(
        'src',
        'assets/pictures/social/VK icon.svg'
      )

      $('.menu__email').css('color', '#333')
    } else {
      $('.menu__wrapper').css('background-color', '#333')
      $('.menu__close').css('background-color', '#fff')
      $('.menu__close span').css('background-color', '#333')
      $('.menu__title').css('color', 'rgba(255, 255, 255, 0.3)')

      const items = [...document.querySelectorAll('.menu__item')]
      for (let i = 0; i < items.length; i++) {
        $(items[i]).css('color', '#fff')
      }

      const imgs = [...document.querySelectorAll('.menu__social > a')]
      imgs[0].children[0].setAttribute(
        'src',
        'assets/pictures/social/Facebook icon-darken.svg'
      )
      imgs[1].children[0].setAttribute(
        'src',
        'assets/pictures/social/Instagram icon-darken.svg'
      )
      imgs[2].children[0].setAttribute(
        'src',
        'assets/pictures/social/VK icon-darken.svg'
      )

      $('.menu__email').css('color', '#fff')
    }

    $('.menu').css({ display: 'flex', opacity: 1 })
    $('.menu__overlay').css('display', 'block')
    $('.first').marquee('pause')

    $('body').css('overflow-y', 'hidden')

    anime({
      targets: '.menu__overlay',
      opacity: 1,
      duration: 1000,
      easing: 'easeOutExpo',
    })

    anime({
      targets: '.menu__wrapper',
      opacity: 1,
      translateX: ['100%', '0'],
      duration: 1000,
      delay: 500,
      easing: 'easeOutExpo',
      begin: function () {
        $('.menu__wrapper').css('display', 'block')
      },
    })
  })

  $('.menu__wrapper-close').on('click', () => {
    $('body').css('overflow-y', 'unset')
    $('.first').marquee('resume')
    anime({
      targets: '.menu__wrapper',
      opacity: 0,
      translateX: ['0', '100%'],
      duration: 1000,
      easing: 'easeOutExpo',
      complete: function () {
        $('.menu__wrapper').css('display', 'none')
      },
    })

    anime({
      targets: '.menu__overlay',
      opacity: 0,
      duration: 1000,
      delay: 500,
      easing: 'easeOutExpo',
      complete: function () {
        $('.menu').css({ display: 'none', opacity: 0 })
        $('.menu__overlay').css('display', 'none')
      },
    })
  })

  $('.offer__purchase-card').each(function () {
    $(this).on('click', () => {
      if (lightTheme) {
        $('.first').marquee('pause')
      } else {
        $('.second').marquee('pause')
      }

      $('.modal').css('display', 'block')
      $('.modal__overlay').css('display', 'block')
      $('.modal__wrapper').css('display', 'block')
      $('.modal__back').css('display', 'block')

      anime({
        targets: '.modal__overlay',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo',
      })

      anime({
        targets: '.modal__wrapper',
        opacity: 1,
        translateY: ['100%', '-50%'],
        translateX: ['-50%', '-50%'],
        delay: 500,
        duration: 1000,
        easing: 'easeOutExpo',
      })

      anime({
        targets: '.modal__back',
        opacity: 1,
        translateY: ['100%', 'calc(-50% + 5px)'],
        translateX: ['calc(-50% + 5px)', 'calc(-50% + 5px)'],
        delay: 500,
        duration: 1000,
        easing: 'easeOutExpo',
      })
    })
  })

  $('.modal__close').on('click', () => {
    if (lightTheme) {
      $('.first').marquee('resume')
    } else {
      $('.second').marquee('resume')
    }
    anime({
      targets: '.modal__wrapper',
      opacity: 0,
      translateY: ['-50%', '100%'],
      translateX: ['-50%', '-50%'],
      duration: 1000,
      easing: 'easeOutExpo',
      complete: function () {
        $('.modal__wrapper').css('display', 'none')
      },
    })

    anime({
      targets: '.modal__back',
      opacity: 0,
      translateY: ['calc(-50% + 5px)', '100%'],
      translateX: ['calc(-50% + 5px)', 'calc(-50% + 5px)'],
      duration: 1000,
      easing: 'easeOutExpo',
      complete: function () {
        $('.modal__back').css('display', 'none')
      },
    })

    anime({
      targets: '.modal__overlay',
      opacity: 0,
      delay: 500,
      duration: 600,
      easing: 'easeOutExpo',
      complete: function () {
        $('.modal').css('display', 'none')
        $('.modal__overlay').css('display', 'none')
      },
    })
  })
})
