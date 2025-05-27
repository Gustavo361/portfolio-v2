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

document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault()

  const userName = document.getElementById('userName').value.trim()
  const userEmail = document.getElementById('userEmail').value.trim()
  const userMessage = document.getElementById('userMessage').value.trim()
  const responseMessage = document.getElementById('formResponse')

  const payload = { userName, userEmail, userMessage }

  try {
    const res = await fetch('https://portfolio-v2-server.onrender.com/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const result = await res.json()

    if (res.ok && result.success) {
      window.location.href = result.redirectUrl
    } else {
      responseMessage.textContent = result.error || 'Erro ao enviar o e-mail.'
      responseMessage.style.color = 'red'
    }
  } catch (err) {
    console.error('Erro ao enviar:', err)
    responseMessage.textContent = 'Erro ao conectar com o servidor.'
    responseMessage.style.color = 'red'
  }
})