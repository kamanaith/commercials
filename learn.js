let asideBar = document.querySelector(".aside-bar")

let hammenuicon = document.querySelector(".fas.fa-bars.hamburger")

let navmenu = document.querySelector(".nav-wrapper")

let cancelicon = document.querySelector('.fas.fa-multiply')

console.log(1)

hammenuicon.addEventListener('click' , () =>{
    asideBar.classList.toggle('active');
}
)

cancelicon.addEventListener('click', () =>{
    asideBar.classList.toggle('active');
})
