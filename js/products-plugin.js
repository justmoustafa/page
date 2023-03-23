let listIcon = document.querySelector("nav .container > i ");
let list = document.querySelector("nav .main-links");
// console.log(listIcon)

listIcon.onclick = function(){
  if(list.classList.contains("ListActive")) {
    this.classList = "fa-sharp fa-solid fa-bars"
    list.classList.remove("ListActive")
  }
  else {
    this.classList = "fa-solid fa-xmark"
    list.classList.add("ListActive")
  }
}