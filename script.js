const navigation = document.querySelector('nav')
const tabs = document.querySelectorAll('.trigger')
const left = document.querySelector('.left-arrow')
const right = document.querySelector('.right-arrow')
const carousel = document.querySelector('.carousel-items')
const chevron = document.querySelector('.chevron-up')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    navigation.classList.remove('nav-fixed')
    chevron.style.display = "none"
  }
  if (document.body.scrollTop > 33.2 || document.documentElement.scrollTop > 33.2) {
    navigation.classList.add('nav-fixed')
  }
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    chevron.style.display = "block"
  }
}



tabs.forEach(tab => {
  tab.addEventListener('click', e => {
      this.toggleTabs(e)
      this.toggleContent(e)
  })
})

function toggleTabs(e){
  tabs.forEach(tab => tab.classList.remove('active'))
  e.target.classList.add('active')
}

function toggleContent(e){
  document.querySelectorAll('.content').forEach(item => {
      item.classList.remove('active')
  })
  const selector = e.target.getAttribute('data-target')
  const content = document.querySelector(selector)
  content.classList.add('active')
}


right.addEventListener('click', () => {
  carousel.scrollLeft = 950
})

left.addEventListener('click', () => {
  carousel.scrollLeft = 0
})

chevron.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})