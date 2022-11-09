const col = document.querySelectorAll('.col')

function generateRandaomColor() {
   const hexCodes = '0123456789ABCDEF'

   let color = ''

   for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
   }
   return '#' + color
}

function setRandomColors() {
   col.forEach(col => {
      col.style.background = generateRandaomColor()
   })
}

setRandomColors()
