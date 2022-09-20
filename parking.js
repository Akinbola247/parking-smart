let park1 = document.querySelector(".park1");
 

let popup1 = document.querySelector(".one")



let buttons = Array.from(document.querySelectorAll('button'));




function myFunction() {
    var container = document.querySelector(".container");
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }
  
  
  function openpop(){
    popup1.classList.add("open-one");
  }

  function closeOne(){
    popup1.classList.remove("open-one");
    
    
  }
