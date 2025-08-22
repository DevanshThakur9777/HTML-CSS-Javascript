  let prompt = document.querySelector("#prompt");
   let submitBtn = document.querySelector("#submit");
   let imgBtn = document.querySelector("#image");
   let img = document.querySelector("#image img");
   let mainBox = document.querySelector(".main-container");
   let openChat = document.querySelector(".openChatBot");


  let imgInput = document.querySelector("#image input")
  let chatContainer = document.querySelector(".chat-container");
  let api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB0OdgA3-LCKjED2z2kupHpydDA14set_4";

  let user = {
    message:null,
    file:{
      mime_type:null,
      data: null   //it recive the data in "base64" format
    }
   }

     async function generateResponse(aiChatBox) {
      let text = aiChatBox.querySelector(".ai-chat-area") //we access ai-chat-area(p) because we remove processing content API after response
       let RequestOption = {
     method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "contents": [
        { role: "user", parts: [{ "text": user.message},(user.file.data?[{"inline_data":user.file}]:[])  // if file is present then it will show the response
            ]   
          }]
        }) 
      }

      try {
               let response = await fetch(api_url, RequestOption);
           let data = await response.json();

           let apiResponse =  data.candidates[0].content.parts[0].text.trim();     
     text.innerHTML = apiResponse; //here change p content into API response
      } catch (error) {
         console.log(error);
         
      }
      finally{
             chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})   // It scroll automatic
             img.src = `https://i.pinimg.com/474x/52/8d/c9/528dc91d4837ee4c7f4ef111c2289b1f.jpg`;  //it add img icon
            img.classList.remove("choose")
            user.file = {}
      }
     }
    function createChatBox(HTML, classes){  //it accept html content and class name
      let div = document.createElement("div");
      div.innerHTML = HTML;
      div.classList.add(classes);
      return div;
    }

    function handleChatResponse(message){
       user.message = message;  //assign user message 
      let HTML = `<span class="fa-solid fa-user-secret" id="userImage" width="10%"></span>
          <div class="user-chat-area">  
             ${user.file.data?`<img src = "data:${user.file.mime_type};base64,${user.file.data}" class="chooseImg"/>` : ""}
             <br>
                         ${user.message}

          </div>` //it is a user chat area in which show user message & image
          prompt.value = " ";
          let userChatBox = createChatBox(HTML, "user-chat-box")  //it create user side chat box and assign in userChatbx variable
          chatContainer.appendChild(userChatBox);

          chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})   // It scroll chat page automatic 
          setTimeout(()=>{  //it create ai side chat box and give the response after 6 milliseconds later
           let HTML = `<i class="fa-solid fa-robot" id="aiImage" width="10%"></i>
             <div class="ai-chat-area">
             <p id="load" width="10%">Processing....</p>
 </div>`
             let aiChatBox = createChatBox(HTML, "ai-chat-box");
             chatContainer.appendChild(aiChatBox);
             generateResponse(aiChatBox)
          },500)
    }


   prompt.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        handleChatResponse(prompt.value);
    }
   });

   submitBtn.addEventListener("click",()=>{
    handleChatResponse(prompt.value)
   })
  

    imgInput.addEventListener("change",()=>{ //when we pick any file then it run a change event
       const file = imgInput.files[0];
         if(!file) return // if file is null
          let reader = new FileReader(); //this is obeject of file reader
          reader.onload=(e)=>{  
                      
            let base64String = e.target.result.split(",")[1]  // it convert the data into bas64 format & it split the string based on (,) on the first index
                user.file = {
      mime_type:file.type, //file name
      data: base64String   //it recive the data in "base64" format
       }
             img.src= `data:${user.file.mime_type};base64,${user.file.data}`  // when user choose any image in the file then the image show on the img icon
            img.classList.add("choose")
    }
      reader.readAsDataURL(file)
    })
    imgBtn.addEventListener("click",()=>{
      imgBtn.querySelector("input").click();  //when user click img icon then it open a file for select the images

    })


      //Close chatBox
let closeBtn = document.querySelector("#closebtn img");
closeBtn.addEventListener("click", () => {
    mainBox.classList.add("closeChat");   // chat page hide
    openChat.style.display = "flex";      // welcome message & open button show
});


  //open chatBox
let openBtn = document.querySelector(".open");
openBtn.addEventListener("click", () => {
    openChat.style.display = "none";      // welcome message hide
    mainBox.classList.remove("closeChat"); // chat page show
});
   
