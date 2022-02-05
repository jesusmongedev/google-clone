const input = document.getElementById('search')
const button = document.getElementById('button')

input.addEventListener('change', (event) => {
  event.preventDefault()
  const submit = event.target.value
  const query = `http://www.google.com/search?hl=es&q=${submit}`

  button.onclick = function () {
    window.open(query)
  }
})

input.addEventListener('keyup', (event) => {
  let key = event.keyCode || event.which
  const submit = event.target.value
  const query = `http://www.google.com/search?hl=es&q=${submit}`

  if (key === 13) {
    window.open(query)
  }
})

// Dark and light Mode
const $theme = document.getElementById('theme')
$theme.onclick = () => {
  document.body.classList.toggle('dark-theme')
  if (document.body.classList.contains('dark-theme')) {
    $theme.textContent = 'Dark theme: on'
    localStorage.setItem('dark-mode', 'true')
  } else {
    $theme.textContent = 'Dark theme: off'
    localStorage.setItem('dark-mode', 'false')
  }
}

// Obtenemos el modo actual por su clave y comprobamos su valor el cual debe ser con cadenas de texto ''
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-theme')
  $theme.textContent = 'Dark theme: on'
} else {
  document.body.classList.remove('dark-theme')
  $theme.textContent = 'Dark theme: off'
}
