let MenuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

MenuIcon.onclick = () => {
    MenuIcon.classList.toggle("bx-x")
    navbar.classList.toggle('active')
}

let rmbtn = document.getElementById("rmbtn")
let para = document.getElementById("read-more")

rmbtn.onclick = () => {
    para.innerHTML = txt
}