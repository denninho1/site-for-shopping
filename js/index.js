const searchBtn = document.querySelector("#icon-search");
const boxSearch = document.querySelector(".search-container .inputbox")
const closeSearch = document.querySelector(".search-container #close-search")

searchBtn.addEventListener("click", () => {
    boxSearch.classList.add("active");
});

closeSearch.addEventListener("click", () => {
    boxSearch.classList.remove("active")
})


const menuBtn = document.querySelector('#menu-header');
const navbar = document.querySelector('.menu-links');

menuBtn.addEventListener('click', () =>{
    navbar.classList.toggle('active')
});

