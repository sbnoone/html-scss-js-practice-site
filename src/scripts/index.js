import { throttle } from './utils'
import '../styles/index.scss'

const cssBreakpoints = {
  sm: 520,
  md: 790,
  lg: 968,
}

const $burger = document.getElementById('burger')
const $nav = document.getElementById('nav')

function isMenuOpen() {
  return $nav.classList.contains('open')
}

// Toggle navigation menu
$burger.addEventListener('click', () => {
  $nav.classList.toggle('open')
  document.body.classList.toggle('locked')
  if (isMenuOpen()) {
    $nav.classList.remove('transition')
  } else {
    $nav.classList.add('transition')
  }
})

// Close menu after click on link
$nav.addEventListener('click', e => {
  if (e.target.classList.contains('header__nav_link')) {
    $nav.classList.remove('open')
  }
})

// Close menu on big screensizes
window.addEventListener(
  'resize',
  throttle(() => {
    if (window.outerWidth > cssBreakpoints.md) {
      document.body.classList.remove('locked')
      $nav.classList.remove('open')
    }

    if (!isMenuOpen()) {
      $nav.classList.remove('transition')
    } else {
      $nav.classList.add('transition')
    }
  }, 100)
)

// Prevent page reload after form submit
document
  .querySelectorAll('form')
  .forEach($node => $node.addEventListener('submit', e => e.preventDefault()))
