export function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth
}

export function debounce(fn, wait) {
  let timeout
  return function (...args) {
    const later = () => {
      clearTimeout(timeout)
      fn.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function throttle(func, delay) {
  let timeout = null
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args)
        timeout = null
      }, delay)
    }
  }
}
