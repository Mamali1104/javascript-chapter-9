let p  = document.querySelector("p");
let h1  = document.querySelector("h1");
let h3 = document.querySelector("h3");



p.addEventListener("click",function () {
    console.log("parah was clicked.");
}); 

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function() {
    console.log("mouse inside div");
});

//this in event  listener

function changeColor () {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";

}
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
btn.addEventListener("click",changeColor);

// let btn = document.querySelector("button");
// btn.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });


// p.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });


// h1.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });


// h3.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });