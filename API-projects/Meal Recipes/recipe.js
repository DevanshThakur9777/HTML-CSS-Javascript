  let searchbtn = document.querySelector(".searchbtn");
  const recipeContainer = document.querySelector(".recipe-container");
  const searchBox = document.querySelector(".searchBox");
  let recipeDetailContent = document.querySelector(".recipe-detail-content");
  let recipeCloseBtn = document.querySelector(".recipe-close-btn");




  
  const fetchRecipes = async(query)=>{
    recipeContainer.innerHTML = `<h2>Fetching Recipes</h2>`;
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    recipeContainer.innerHTML = " ";
    response.meals.forEach(meal =>{ //all meals present here

        // search meal & showing on the page in a card

        
     const recipeDiv = document.createElement(`div`);
     recipeDiv.classList.add(`recipe`);
     recipeDiv.innerHTML = `
     <img src=${meal.strMealThumb}>  
     <h3>${meal.strMeal}</h3>
     <p><span>${meal.strArea}</span> Dish</p>
     <p>Belongs to <span>${meal.strCategory}</span>Category</p>`//here all meal information are present
        
//----------- end a card code------------



        //create a view Recipe button & inset Recipe details help of OpenRecipePopUp
      let button = document.createElement("button");
      button.textContent="View Recipe";
      recipeDiv.appendChild(button)
     recipeContainer.appendChild(recipeDiv);

     button.addEventListener("click",()=>{
        openRecipePopup(meal);
     })
 
      //------------end veiw Recipe & function---------------
     
    });
  }

     //here all meal Information are present

     
    let openRecipePopup = (meal)=>{
     recipeDetailContent.innerHTML= `
     <h2 class="recipename">${meal.strMeal}</h2>
     <h3>Ingreadents</h3>
     <ul class="ingredientsList">${fetchIngreadents(meal)}</ul>
      <div class="recipeInstrutions">
       <h3>Instructions: </h3>
       <p>${meal.strInstructions}</p>
     </div>
     `
     recipeDetailContent.parentElement.style.display= "block";

    }
  
  //-----------end meal Information--------------

       //here fetch Ingreadents, measurement Instructions using function
    let fetchIngreadents=(meal)=>{
      let IngreadentsList = "";
      for(let i=1; i<=20;i++){
            const Ingreadent=meal[`strIngredient${i}`];
        if(Ingreadent){
            const measure = meal[`strMeasure${i}`];
            IngreadentsList +=`<li>${Ingreadent} ${measure}`
          }
           else{
           break;
          }      
      }
              return IngreadentsList;  
    }

    //-----------end fetch Ingreadents and measurement Instructions-------------------

     recipeCloseBtn.addEventListener("click",()=>{
      recipeDetailContent.parentElement.style.display="none";
     })

  searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let searchInput = searchBox.value.trim();
     if(searchInput===Number){
      recipeContainer.innerHTML=`<h1>plese type a right meal</h1>`;
      return;
    }
    fetchRecipes(searchInput);
  });

  