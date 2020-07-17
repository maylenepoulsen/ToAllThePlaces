const burger = document.querySelector(".burger").addEventListener("click", () => {
    //document.querySelector(".sidebar").classList.add("sidebarActive");
    document.querySelector('.sidebar').style.width = '400px'
    
});

const closeSidebar = document.querySelector('.close').addEventListener('click', () => {
    //document.querySelector('.sidebar').classList.remove('sidebarActive')
    document.querySelector('.sidebar').style.width = '0px'
})
