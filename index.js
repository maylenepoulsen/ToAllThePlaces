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
  div.className = 'modal'
  body.appendChild(div)
}
