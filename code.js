
console.log("width:" + window.innerWidth);

console.log("height:" + window.innerHeight);


let mobileSvg = document.getElementById("mobile-svg");
let desktopSvg = document.getElementById("desktop-svg");

let rightContainer = document.getElementById("right");

let main = document.getElementById("container");
let success = document.getElementById("success");


function EmailInvalid(){
   
    email.style.border = "2px red solid";
    email.style.backgroundColor = "rgb(253, 200, 200)";
    email.style.color="red";
    error.style.display = "inline";
}





// console.log(rightContainer.innerHTML);


// validation error
let error = document.getElementById("error");

let form = document.querySelector("form");
let email = document.getElementById("email");
form.addEventListener(("submit"), (e)=>{
    
    //got this regular expression from w3resource.com 
    //simply checks for all invalid inputs
    
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    
        console.log("email is invalid");
        e.preventDefault();
        EmailInvalid();
    }
    else{
        console.log("email is valid");
        window.localStorage.setItem("email",email.value);
        e.preventDefault();
      window.location.href = "./success.html"
    }
})








