alert('press "space" to change colors')

document.addEventListener('keydown', event => {
   event.preventDefault()
   if (event.code.toLowerCase() === 'space') {
      setRandomColors()
   }
})

document.addEventListener('click', event => {
   const type = event.target.dataset.type

   if (type === 'lock') {
      const node =
         event.target.tagName.toLowerCase() === 'i'
            ? event.target
            : event.target.children[0]

      node.classList.toggle('fa-lock-open')
      node.classList.toggle('fa-lock')
   } else if (type === 'copy') {
      copyToClickboard(event.target.textContent)
   }
})

const col = document.querySelectorAll('.col')

function generateRandaomColor() {
   const hexCodes = '0123456789ABCDEF'

   let color = ''

   for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
   }
   return '#' + color
}

function copyToClickboard(text) {
   return navigator.clipboard.writeText(text)
}

function setRandomColors() {
   col.forEach(col => {
      isLocked = col.querySelector('i').classList.contains('fa-lock')
      const text = col.querySelector('h2')
      const button = col.querySelector('button')
      const color = generateRandaomColor()

      if (isLocked) {
         return
      }

      text.textContent = color
      col.style.background = color
      setTextColor(text, color)
      setTextColor(button, color)
   })
}

function setTextColor(text, color) {
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.6 ? 'black' : 'white'
}

setRandomColors()
