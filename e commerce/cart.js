document.querySelector("button").addEventListener("click",function(event){
    window.location.href="index.html";
});

let product=JSON.parse(localStorage.getItem("data"))||[];
document.getElementById("total").innerText=product.length;
let totalprice=product.reduce(function (acc,el,i){
    return acc+Number(el.price);
},0);
document.getElementById("balance").innerText=totalprice;
product.map(function (el,i){
let box=document.createElement("div");
let product_img=document.createElement("img");
product_img.setAttribute("src",el.image_url);
let entername=document.createElement("h3");
entername.innerText=el.name;
let enterprice=document.createElement("p");
enterprice.innerText=el.price;
let btn=document.createElement("button");
btn.innerText="Remove";
btn.addEventListener("click",function(event){
    event.target.parentNode.remove();
    product.splice(i,1);
    localStorage.setItem("data",JSON.stringify(product));
    document.getElementById("total").innerText=product.length;
    window.location.href="cart.html";
});
box.append(product_img,entername,enterprice,btn);
document.querySelector("#container").append(box);
})
let checkout=document.createElement("div");
let tab=document.createElement("button");
tab.innerText="Proceed to Checkout";
tab.addEventListener("click",function(event){
    window.location.href="payment.html";
});
checkout.append(tab);
document.querySelector("pay").append(checkout);