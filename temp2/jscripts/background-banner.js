var myIndex = 0;
bgchanging();

    function bgchanging() 
    {
      var i;
      var x = document.getElementsByClassName("bg-banner");
      for (i = 0; i < x.length; i++) 
      {
        x[i].style.display = "none";  
      }

    myIndex++;
  
      if (myIndex > x.length) 
        {
          myIndex = 1
        }    
      x[myIndex-1].style.display = "block"; 

      setTimeout(bgchanging, 5000);
    }