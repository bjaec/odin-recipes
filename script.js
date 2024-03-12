// script.js

document.addEventListener("DOMContentLoaded", function() {
    const recipesDropdown = document.getElementById("recipes-dropdown");
    const dropdownList = document.getElementById("dropdown-list");

    recipesDropdown.addEventListener("click", function() {
        dropdownList.classList.toggle("active");
    });
});
