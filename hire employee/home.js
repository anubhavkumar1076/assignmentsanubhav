document.querySelector("form").addEventListener("submit",login);
let databack=JSON.parse(localStorage.getItem("info"));
function login(event){
    event.preventDefault();
  let x=document.querySelector("#email").value;
  let y=document.querySelector("#password").value;
  for(i=0;i<databack.length;i++){
    let mail=databack[i].enteremail;
    let pswd=databack[i].enterpass;
    if(x==""||y==""){
        alert("please enter the email and password");
    }
    else if(mail!=x){
        alert("Wrong Email Entered");
        document.querySelector("#email").value="";
    }else if(pswd!=y){
        alert("Wrong password Entered");
        document.querySelector("#password").value="";
    }else{
        alert("Login Successful")
    }
}
document.querySelector("#email").value="";
document.querySelector("#password").value="";
}