function roll(){
    let numValue= document.querySelectorAll(".number")
   let num= Math.trunc(Math.random()*6+1);
   document.querySelector(".number").innerHTML=num;
}