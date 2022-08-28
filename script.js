let rangeInput = document.querySelector('#range')
const container = document.querySelector('.container')
rangeInput.addEventListener('input' , (e) => {
    container.style.filter = `brightness(${rangeInput.value}%)`
   
})