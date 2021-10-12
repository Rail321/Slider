const row = document.querySelector('.row')
const itemsLength = document.querySelectorAll('.row .item').length
const itemInSlide = 2
const pages = Math.floor(itemsLength / itemInSlide)
const interval = 3000
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentPage = 0
const links = document.querySelectorAll('.link')
const activeLinkClass = 'link_active'
let isTouched = false
const slider = document.querySelector('.slider')
const cooldown = 2000
const infinity = true
const nav = document.querySelector('.nav')
const linkClass = 'link'

const changeActiveLink = () => {
  links.forEach((link, idx) => {
    
    idx === currentPage ?
      link.classList.add(activeLinkClass) :
      link.classList.remove(activeLinkClass)
  })
}

changeActiveLink()

row.style.transform = `translateX(-${currentPage}00%)`

setTimeout(() => {

  row.style.transitionProperty = 'transform'
  row.style.transitionDuration = '0.5s'
}, 0)

setInterval(() => {

  if (!isTouched) {
    currentPage < pages ? currentPage++ : currentPage = pages
    row.style.transform = `translateX(-${currentPage}00%)`
    changeActiveLink()
  }
}, interval)

prev.addEventListener('click', () => {
  
  currentPage > 0 ? currentPage-- : currentPage = infinity ? pages : 0
  row.style.transform = `translateX(-${currentPage}00%)`
  changeActiveLink()
})

next.addEventListener('click', () => {
  
  currentPage < pages ? currentPage++ : currentPage = infinity ? 0 : pages
  row.style.transform = `translateX(-${currentPage}00%)`
  changeActiveLink()
})

slider.addEventListener('mouseenter', () => {
  isTouched = true
})

slider.addEventListener('mouseleave', () => {
  setTimeout(() => {
    isTouched = false
  }, cooldown)
})

nav.addEventListener('click', event => {
  
  if (event.target.classList.contains(linkClass)) {
    
    event.target.dataset.slide <= pages && event.target.dataset.slide >= 0 ? currentPage = event.target.dataset.slide : ''
    row.style.transform = `translateX(-${currentPage}00%)`
    changeActiveLink()
  }
})