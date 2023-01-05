let password=document.querySelector("#password").value;
let confirmPassword=document.querySelector("#confirmation").value;
const button=document.querySelector("button");
button.onclick=function checkPassword(){
  if(password.length !=0){
    if(password==confirmPassword){
        console.log("k");
    }
    else{
        console.log("m");
    }
  }else{
    return false;
  }
   
}