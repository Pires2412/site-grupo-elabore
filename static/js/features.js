const btnMenuMobile = document.querySelector('.icon.menu_mobile_icon.menumbl')
const menuMobileOptions = document.querySelectorAll('.menu_options.menumob')
const closeMenuIcon = document.querySelector('.icon.close')

function toggle_menu() {
    const containerMenu = document.querySelector('.menu_mobile')
    containerMenu.classList.toggle('is_open')
}

menuMobileOptions.forEach(e=>{
    e.addEventListener('click', toggle_menu)
})

closeMenuIcon.addEventListener('click', toggle_menu)

btnMenuMobile.addEventListener('click', toggle_menu)

