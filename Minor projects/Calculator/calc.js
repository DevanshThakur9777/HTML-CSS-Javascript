let btns=document.querySelectorAll("button");
 let input=document.querySelector("#input");
  let string="";
  let btn;
   let arrbtn=Array.from(btns);
  arrbtn.forEach(btn => {
    btn.addEventListener("click",()=>{


      if(btn.innerHTML==="AC"){
        clear(btn);
      }
      
      else if(btn.innerHTML=="="){
        add(btn);    
      }
      
      else if(btn.innerHTML==="DEL"){
        del(btn);
      }
      
      else{
             holdBtn(btn);
      }
      
    })
    
  });

  holdBtn=(btn)=>{
     string=string + btn.innerHTML;
     input.value=string;
  }


    clear=(btn)=>{
     string="";
     input.value=string;
  }


  add=(btn)=>{
    string=eval(string);
    input.value=string;
  }



  del=(btn)=>{
   string=string.substring(0,string.length-1);
        input.value=string;
  }