
/*******************************************************************************
* interface for class Pictures
*******************************************************************************/
	
function Pictures()
{
  /* state */
  this.current = 0;

  /* methods */
  this.listOfImages = listOfImages; /* virtual */
  this.photoFileName = photoFileName;
  this.numberPhotos = numberPhotos;
  this.currentPhotoNumber = currentPhotoNumber;
  this.advancePhoto = advancePhoto;
  this.retreatPhoto = retreatPhoto;
  this.insertImages = insertImages;
}

/*******************************************************************************
* implementation of the methods of class Pictures
*******************************************************************************/

function photoFileName(which)
{ 
    return this.listOfImages()[which];
} 

function numberPhotos()
{ 
    return this.listOfImages().length;
} 

function currentPhotoNumber()
{ 
    return this.current;
} 

function advancePhoto()
{ 
    this.current += 1;
    if (this.current >= this.numberPhotos())
    {
        this.current = 0;
    }
    return this.current;
} 

function retreatPhoto() 
{ 
	this.current -= 1;
    if (this.current < 0)
    {
    	this.current = this.numberPhotos()-1;
    }
    return this.current;
} 
	
function insertImages()
{
	var img_elements = "";
	for (var i = 0; i < this.numberPhotos(); i++)
	{	
	    img_elements += 
	        '<img class=all-images alt="" src="images/' 
	        + this.photoFileName(i) + '" />';
	}
    return img_elements;
}
 
