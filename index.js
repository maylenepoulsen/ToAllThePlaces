const burger = document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector('.sidebar').style.width = '400px'  
});

const closeSidebar = document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = '0px'
})

const openModal = document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', (e) => {
      modal(e.target.id)
    })
})

const modal = (id) => {
  const body = document.querySelector('body')

  const div = document.createElement('div')
  const span = document.createElement('span')
  span.innerHTML = '&times;'
  span.className = 'close-btn'

  span.addEventListener('click', () => {
    closeModal()  
  })
 
  const data = places.find(place => place.id === parseInt(id))
  console.log(data)
  
  div.innerHTML = `<h2>Some content about the image that was clicked</h2>`
  div.appendChild(span)

  div.className = 'modal'
  body.appendChild(div)
}

const closeModal = () => {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  body.removeChild(modal)    
}


