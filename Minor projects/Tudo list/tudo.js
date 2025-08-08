 let inputTxt =document.querySelector("#input");
 let addBtn =document.querySelector(".addBtn");
 let removeBtn= document.querySelector(".container");
          var count = 0;

  function addTask(task){ //in which user create a task & add in the container
     if(task.value==null || task.value===" "){
        alert("please add a task");
     }
     
        else{

            let div = document.createElement("div");
            div.classList.add("allTask");
            let input = `<span> 
           <input type="checkbox" id="task${count}">
           <label for="task${count}" class="label">${task.value} </label>
           </span>`;
           count++;
           let removeBtn = `<button class="removeBtn"> <i class="fa-solid fa-circle-xmark"></i> </button>`;  
           div.innerHTML = `${input} ${removeBtn}`
           document.querySelector(".container").append(div);
           task.value = " ";

         }
 }

       addBtn.addEventListener("click",()=>{ //when clicked addbtn then it called 2 function.
         addTask(inputTxt);
         removeBtnFunction();
      });

      function removeBtnFunction(){ //when user click this button then the task is remove it
        let allBtn= document.querySelectorAll(".removeBtn");
     allBtn.forEach(btn=>{      
        btn.addEventListener("click",()=>{                  
          btn.parentElement.remove();
           });    
         });
             
      }
