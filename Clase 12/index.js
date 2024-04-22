const body = document.querySelector('body')

const div1 = document.createElement('div')
div1.classList.add('div1')
body.appendChild(div1)

const h3 = document.createElement('h3')
h3.classList.add('h3')
h3.innerHTML = '¡Esto es un h3!'
div1.appendChild(h3)

const h2 = document.createElement('h2')
h2.classList.add('h2')
h2.innerHTML = 'Flores y luna'
body.appendChild(h2)

const img = document.createElement('img')
img.classList.add('img')
img.src = './assets/flores y luna (20231213011037).png'
body.appendChild(img)

const link = document.createElement('a')
link.classList.add('button')
link.innerHTML = 'Ir a ilustraciones'
link.href = 'https://integrador-1-ruby.vercel.app/'
body.appendChild(link)

const input = document.createElement('input')
input.classList.add('input')
input.setAttribute('placeholder', 'Search')
body.appendChild(input)

