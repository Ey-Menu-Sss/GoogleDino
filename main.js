let again = document.querySelector(".pos");
again.style.display = "none";
let kaktus = document.querySelector(".kaktus");
let kaktus2 = document.querySelector(".kaktus2");
let dino = document.querySelector(".dino");

let max = document.querySelector(".maxScore")
let and = document.querySelector(".and")
let score = document.querySelector(".score")
and.textContent = "/"
let b;
max.innerHTML = localStorage.getItem("bla")
let y = 0;

function move() {
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      dino.setAttribute("id", "dino");
    }
    setTimeout(() => {
      dino.removeAttribute("id");
    }, 500);
  });
}
function game() {
  move();

  let right1 = -10;
  let right2 = -450;
  setInterval(() => {
    
    if(again.style.display === "block"){
      score.innerHTML = 0;
      localStorage.setItem("bla", b)
      if(localStorage.getItem("bla") > y){
        max.innerHTML = localStorage.getItem("bla");
        y = max.innerHTML;
      }

      // if(b > localStorage.getItem("bla")){
      // }
    }
    else{
      score.innerHTML++;
      b = score.innerHTML;

    }
  }, 100);

  setInterval(() => {
    let dinoB = parseInt(
      window.getComputedStyle(dino).getPropertyValue("margin-bottom")
    );
    if (
      (right1 <= 840 && right1 >= 770 && dinoB <= "30") ||
      (right2 <= 840 && right2 >= 770 && dinoB <= "30")
    ) {
      again.style.display = "block";
      setTimeout(() => {
        dino.removeAttribute("id");
      }, 0);
      again.addEventListener("click", (e) => {
        again.style.display = "none";
        right1 = -10;
        right2 = -450;
      });
    } else {
      right1 += 1.5;
      kaktus.style.right = `${right1}px`;
      if (right1 >= 900) {
        right1 = 0;
      }

      right2 += 1.5;
      kaktus2.style.right = `${right2}px`;
      if (right2 >= 900) {
        right2 = 0;
      }
    }
    // console.log(kaktus.style.right);
    // console.log(kaktus2.style.right);
  }, 1);
}
game();
