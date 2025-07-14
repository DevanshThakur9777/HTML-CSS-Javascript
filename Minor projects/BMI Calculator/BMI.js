  let form=document.querySelector("#form");
  let result = document.querySelector("#result");
  let lessBmi=document.querySelector("#lessBmi");
  let normalBmi=document.querySelector("#normalBmi");
  let overWeightBmi=document.querySelector("#overWeightBmi");
  let p=document.querySelector("p");
  let bmi;

  form.addEventListener("submit",(evt)=>{
  evt.preventDefault();

  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let btn = document.querySelector("button");

     if(weight==="" && height===""){
    result.innerHTML="Please Enter Height And Weight";
   }

   else if(isNaN(height) || height<0 || height===""){
    result.innerHTML=`This Is Invalid Height : ${height}`;
   }
   
  else if(isNaN(weight) || weight<0 || weight===""){
    result.innerHTML=`This Is Invalid Weight : ${weight}`;
   }
  

   else{
    result.innerHTML=`Your BMI Is : ${height*weight}`;
     bmi=(weight/2)/(height/100);
   }

    userWeight();
 
  })
let userWeight=()=>{
    
  if(bmi<18.6){

    overWeightBmi.innerHTML="";
    normalBmi.innerHTML="";
    lessBmi.innerHTML= bmi.toFixed(2);
    lessBmi.style="color:red; font-size:1.5rem; font-weight:bolder";
  }

  else if (bmi>18.6 && bmi<24.9){
     overWeightBmi.innerHTML="";
    lessBmi.innerHTML="";
      normalBmi.innerHTML= bmi.toFixed(2);
      normalBmi.style="color:green; font-size:1.5rem; font-weight:bolder";


  }
  else if(bmi>24.9){
     lessBmi.innerHTML="";
    normalBmi.innerHTML="";
       overWeightBmi.innerHTML=bmi.toFixed(2);
        overWeightBmi.style="color:green; font-size:1.5rem; font-weight:bolder";

  }
}
  