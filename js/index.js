// Your code goes here
document.querySelectorAll('nav a').forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.color = "hotpink"
        console.log('enter')

        element.addEventListener("mouseleave", () => {
            element.style.color = "black"
        })
    })
})


const funBus = document.querySelector('.logo-heading')
window.addEventListener('resize', () => {
    funBus.style.transform = "scale(.8)"
    console.log('working?')

    funBus.addEventListener('click', (event) => {
        event.target.style.transform = "rotate(30deg)"
        event.target.style.transition = 'transform 2s'
        console.log('clicker')
    })
})

const navBarDbl = document.querySelector('.main-navigation')
navBarDbl.addEventListener('click', (event) => {
    navBarDbl.style.background = 'white'
    event.stopPropagation

    navBarDbl.addEventListener('dblclick', () => {
        navBarDbl.style.background = 'red'
    })
})




const what = document.querySelector('.intro h2')
what.addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange'
    console.log('why')
})

const scroller = document.querySelector('body')
window.addEventListener('scroll', () => {
    scroller.style.background = 'yellow'
})


document.querySelectorAll('.content-section').forEach(element => {
    element.addEventListener('wheel', () => {
        element.style.transform = 'scale(1.8)'
        element.style.transition = 'transform 2s'

        element.addEventListener('contextmenu', (e) => {
            e.preventDefault()
        })
    })
})

const outie = document.querySelector('.intro')
outie.addEventListener('mouseout', () => {
    outie.style.background = "teal"
})
console.log(outie)