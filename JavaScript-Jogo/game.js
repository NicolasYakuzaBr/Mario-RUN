const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.querySelector('.score');

let canJump = true;
let score = 0;

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
  const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

  if (pipePosition <= 50 && pipePosition > 0 && marioPosition < 50) {
    alert(`Game over! Your score: ${score}`);
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "sad.webp"
    mario.style.width = '70px'
    mario.marginLeft = '50px'

    clearInterval(loop);
  }
  score++;
  scoreDisplay.textContent = score;
},60);

document.addEventListener("keydown", jump);
