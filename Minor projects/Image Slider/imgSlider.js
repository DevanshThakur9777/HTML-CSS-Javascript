 const sliders=document.querySelectorAll(".slide");
   console.log(sliders);
   
  let counter = 0;
  sliders.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`
  });

   const goNext = ()=>{
     if(counter<4) {
              counter++;
    slideImage();
   }
  }




   setInterval(()=>{
    if(counter===4){
      counter=-1;

    }else{
     goNext();
    ("else block");
    }
   },2500)


    //next Slide
    const goPerv = ()=>{
     if(counter>0){      
       counter--;
      slideImage();
     }
  }

  const slideImage = () =>{
    sliders.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter * 100}%)`
    })
  }

