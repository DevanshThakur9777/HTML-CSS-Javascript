let txt = document.querySelector("#inputBox");
console.log(txt.value);

  let allInput = document.getElementsByName("format-option");
  allInput.forEach(function(e,index){    
    e.addEventListener("click",()=>{
        formatText(index);
    });
 });
 
  function formatText(index){ 
         console.log(index);
  
    if(txt.value==" "){
      document.getElementsByName("format-option")[index].checked = false;
      
    }else{
        switch(index){
            case 0: txt.value = txt.value.toUpperCase();break;
            case 1: txt.value = txt.value.toLowerCase();break;
            case 2: txt.value = capitalizeSentence(txt.value);break;
            case 3: txt.value = capitalizeWord(txt.value);break;
            case 4: txt.value = removeNumber(txt.value);break;
            case 5: txt.value = removePunctuation(txt.value);break;      
        }
     }
  }

  function capitalizeWord(str){
    let newString = removeExtraSpaces(str);
    let splitSentence = newString.split(" ");
        for(let i=0; i<splitSentence.length; i++){
           splitSentence[i] = splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1)
         }
         splitSentence = splitSentence.join(" ");
         return splitSentence;
        }

    function capitalizeSentence(str){
        let newString = removeExtraSpaces(str);
        let splitSentence = newString.split(". ");
         for(let i=0; i<splitSentence.length; i++){
             splitSentence[i] = splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1)
         }
           splitSentence = splitSentence.join(". ");
         return splitSentence; 
    }

    function removeExtraSpaces(str){
        let spaces = /\s+/g; 
      return str.replace(spaces,' ').trim();
    }

    function removePunctuation(str){
        let regex = /[!"#$%'()*,&-./:;<=>?@[\]^_`{|~}]/g;
        return str.replace(regex,' ');
    }

    function removeNumber(str){
        return str.replace(/[0-9]/g,' ');
    }
  

