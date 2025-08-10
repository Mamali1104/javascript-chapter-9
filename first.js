// onclick

let btns = document.querySelectorAll("button");

for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;      //cant perform multiple function..
    btn.onmouseenter = function () {        //onmouseenter
        console.log("u enter a button");

    };
    console.dir(btns);
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function() {
        console.log("u double clicked me");
    });

}
function sayHello() {
    alert("Hello");
}
function sayName () {
    alert("bubu dudu");
}


// btn.onclick = function() {
//     alert("button was clicked!");
// }






