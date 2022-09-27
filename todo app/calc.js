let bag="";
let num=document.querySelectorAll("#keys>div");
for(i=0;i<num.length;i++){
    num[i].addEventListener("click",mycalc);

}
    function mycalc(event){
        let press=event.target.innerText;
        if(press=="C"){
            document.querySelector("#display").innerText="";
            bag="";
        }else if(press=="="&& bag==""){
            document.querySelector("#display").innerText="";
        }else if(press=="="){
            let res=eval(bag);
            document.querySelector("#display").innerText=res;
        }else{
            bag=bag+press;
            document.querySelector("#display").innerText=bag;
        }
}
