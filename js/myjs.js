function viewContent() {
    
	this.querySelector(".dop-content").style.display="flex";
}
function deleteContent() {
	this.querySelector(".dop-content").style.display="none";
}
function viewContent1() {
    
	this.querySelector(".dop-content").style.display="flex";
	this.querySelector(".img-fluid").classList.add('activate_opacity');
}
function deleteContent1() {
	this.querySelector(".dop-content").style.display="none";
    this.querySelector(".img-fluid").classList.remove('activate_opacity');
}


function buttonClick() {
     name_product = (this.parentNode.parentNode.parentNode.parentNode.querySelector(".title-hover").innerHTML);
     price_product = (this.parentNode.parentNode.parentNode.parentNode.querySelector(".main_price").innerHTML);
	 id_product = (this.parentNode.parentNode.parentNode.parentNode.querySelector(".title-hover").getAttribute("id"));
    
} 

document.addEventListener("DOMContentLoaded", function(event){
let content = document.querySelectorAll(".thumb");

	for (let x of content) {
		x.addEventListener("mouseover", viewContent)
		x.addEventListener("mouseout", deleteContent)
	}

    let content2 = document.querySelectorAll(".title-hover");

	for (let x of content2) {
        
		x.parentNode.addEventListener("mouseover", viewContent1)
		x.parentNode.addEventListener("mouseout", deleteContent1)
	}

let buttons = document.querySelectorAll(".main_btn1");
    
    for(let i of buttons) {
        
        i.addEventListener("click", buttonClick)
    }
    

   
})