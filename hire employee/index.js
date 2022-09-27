document.querySelector("form").addEventListener("submit",hire);
let count=0;
let salarycount=0;

function hire(event){
    event.preventDefault();
    let entername=document.querySelector("#name").value;
    let enterrole=document.querySelector("#role").value;
    let enterdepart=document.querySelector("#department").value;
    let entersalary=document.querySelector("#salary").value;
    let enteremail=document.querySelector("#email").value;
    let enterexperience=document.querySelector("#experience").value;
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=entername;
    let td2=document.createElement("td");
    td2.innerText=enterrole;
    let td3=document.createElement("td");
    td3.innerText=enterdepart;
    let td4=document.createElement("td");
    td4.innerText=entersalary;
    let td5=document.createElement("td");
    td5.innerText=enteremail;
    let td6=document.createElement("td");
    td6.innerText=enterexperience;
    let td7=document.createElement("td");
    if(enterexperience>=0&&enterexperience<=5){
    td7.innerText="Junior";
    }
    else if(enterexperience>=6){
        td7.innerText="Senior";
        }
    let td8=document.createElement("td");
    td8.innerText="Fire";
    td8.addEventListener("click",fired);
    function fired(event){
        event.target.parentNode.remove();
        salarycount-=Number(entersalary);
        document.querySelector("#sal").innerText=salarycount;
        count--;
        document.querySelector("#emp").innerText=count;
    }
    td8.style.backgroundColor="red";
    td8.style.color="white";
    td8.style.fontWeight="bold";
    td8.style.cursor="pointer";
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    if(entername==""||enterdepart==""||enteremail==""||enterexperience==""||entersalary==""
    ||enterrole==""){
        alert("please enter all the details");
    }else{
        document.querySelector("tbody").append(row);
        count++;
    salarycount+=Number(entersalary);
    document.querySelector("#sal").innerText=salarycount;
    document.querySelector("#emp").innerText=count;
   document.querySelector("#name").value="";
    document.querySelector("#role").value="";
    document.querySelector("#department").value="";
    document.querySelector("#salary").value="";
    document.querySelector("#email").value="";
    document.querySelector("#experience").value="";
    }   

}