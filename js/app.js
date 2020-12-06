$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots'
  })
})

$(document).ready(function () {
  $('.slider-2').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-2-dots',
    dotsClass: 'dots'
  })

  let hamberger = document.querySelector('.hamberger')
  let times = document.querySelector('.times')
  let mobileNav = document.querySelector('.mobile-nav')
  let anker = document.querySelector('.anker')

  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open')
  })

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open')
  })
  anker.addEventListener('click', function () {
    mobileNav.classList.remove('open')
  })
})



