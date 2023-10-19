let link = document.getElementsByClassName("link");
let topBtn = document.getElementsByClassName("top-btn");

for(let i=0; i<link.length; i++) {
    link[i].addEventListener("click", function(e) {
        e.preventDefault();
        if(i==0) {
            window.scrollTo(0,0);
        }else if(i==1) {
            window.scrollTo(0,900);
        }else if(i==2) {
            window.scrollTo(0,4740);
        }else if(i==3) {
            window.scrollTo(0,7250);
        }else if(i==4) {
            window.scrollTo(0,9920);
        }else if(i==5) {
            window.scrollTo(0,12600);
        }
    });
};

topBtn[0].addEventListener("click", function() {
    window.scrollTo(0,0);
});
// document.addEventListener("scroll", function(){
//     let scrollY = document.documentElement.scrollTop;
//     console.log(scrollY);
// })