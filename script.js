// script.js

document.addEventListener("DOMContentLoaded", function() {
    const recipesButton = document.getElementById("recipes-button");
    const recipesList = document.getElementById("recipes-list");

    recipesButton.addEventListener("click", function() {
        recipesList.style.display = (recipesList.style.display === "block") ? "none" : "block";
    });
});
