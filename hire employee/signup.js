document.querySelector("form").addEventListener("submit",signup);
let arr=JSON.parse(localStorage.getItem("info"))||[];
function signup(event){
  event.preventDefault();
  let enteremail=document.querySelector("#email").value;
  let enterpass=document.querySelector("#password").value;
  let obj={enteremail,enterpass};
  arr.push(obj);
  if(enteremail==""){
    alert("please enter the email");
  }else if(enterpass==""){
    alert("please enter the password");
  }else{
  localStorage.setItem("info",JSON.stringify(arr));
  alert("Sign up Successful");
  }
  document.querySelector("#email").value="";
  document.querySelector("#password").value="";
}