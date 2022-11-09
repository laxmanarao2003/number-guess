let userinp=document.getElementById("userinp");
let guessednbr=document.getElementById("guessednbr");
let guesses=document.getElementById("guesses");
let comments=document.getElementById("comments");
let guessbtn=document.getElementById("guessbtn");
let emoji=document.getElementById("emoji");
let count=0;

let randomnum=Math.floor(Math.random()*20)+1;


guessbtn.addEventListener("click",()=>{
   count+=1;
   let val=userinp.value;
   if(val==""){
      comments.innerHTML="Invalid Number";
      guesses.innerHTML=count;
      emoji.style.visibility="hidden";
      userinp.focus();
   }
   else if(val>20){
      userinp.value="";
      comments.innerHTML="You gave more than 20";
      emoji.style.visibility="hidden";
      guesses.innerHTML=count;
      userinp.focus();
   }
   else if(val<1){
      userinp.value="";
      comments.innerHTML="You gave less than 1";
      emoji.style.visibility="hidden";
      guesses.innerHTML=count;
      userinp.focus();
   }
   else if(val==randomnum)
   {
      guessednbr.innerHTML=val;
      guesses.innerHTML=count;
      (count<3)?comments.innerHTML="Your Guess is too high ":comments.innerHTML="Yeah you won it! ";
      emoji.style.visibility="visible";
   }
   else{
      userinp.value="";
      guesses.innerHTML=count;
      comments.innerHTML="Your Guesss is wrong";
      emoji.style.visibility="hidden";
      userinp.focus();
   }
});
