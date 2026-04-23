let topDiv = document.getElementById("top-div");

let bottomDiv = document.getElementById("bottom-div");

function mngColor(event) {
  let isLight = true;
      
      //determine if light is on or off   
  if(isLight) document.body.style.backgroundColor = "black" ;
  else document.body.style.backgroundColor = "white"; 
  

  if(isLight) document.body.style.color = "white";
  else document.body.style.color = "black";
  
  
  if(isLight) bottomDiv.innerHTML = "<p>dark mode on</p>";
  else bottomDiv.innerHTML = "<p>dark mode off</p>"

  isLight = !isLight;
  
  
      //Change bckground color to black and to white
      
      }
