let modal = document.getElementsByClassName("modal-bg");
let modalBtn = document.getElementsByClassName("modal-btn");
let closeBtn = document.getElementsByClassName("close-icon");
let body = document.querySelector("body");
let funcs = [];

function Modal(num) {
    return function() {
        // Modal on
        modalBtn[num].addEventListener("click", function() {
            modal[num].style.display = "block";
            body.style.overflow = "hidden";
        });
        
        // Modal off
        closeBtn[num].addEventListener("click", function() {
            modal[num].style.display = "none"; 
            body.style.overflow = "visible";
        });
    };
};

for(let i = 0; i < modalBtn.length; i++) {
    funcs[i] = Modal(i);
};
   
for(let j = 0; j < modalBtn.length; j++) {
    funcs[j]();
};