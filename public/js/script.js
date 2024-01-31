const dataMenuOpenBtn = document.querySelector('[data-menu-open-btn]')
const dataMenuCloseBtn = document.querySelector('[data-menu-close-btn]')
const menuFullScreen = document.querySelector('[data-menu-full-screen]')

const dataMenuMobileProjs = document.querySelector('[data-menu-mobile-projs]')
const dataMenuMobileAbout = document.querySelector('[data-menu-mobile-about]')
const dataMenuMobileContact = document.querySelector('[data-menu-mobile-contact]')

dataMenuOpenBtn.addEventListener('click', () => {
    dataMenuOpenBtn.classList.remove('active')
    dataMenuCloseBtn.classList.add('active')

    menuFullScreen.classList.add('active')
})

dataMenuCloseBtn.addEventListener('click', () => {
    dataMenuOpenBtn.classList.add('active')
    dataMenuCloseBtn.classList.remove('active')

    menuFullScreen.classList.remove('active')
})

function closeMenuFullScreen() {
    menuFullScreen.classList.remove('active')
}

dataMenuMobileProjs.addEventListener('click', () => {
    closeMenuFullScreen()
})
dataMenuMobileAbout.addEventListener('click', () => {
    closeMenuFullScreen()
})
dataMenuMobileContact.addEventListener('click', () => {
    closeMenuFullScreen()
})

// function validateForm() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
    
//     if (name.length < 2) {
//         alert('Por favor, insira um nome válido.')
//         return false;
//     }

//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert('Por favor, insira um endereço de e-mail válido.')
//         return false;
//     }

//     if (message.length < 5) {
//         alert('Por favor, insira uma mensagem válida.')
//         return false;
//     }

//     return true
// }