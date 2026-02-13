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

const boxDropdown = document.querySelectorAll('.box-dropdown')

boxDropdown.forEach(el => {
    el.addEventListener('click', ()=>{
        const textBox = el.querySelector('.box-dropdown-text')
        const elText = el.querySelector('.dropdown-title-icon')
    textBox.classList.toggle('is_open')
    if (textBox.className == 'box-dropdown-text is_open') {
        elText.textContent = '-'
    } else {
        elText.textContent = '+'
    }
    })
})