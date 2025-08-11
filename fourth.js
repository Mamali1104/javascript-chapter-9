let inp =document.querySelector("#text");
let p =document.querySelector("p");


inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});

let btn = document.querySelector("button");
btn.addEventListener("click",function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "green";

});