   let randomNumber=(parseInt(Math.random()*100 +1));
   
   const submit=document.querySelector("#subt");
   const userInput=document.querySelector("#guessField");
   const guessSlot=document.querySelector(".guesses");
   const remaining=document.querySelector(".lastResult");
   const lowOrhi=document.querySelector(".lowORHigh");
   const startover=document.querySelector(".resultParas");

   const p=document.createElement("p");

   let prevGuess=[];
   let numGuess=1;
   let playGame=true;

  if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();

        const guess=parseInt(userInput.value)//store user input in guess variable
        validateGuess(guess)  //call validate funcation and pass guess in the function
    })
  }


   function validateGuess(guess){ 
    /*for checking the user input Like::-
     not greater than 100,smaller than 1.
     guess is not a aplphabate.
     its most important*/

     if(isNaN(guess)){
        alert(`Please Enter a Valid Number${guess}`);
     }else if(guess<1){
        alert(`Please Enter a Number More Than 1 ${guess}`);
     }else if(guess>100){
        alert("Please Enter a  Number less than 100")
     }
     else if(guess===''){
        alert("Please Enter a Valid Number")
     }
     else{
        prevGuess.push(guess);  //store all user input in prevGuess arry by using push
     }
     if(numGuess===11){
        // if no. greater than 11
        //  means user guess is last guess then game is over::-
        let l="defeated";
                endGame(l);
     }
     else{
      displayGuess(guess);
       checkGuess(guess)// for know guess was right or wrong
     }

   }

   function checkGuess(guess){ 
    // print user guess low or heigh and when user guess right random No. then print you win & show the random number

   if(guess===randomNumber){
       // if user guess is right answer then they win & call end function
       let w="win";
        endGame(w);
   }else if(guess<randomNumber){
     lowOrhi.innerHTML= `<h1 class="lowNumber"> Number is Low high </h>`//user low guess
   }else if(guess>randomNumber){
   lowOrhi.innerHTML= `<h1 class="highNumber"> Number is TOO high </h>`//user heigh guess
    }
   }


    //In which clean the input box, update a Array(prevGuess) & update remaining guess
   function displayGuess(guess){

        userInput.value=' ';
        guessSlot.innerHTML+=`${guess},`
        numGuess++;
        remaining.innerHTML=`${11-numGuess}`

   }

   // end game function
   function endGame(result){
      if(result=="win"){
           lowOrhi.innerHTML= `<h1 class="sameNumber">you guess right ${randomNumber} Number</h>`
      }
      else if(result=="defeated"){
            lowOrhi.innerHTML=`<h1 class="sameNumber"> Random number Was ${randomNumber}</h1>`;
      }
       submit.disabled=true;
      userInput.value=' ';
      userInput.disabled=true;
      remaining.innerHTML=" ";
      playGame=false;
      newGame();
   }

 
   //New Game function
   function newGame(){
     let count= 1;

     let finsihTimer = setInterval(()=>{
     if(count===4){
     clearInterval(finsihTimer);//stop the time //after 4se
     lowOrhi.innerHTML=" "; 
     playGame=true 
     submit.disabled = false;
     userInput.disabled=false;

     submit.value="submit";
     randomNumber=(parseInt(Math.random()*100 +1));
     prevGuess=[];
     numGuess=1;
     guessSlot.innerHTML='';
     remaining.innerHTML=`${11-numGuess}`;
      
         }else{
            submit.value=`Restart ${count}`;
            count++;
         }
       },3000)
     
   }


