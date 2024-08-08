// // I have a few software ideas that I'd like to work on, including a traffic prediction application. An application that provides the best method to navigate your roadways by analyzing previous and current traffic data, as well as meteorological data, to anticipate future traffic patterns and then provide the user with an estimated journey time and optimal route.
// I'm looking forward to learning more about software, machine learning, artificial intelligence, cyber security, and how technology works in our daily lives.
// I already have experience from doing many projects at home during and after my studies, but I believe this course will help me develop my talents and apply them effectively.
// My other passions include photography, videography, and photo and video editing, which I publish on Instagram. I've been playing cricket since I was in fourth grade, and I volunteer.

let MenuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

MenuIcon.onclick = () => {
    MenuIcon.classList.toggle("bx-x")
    navbar.classList.toggle('active')
}