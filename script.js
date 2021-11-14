/**
 * Scrolls to specific testimonial
 * @param {number} index 
 */
function testimonialScrollTo(index){
    var container = document.querySelector('.testimonials__carousel')
    var target = container.querySelectorAll('.testimonial')[index]
    
    container.scrollTo(target.offsetLeft - 20, 0)
    changeActiveDot(index)
}

/**
 * Removes the class from the last active dot, 
 * adds to the new one
 * @param {number} index 
 */
function changeActiveDot(index){
    var lastActive = document.querySelector('.activeDot')
    lastActive.classList.remove('activeDot')
    var dotContainer = document.querySelector('.dots')
    var activeDot = dotContainer.querySelectorAll('.dot')[index]
    activeDot.classList.add('activeDot')
}


/**
 * If the input is valid, it'll remove the error message
 * if's not, it'll add it.
 * @returns {void}
 */
function handleSubmit(){
    var input = document.querySelector('.footer__email__input')

    if(input.validity.valueMissing || !input.validity.valid && !input.validity.valueMissing){
        return input.classList.add('error')
    }
    return input.classList.remove('error')
}