  let timerDisplay = document.querySelector(".timeDisplay");
  let startBtn=document.getElementById("startbtn");
  let stopBtn=document.getElementById("stopbtn");
  let resetBtn=document.getElementById("resetbtn");

  let msec="0";
  let secs="0";
  let mins="0";
  let timerId=null;

   startBtn.addEventListener("click",()=>{
    if(timerId !== null){
      clearInterval(timerId);
    }
   timerId = setInterval(startTimer,10);
   });
  stopBtn.addEventListener("click",()=>{
    clearInterval(timerId);
  });

  resetBtn.addEventListener("click",()=>{
    clearInterval(timerId);
    timerDisplay.innerHTML=`00:00:00`;
    msec=secs=mins="0";
  });

    function startTimer(){
       msec++;
       if(msec==100){
        msec=0;
        secs++;
         if(secs==60){
           secs=0;
           mins++;
         }
       }
       let msecString =msec<10?`0${msec}`:msec;
       let minsString =mins<10?`0${mins}`:mins;
       let secsString =secs<10?`0${secs}`:secs;

       timerDisplay.innerHTML=`${minsString} : ${secsString} : ${msecString} `;


    }