
/*******************************************************************************
* jQuery functions - wait until page has loaded
*******************************************************************************/

$(document).ready(function(){

  $("h1#prev-photo").click(function()
  {
      doc.photos.retreatPhoto();
      var current = doc.photos.currentPhotoNumber()+1;
      $("img.all-images").hide();  
      $("img:nth-of-type("+current+")").show();   
      doc.refreshDomElements();
  });

  $("h1#next-photo").click(function()
  {
      doc.photos.advancePhoto();
	  var current = doc.photos.currentPhotoNumber()+1;
      $("img.all-images").hide();  
      $("img:nth-of-type("+current+")").show();   
      doc.refreshDomElements();
  });

});
	

