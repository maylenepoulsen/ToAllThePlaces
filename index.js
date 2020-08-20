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
 
  const dataDiv = document.createElement('div')
  dataDiv.innerHTML = `<figure>
                         <img src=${data.image} class='modal-img'>
                         <figcaption class='modal-name'><h3>${data.name}&nbsp;&nbsp;&nbsp;${data.date}</h3></figcaption>
                       </figure>
                       <div class='modal-description'>${data.description}</div>`

  div.appendChild(span)
  div.appendChild(dataDiv)
  
  div.className = 'modal'

  const factDiv = document.createElement('div')
  factDiv.className = 'fact-list'
  const ul = factList(data.facts)
  factDiv.innerHTML = `<h3>Fun Facts about this Place:</h3>`
  factDiv.appendChild(ul)

  dataDiv.appendChild(factDiv)

  body.appendChild(div)
}

const factList = (array) => {
  const ul = document.createElement('ul')
  ul.className = 'fact-list-ul'
  array.forEach((fact) => {
    const li = document.createElement('li')
    li.innerHTML = fact
    ul.appendChild(li)   
  })
  return ul
}

const closeModal = () => {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  body.removeChild(modal)    
}


