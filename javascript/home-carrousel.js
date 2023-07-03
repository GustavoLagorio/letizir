//Home Carrousel
'use strict'

const homeCarrouselContainer = document.querySelector('.home_recomendados_carrousel');
const recomendacionButtons = document.querySelectorAll('.recomendacion');

recomendacionButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        let position = i
        let positionX = position * -25

        homeCarrouselContainer.style.transform = `translateX(${positionX}%)`
    })
})