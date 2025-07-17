  
  const image = [
    ["https://www.jiomart.com/images/product/original/rvincgw8kg/royar-traders-shirt-shirts-men-s-cotton-shirt-men-s-spread-collar-shirt-regular-fit-men-s-shirt-men-s-casual-shirt-men-s-formal-shirt-stylish-men-s-shirt-trendy-men-s-shirt-men-s-shirt-for-office-green-xxl-product-images-rvincgw8kg-0-202408011859.jpg?im=Resize=(1000,1000)", "https://m.media-amazon.com/images/I/91V12ufIXRL._UY1100_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbxIC_LbvcjXfamMphm-yRarwpQPL-Tjx1g&s","https://www.blackstitch.in/cdn/shop/files/LTST_TRND_PL_BROWN_1_5333916d-e7f5-4b24-ad07-b834309650f0.webp?v=1727152908", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkB7tGjOiqEWn3m1EGhrj9EDKWol1LaNs-ZA&s"],//index [0][...4]=> it hold all clothes name
    
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSbK-cOH6k0jnVOiKpZyDqFIbdrhQfcXLkg&s", "https://m.media-amazon.com/images/I/71aslvftzeL._UY350_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qoAHqCmr_WQR3dblu3yv7WDJwlgtTLHzxg&s", "https://ad.kapoorwatch.com/content/images/product/T156.410.22.041.00-400.webp", "https://www.darveys.com/blog/wp-content/uploads/2024/05/worlds-most-expensive-watch-brands.jpg"],//index [1][...4]=> it hold all Watches name

     ["https://www.walkaroo.in/cdn/shop/files/3_e6e303ab-9323-405f-adc3-adde5d91761b.jpg?v=1740585734", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eAqxljTteybiscbJymwvzUIgJKvl--zF6bw&s", "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=", "https://karamonline.com/media/catalog/product/cache/509850b11aa2210ac1d2c31fec93d22f/f/s/fs232bl-swsamn-01.jpg"],//index [3][...3]=> it hold all footwears name
    
    ["https://img.freepik.com/free-photo/bag-hanging-from-furniture-item-indoors_23-2151073506.jpg?semt=ais_hybrid&w=740", "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D", "https://cdn.pixabay.com/photo/2015/11/20/03/53/package-1052370_640.jpg", "https://img.freepik.com/free-photo/small-purse-studio-still-life_23-2151046464.jpg?semt=ais_hybrid&w=740", "https://assets.lummi.ai/assets/QmWHDa1dvjbSPEznaKgjJYheCoEMsr2A7yCEwxDNtX31TX?auto=format&w=640","https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dwc9baf98d/images/Muse/Summer22/mothers-day/KOL/charles-keith-summer-22-mothers-day-kol-blog-07@2x.jpg"]//index [4][...5]=> it hold all bags name
  ];

   
   document.querySelectorAll(".filter-item").forEach((element, elementIndex)=>{
       element.addEventListener("click", ()=>{
         if(elementIndex !=0){
          showImagesFilterd(elementIndex);
         }
         else{
          showAllImages();
         }
       });
  });   

  //function to show images according to filter selected
  function showImagesFilterd(index){
    document.querySelector("#gallary-image-container").innerHTML = " ";//empty the previous images
     removeOtherFilterSelectedCSS();//it can remove other button style when it was not clicking

   document.getElementsByClassName("filter-item")[index].classList.add("filter-selected");//create a array & store all buttton then attached a class with the index number that is passed by user click

   for(let i=0; i<image[index-1].length; i++){   // it can itrate only choosen array index no. and give all the images inner indexs no one by one
    let newElement = document.createElement("div");//create a div 
    newElement.className = "gallary-item"; //add a className to the div
    let imageElement = document.createElement("img");//create a image tag
    imageElement.src=`${image[index-1][i]}`; //add source to the img tag one by one 
    newElement.appendChild(imageElement);
    document.querySelector("#gallary-image-container").appendChild(newElement);
    }
  }

   //function to show all images
   
   function showAllImages(){
    document.getElementById("gallary-image-container").innerHTML = " ";
     removeOtherFilterSelectedCSS();
      document.getElementsByClassName("filter-item")[0].classList.add("filter-selected");

   for(let i = 0; i<image.length; i++){//it rum on the outer array (0 to 3)index
       for(let j = 0; j<image[i].length; j++){ //it run in the inner array (each product)
           let newElement = document.createElement("div");
    newElement.className = "gallary-item";
    let imageElement = document.createElement("img");
    imageElement.src=`${image[i][j]}`;
    newElement.appendChild(imageElement);
    document.querySelector("#gallary-image-container").appendChild(newElement);    
       }
     }
   }

    
    //remove all previous styles from the button
   function removeOtherFilterSelectedCSS(){  
    let allFilters = document.getElementsByClassName("filter-item");//store all filter item classes
    for(let i = 0; i<allFilters.length; i++){
      allFilters[i].classList.remove("filter-selected");//remove each filter-selected class from the filter item
    }
   }

  window.onload = showAllImages();//it show all images  bydefault
 