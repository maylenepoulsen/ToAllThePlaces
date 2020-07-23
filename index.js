const burger = document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector('.sidebar').style.width = '400px'  
});

const closeSidebar = document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = '0px'
})

const openModal = document.querySelectorAll('#modal').forEach((img) => {
    img.addEventListener('click', () => {
        modal()
    })
})

const modal = () => {
  const body = document.querySelector('body')

  const div = document.createElement('div')
  const span = document.createElement('span')
  span.innerHTML = '&times;'
  span.className = 'close-btn'

  span.addEventListener('click', () => {
    closeModal()  
  })

  div.appendChild(span)

  div.className = 'modal'
  body.appendChild(div)
}

const closeModal = () => {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  body.removeChild(modal)    
}
