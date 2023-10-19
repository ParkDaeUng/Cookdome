let recipeBg = document.getElementsByClassName("recipe-modal-bg");
let recipeBtn = document.getElementsByClassName("recipe-modal-btn");
let recipeClose = document.getElementsByClassName("recipe-close-icon");
let recipeFuncs = [];

function Modal(num) {
    return function() {
        // Modal on
        recipeBtn[num].addEventListener("click", function() {
            recipeBg[num].style.display = "block";
            body.style.overflow = "hidden";
        });

        // Modal off
        recipeClose[num].addEventListener("click", function() {
            recipeBg[num].style.display = "none";
            body.style.overflow = "visible";
        });
    };
};

for(let i = 0; i < recipeBtn.length; i++) {
    recipeFuncs[i] = Modal(i);
};
   
for(let j = 0; j < recipeBtn.length; j++) {
    recipeFuncs[j]();
};