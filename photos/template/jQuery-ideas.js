
/*******************************************************************************
* jQuery functions - wait until page has loaded
*******************************************************************************/

$(document).ready(function(){

  /* When this operator action occurs on any of these elements */
  $("button").dblclick(function(){
      $("#download").hide();          /* then mutate these other elements */
      $("div.frame-tall1").toggle();  /* then mutate these other elements */
  }); 

  $("div#frame-photooo").mouseenter(function(){
      alert("You entered the frame!");
  });

  $("h1#prev").click(function(){
      prevPhoto();
  });

  });

/*
<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

<button>Click me</button>
*/
	

