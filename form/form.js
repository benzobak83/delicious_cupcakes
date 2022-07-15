function buttonClickId() {
    document.getElementById("i" + id).classList.remove("activate");
    name_product = document.querySelector(".select-title").value;
    let foods = document.querySelectorAll(".foods");
    for (let i of foods){
        if(i.innerHTML == name_product) {
            id = i.getAttribute("id");
            console.log(id);
        }
    }
    price =  document.getElementById(id).getAttribute("price");
    document.getElementById("i" + id).classList.add("activate");
    document.querySelector(".price-value").innerHTML = price;
    document.querySelector(".input-price").value = price;


    
}


let url =(window.location.href);
let reg = /.+id=/;
let id = url.split(reg);
id = id[1];


 

document.addEventListener("DOMContentLoaded", function(event) {
let price =  document.getElementById(id).getAttribute("price");
document.querySelector(".price-value").innerHTML = price;
document.querySelector(".input-price").value = price;

document.getElementById(id).setAttribute("selected", "");
document.getElementById("i" + id).classList.add("activate");

let select = document.querySelectorAll(".select-title");
console.log(select);

for(let i of select) {
    i.addEventListener("change", buttonClickId);
}

});