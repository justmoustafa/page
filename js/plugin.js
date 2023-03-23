var getStartLanding = document.querySelector(".landing .learn a");
var getStartUpperNav = document.querySelector(".header .upper-bar .info .start");
var about = document.querySelector(".about");

getStartLanding.onclick = () => window.scrollTo(0, about.offsetTop);
getStartUpperNav.onclick = () => window.scrollTo(0, about.offsetTop);


// Start Show List in Small Page
let listIcon = document.querySelector("nav .container > i ");
let list = document.querySelector("nav .main-links");
// console.log(listIcon)

listIcon.onclick = function(){
  if(list.classList.contains("ListActive")) {
    this.classList = "fa-sharp fa-solid fa-bars"
    list.classList.remove("ListActive")
    list.col
  }
  else {
    this.classList = "fa-solid fa-xmark"
    list.classList.add("ListActive")
  }
}

// Start class Active on links
let mainLinks = document.querySelectorAll(".header .main-links li a");


mainLinks.forEach((e) => 
e.onclick = function(){
    mainLinks.forEach((e) => 
    e.classList.remove("active")
    );
  e.classList.add("active");
});
