// const sections = document.querySelectorAll(".section");
// const secBtns = document.querySelectorAll(".controlls");
// const secBtn = document.querySelectorAll(".control");
// const allSections = document.querySelector(".main-content");

// function pageTransition(){
//     for(let i=0; i<secBtn.length; i++){
//         secBtn[i].addEventListener("click", function(){
//             let currBtn = document.querySelectorAll(".active-btn");
//             currBtn[0].classList = currBtn[0].className.replace("active-btn", "");
//             this.className += " active-btn";
//         });
//     }

//     allSections.addEventListener("click", (e)=>{
//         const id = e.target.dataset.id;
//         if(id){
//             secBtns.forEach((btn)=>{
//                 btn.classList.remove("active");
//             });
//             e.target.classList.add("active");
//         }

//         sections.forEach((section)=>{
//             section.classList.remove("active");
//         });

//         const element = document.getElementById(id);
//         element.classList.add("active");
//     });
// }

// pageTransition();

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
