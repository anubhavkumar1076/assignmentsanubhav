document.querySelector("form").addEventListener("submit",todo);
let count=0;
function todo(event){
    event.preventDefault();
let entertask=document.querySelector("#task").value;
let enterpriority=document.querySelector("#select").value;
let row=document.createElement("tr");
let td1=document.createElement("td");
td1.innerText=entertask;
let td2=document.createElement("td");
td2.innerText=enterpriority;
if(enterpriority=="HIGH"){
    td2.style.backgroundColor="red";
}else{
    td2.style.backgroundColor="green";
}
let td3=document.createElement("td");
td3.innerText="Delete";
td3.style.fontWeight="bold";
td3.style.cursor="pointer";
td3.addEventListener("click",del);
function del(event){
    event.target.parentNode.remove();
    count--;
    document.querySelector("#total").innerText=count;
}
row.append(td1,td2,td3);
document.querySelector("tbody").append(row);
count++;
document.querySelector("#total").innerText=count;
}