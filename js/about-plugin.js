// Stats Counter
// Stats var
let stats = document.querySelector(".find");
let ourNumber = document.querySelectorAll(".find .number-box .number span");
let started = false; // function started ? no .. to run function one

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2500 / goal);
}

window.onscroll = function () {
  // Stats Numbers
  if (window.scrollY >= stats.offsetTop - 300) {
    if (!started) {
      ourNumber.forEach((num) => startCount(num));
    }
    started = true;
  }
};



