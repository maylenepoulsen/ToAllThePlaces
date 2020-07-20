const burger = document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector('.sidebar').style.width = '400px'  
});

const closeSidebar = document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = '0px'
})
