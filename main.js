document.addEventListener('DOMContentLoaded', () => {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  const navPos = navbar.getBoundingClientRect().top
  const headerDiv = document.getElementById('header')
  const headerPos = headerDiv.offsetTop

  window.addEventListener('scroll', e => {
    const scrollPos = window.scrollY
    if (scrollPos > navPos) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
    if (scrollPos > headerPos) {
      navbar.classList.add('sticky-bg')
    } else {
      navbar.classList.remove('sticky-bg')
    }
  })
})
