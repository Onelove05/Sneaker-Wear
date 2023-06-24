let input = document.querySelector(".form-search-input");
let btn = document.querySelector(".btn-icon");
let parent = document.querySelector(".form-search");

btn.addEventListener("click", () => {
    parent.classList.toggle("active");
    input.focus();
});