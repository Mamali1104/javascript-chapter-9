// let inp = document.querySelector("button");
// inp.addEventListener("keydown",function(event) {
//     console.log("code = ", event.code);     //arrowup(u) arrowdown(d)  arrowleft(l) arrowright(r)
//     if(event.code === keyU) {
//         console.log("character moves upward");
//     }
//     else if(event.code === keyD) {
//         console.log("character moves downward");
//     }
//     else if(event.code === keyL) {
//         console.log("character moves left");
//     }
//     else if(event.code === ketR) {
//         console.log("character moves right");
//     }
// })



// //extracting form value

// let form  = document.querySelector("form");
// form.addEventListener("submit",function(event) {
//     event.preventDefault();
//     // alert("form submitted");
//     console.dir(form);


//     // let user = document.querySelector("#user");
//     // let password = document.querySelector("#password");

//     let user = this.elements[0];    //form.element[0]
//     let password = this.elements[1];


//     console.log(user.value);     //for getting value bcs innertext doestmot store data from user input
//     console.dir(password.value);


//     alert(`hi ${user.value},ur password is set to be ${password.value}`);
// });
let form =document.querySelector("form");
form.addEventListener("submit",function(event) {
    event.preventDefault();
});

let user =document.querySelector("#user");
user.addEventListener("change", function () {
    console.log("change event");
    console.log("final value = ",this.value);
});
user.addEventListener("input", function () {
    console.log("input event");
    console.log("final value = ",this.value);
});