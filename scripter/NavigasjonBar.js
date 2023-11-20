let Hamburger = document.querySelector('.hamburger')

Hamburger.addEventListener('click', () => {
    if(Hamburger.parentElement.parentElement.querySelector('.sidebar')) {
        Hamburger.parentElement.parentElement.querySelector('.sidebar').className = "sidebar-active"
        document.querySelector('.hamburger').className = "hamburgerSidebar"
    } else {
        Hamburger.parentElement.parentElement.querySelector('.sidebar-active').className = "sidebar"
        document.querySelector('.hamburgerSidebar').className = "hamburger"
    }
})