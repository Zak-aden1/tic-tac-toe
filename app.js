const wrapper = document.querySelector('.wrapper')
const all = document.querySelectorAll('.all')
// const top = document.querySelectorAll('.top')
const winner = document.querySelector('.title')
const circle = document.querySelector('.circle-score')
const cross = document.querySelector('.cross-score')

const topLeft = document.querySelector('.top-left')
const topMid = document.querySelector('.top-mid')
const topRight = document.querySelector('.top-right')
const midLeft = document.querySelector('.mid-left')
const midMid = document.querySelector('.mid-mid')
const midRight = document.querySelector('.mid-right')
const bottomLeft = document.querySelector('.bottom-left')
const bottomMid = document.querySelector('.bottom-mid')
const bottomRight = document.querySelector('.bottom-right')

button = document.querySelector('button')

let playerOne = true;
let scoreOne = 1;
let scoreTwo = 1;
let isGameOver = false

// console.log(playerOne);
console.log(all);

// const condition = () => {

// }


wrapper.addEventListener('click', (e, oneTime) => {
   if (isGameOver) {
       return
   }
    if (playerOne == true && !e.target.classList.contains('wrapper') && e.target.innerHTML == '') {
         e.target.innerHTML = `<h1> X </h1>`
         e.target.classList.add('green')
         console.log(e.target);
         playerOne = !playerOne
        // console.log(e);
        e.target.classList
        //  console.log(e);
        //  console.log(topLeft.innerHTML);
    } else if (!playerOne &&!e.target.classList.contains('wrapper') &&  e.target.innerHTML == ''){
        e.target.innerHTML = `<h1> O </h1>`
        e.target.classList.add('blue')
        playerOne = !playerOne
    }
    

    if (
        topLeft.innerHTML.includes('X') && topMid.innerHTML.includes('X') && topRight.innerHTML.includes('X') 
    // topLeft.innerHTML == topMid.innerHTML && topMid.innerHTML == topRight.innerHTML
    
    || midLeft.innerHTML.includes('X') && midMid.innerHTML.includes('X') && midRight.innerHTML.includes('X') || bottomLeft.innerHTML.includes('X') && bottomMid.innerHTML.includes('X') && bottomRight.innerHTML.includes('X')
    // Verticle
    || topLeft.innerHTML.includes('X') && midLeft.innerHTML.includes('X') && bottomLeft.innerHTML.includes('X') || topMid.innerHTML.includes('X') && midMid.innerHTML.includes('X') && bottomMid.innerHTML.includes('X') || topRight.innerHTML.includes('X') && midRight.innerHTML.includes('X') && bottomRight.innerHTML.includes('X')
    // Diaganol
    || topLeft.innerHTML.includes('X') && midMid.innerHTML.includes('X') && bottomRight.innerHTML.includes('X') || topRight.innerHTML.includes('X') && midMid.innerHTML.includes('X') && bottomLeft.innerHTML.includes('X')) {
        // alert('player one wins')
        // window.location.reload()
        winner.classList.add('cross')
        winner.innerText = 'Cross Wins!!'
        cross.innerHTML = `Cross Score: ${scoreOne ++}`
        all.forEach(button => {
            button.classList.add('animate__flash')
        });
        isGameOver = true
        // console.log(winner);

    } else if (topLeft.innerHTML.includes('O') && topMid.innerHTML.includes('O') && topRight.innerHTML.includes('O') || midLeft.innerHTML.includes('O') && midMid.innerHTML.includes('O') && midRight.innerHTML.includes('O') || bottomLeft.innerHTML.includes('O') && bottomMid.innerHTML.includes('O') && bottomRight.innerHTML.includes('O')
    // verticle
    || topLeft.innerHTML.includes('O') && midLeft.innerHTML.includes('O') && bottomLeft.innerHTML.includes('O') || topMid.innerHTML.includes('O') && midMid.innerHTML.includes('O') && bottomMid.innerHTML.includes('O') || topRight.innerHTML.includes('O') && midRight.innerHTML.includes('O') && bottomRight.innerHTML.includes('O')
    // Diaganol
    || topLeft.innerHTML.includes('O') && midMid.innerHTML.includes('O') && bottomRight.innerHTML.includes('O') || topRight.innerHTML.includes('O') && midMid.innerHTML.includes('O') && bottomLeft.innerHTML.includes('O')) {
        // alert('player two wins')
        winner.classList.add('circle');
        winner.classList.add('animate__flash')
        winner.innerText = 'Circle Wins!!'
        circle.innerHTML = `Circle Score: ${scoreTwo++}`
        // scoreTwo.classList.add('circleNumber')
        // add a foreach or for... and add a classList.add to each individual node/element :) 
        all.forEach(button => {
            button.classList.add('animate__flash')
        });
        // all.classList.add('animate__flash')
        
        isGameOver = true
        // window.location.reload()
    }


})

button.addEventListener('click', e => {
    // window.location.reload()
    // console.log(all);
    all.forEach((e) => {
        e.innerHTML = ''
        e.classList.remove('green')
        e.classList.remove('blue')
        winner.innerText = 'Tic-Tac-Toe'
        winner.classList.remove('circle')
        winner.classList.remove('cross')
        isGameOver = false
        console.log(e);
        e.classList.remove('animate__flash')
        // winner.classList.remove('cross')
        // console.log(winner);
    })
})
// all.forEach( () => {
// button.addEventListener('click', e => {
//     // e.innerHTML = ''
//     // console.log(e);
    
// })
// })
                            // clock
const ticking = document.querySelector('.clock')

const tick = () => {
    const now = new Date()

    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()

    const zahtml = `
    <span> ${h} </span> :
    <span> ${m} </span> :
    <span> ${s} </span>
    `
    ticking.innerHTML = zahtml
    // console.log(h);
}

setInterval(tick, 1000)