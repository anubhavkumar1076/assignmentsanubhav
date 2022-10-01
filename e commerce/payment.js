let box=document.createElement("div");
let bag=document.createElement("INPUT");
bag.setAttribute("type","number");
bag.setAttribute("id","place");
let exp=document.createElement("INPUT");
exp.setAttribute("type","number");
exp.setAttribute("id","place1");
let cvv=document.createElement("INPUT");
cvv.setAttribute("type","number");
cvv.setAttribute("id","place2");
let btn=document.createElement("button");
btn.innerText="Submit";
btn.setAttribute("id","submit");
box.append(bag,exp,cvv,btn);
document.querySelector("#container").append(box);
document.getElementById("place").placeholder="Enter the card number";
document.getElementById("place1").placeholder="Enter the expiry date";
document.getElementById("place2").placeholder="Enter the cvv";
let enternumber=document.getElementById("place");
let enterexp=document.getElementById("place1");
let entercvv=document.getElementById("place2");
document.querySelector("#submit").addEventListener("click",credit);
function credit(event){
    event.preventDefault();
    if(entercvv==""||enternumber==""||enterexp==""){
        alert("please enter all the deatils");
    }else{
        window.location.href="otp.html";
    }
}

