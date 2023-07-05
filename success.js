// dismiss button
let dismiss = document.getElementById("dismiss");


dismiss.onclick = ()=>{

    window.location.href = "index.html";
}

let sentTo = document.getElementById("sent-to");
sentTo.textContent= window.localStorage.getItem("email");
// dismiss button