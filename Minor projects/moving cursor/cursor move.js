/* let box=document.querySelector(".container");
    let cursor=document.querySelector(".crsr");

    
    box.addEventListener("mousemove",(e)=>{    

       cursor.style.top=e.y+"px";
       cursor.style.left=e.x+"px";

    });

    console.log("heloo");*/

     //second code


     var elem=document.querySelectorAll(".elem");
      

   elem.forEach((val)=>{
        

      val.addEventListener("mouseenter",()=>{
         val.childNodes[3].style.opacity=1;
      });

            val.addEventListener("mouseleave",()=>{
         val.childNodes[3].style.opacity=0;
      });

      val.addEventListener("mousemove",(dets)=>{
         val.childNodes[3].style.left=dets.x+"px";
           val.childNodes[3].style.top=dets.y+"px";

      })


   })