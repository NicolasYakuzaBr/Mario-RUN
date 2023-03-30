const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.querySelector('.score');

let score = 0;
let canJump = true;

const jump = () => {
  if (!canJump) return;
  mario.classList.add('jump');
  canJump = false;

  setTimeout(() => {
    mario.classList.remove('jump');
    canJump = true;
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
  
  if (pipePosition <= 50 && pipePosition > 0 && marioPosition < 50) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "sad.webp"
    mario.style.width = '70px'
    mario.marginLeft = '50px'

    clearInterval(loop);

  }
}, 10);

document.addEventListener("keydown", jump);
