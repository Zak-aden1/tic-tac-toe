"use strict";

var wrapper = document.querySelector('.wrapper');
var all = document.querySelectorAll('.all'); // const top = document.querySelectorAll('.top')

var winner = document.querySelector('.title');
var circle = document.querySelector('.circle-score');
var cross = document.querySelector('.cross-score');
var topLeft = document.querySelector('.top-left');
var topMid = document.querySelector('.top-mid');
var topRight = document.querySelector('.top-right');
var midLeft = document.querySelector('.mid-left');
var midMid = document.querySelector('.mid-mid');
var midRight = document.querySelector('.mid-right');
var bottomLeft = document.querySelector('.bottom-left');
var bottomMid = document.querySelector('.bottom-mid');
var bottomRight = document.querySelector('.bottom-right');
button = document.querySelector('button');
var playerOne = true;
var scoreOne = 1;
var scoreTwo = 1;
var isGameOver = false; // console.log(playerOne);
// const condition = () => {
// }

wrapper.addEventListener('click', function (e, oneTime) {
  if (isGameOver) {
    return;
  }

  if (playerOne == true && !e.target.classList.contains('wrapper') && e.target.innerHTML == '') {
    e.target.innerHTML = "<h1> X </h1>";
    e.target.classList.add('green');
    console.log(e.target);
    playerOne = !playerOne; // console.log(e);

    e.target.classList; //  console.log(e);
    //  console.log(topLeft.innerHTML);
  } else if (!playerOne && !e.target.classList.contains('wrapper') && e.target.innerHTML == '') {
    e.target.innerHTML = "<h1> O </h1>";
    e.target.classList.add('blue');
    playerOne = !playerOne;
  }

  if (topLeft.innerHTML.includes('X') && topMid.innerHTML.includes('X') && topRight.innerHTML.includes('X') // topLeft.innerHTML == topMid.innerHTML && topMid.innerHTML == topRight.innerHTML
  || midLeft.innerHTML.includes('X') && midMid.innerHTML.includes('X') && midRight.innerHTML.includes('X') || bottomLeft.innerHTML.includes('X') && bottomMid.innerHTML.includes('X') && bottomRight.innerHTML.includes('X') // Verticle
  || topLeft.innerHTML.includes('X') && midLeft.innerHTML.includes('X') && bottomLeft.innerHTML.includes('X') || topMid.innerHTML.includes('X') && midMid.innerHTML.includes('X') && bottomMid.innerHTML.includes('X') || topRight.innerHTML.includes('X') && midRight.innerHTML.includes('X') && bottomRight.innerHTML.includes('X') // Diaganol
  || topLeft.innerHTML.includes('X') && midMid.innerHTML.includes('X') && bottomRight.innerHTML.includes('X') || topRight.innerHTML.includes('X') && midMid.innerHTML.includes('X') && bottomLeft.innerHTML.includes('X')) {
    // alert('player one wins')
    // window.location.reload()
    winner.classList.add('cross');
    winner.innerText = 'Cross Wins!!';
    cross.innerHTML = "Cross Score: ".concat(scoreOne++);
    isGameOver = true; // console.log(winner);
  } else if (topLeft.innerHTML.includes('O') && topMid.innerHTML.includes('O') && topRight.innerHTML.includes('O') || midLeft.innerHTML.includes('O') && midMid.innerHTML.includes('O') && midRight.innerHTML.includes('O') || bottomLeft.innerHTML.includes('O') && bottomMid.innerHTML.includes('O') && bottomRight.innerHTML.includes('O') // verticle
  || topLeft.innerHTML.includes('O') && midLeft.innerHTML.includes('O') && bottomLeft.innerHTML.includes('O') || topMid.innerHTML.includes('O') && midMid.innerHTML.includes('O') && bottomMid.innerHTML.includes('O') || topRight.innerHTML.includes('O') && midRight.innerHTML.includes('O') && bottomRight.innerHTML.includes('O') // Diaganol
  || topLeft.innerHTML.includes('O') && midMid.innerHTML.includes('O') && bottomRight.innerHTML.includes('O') || topRight.innerHTML.includes('O') && midMid.innerHTML.includes('O') && bottomLeft.innerHTML.includes('O')) {
    // alert('player two wins')
    winner.classList.add('circle');
    winner.innerText = 'Circle Wins!!';
    circle.innerHTML = "Circle Score: ".concat(scoreTwo++);
    scoreTwo.classList.add('circleNumber');
    isGameOver = true; // window.location.reload()
  }
});
button.addEventListener('click', function (e) {
  // window.location.reload()
  // console.log(all);
  all.forEach(function (e) {
    e.innerHTML = '';
    e.classList.remove('green');
    e.classList.remove('blue');
    winner.innerText = 'Tic-Tac-Toe';
    winner.classList.remove('circle');
    winner.classList.remove('cross');
    isGameOver = false;
    console.log(e); // winner.classList.remove('cross')
    // console.log(winner);
  });
}); // all.forEach( () => {
// button.addEventListener('click', e => {
//     // e.innerHTML = ''
//     // console.log(e);
// })
// })
// clock

var ticking = document.querySelector('.clock');

var tick = function tick() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var zahtml = "\n    <span> ".concat(h, " </span> :\n    <span> ").concat(m, " </span> :\n    <span> ").concat(s, " </span>\n    ");
  ticking.innerHTML = zahtml; // console.log(h);
};

setInterval(tick, 1000);