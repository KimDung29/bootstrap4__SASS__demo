let footer = document.querySelector(".footer__p");
let closeIcon = document.querySelector(".fa-times");
let menu = document.querySelector(".navbar__menu");
let smallNavigation = document.querySelector(".sidleMenu");
let learnMoreBtn = document.querySelector(".learnMore__Btn");
let currentDate = document.querySelector(".currentDate")
let currentTime =  document.querySelector(".currentTime");



let d = new Date();
footer.innerHTML = `&#169; ${d.getFullYear()} Powered by Kim. All Rights Reserved.`;
currentDate.innerHTML = `${d.getFullYear()} / ${d.getMonth() + 1} / ${d.getDate()}`

setInterval(() => {
    const d = new Date();
    currentTime.innerHTML = d.toLocaleTimeString();
}, 1000);

// Hoặc có thể dùng add/ remove class
closeIcon.addEventListener("click", () => {
 smallNavigation.style.width = "0";
})

menu.addEventListener("click", () => {
 smallNavigation.style.width = "200px";
})

setInterval(() => {
    learnMoreBtn.classList.toggle("show__effect");
}, 1000);

