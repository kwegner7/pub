
/*******************************************************************************
* interface for class Doc
*******************************************************************************/
function constructDoc()
{
	/* attributes */
	this.photos = new Pictures();
	
	/* construction */
	this.initializePhotoImgElements();
}

function Doc()
{
	/* methods */
    this.constructDoc = constructDoc;
    this.elementById = elementById;
    this.initializePhotoImgElements = initializePhotoImgElements;
    this.refreshDomElements = refreshDomElements;
}


/*******************************************************************************
* implementation of the methods of class Doc
*******************************************************************************/
function elementById(id)
{ 
    return window.document.getElementById(id);
}

function initializePhotoImgElements()
{
    this.elementById("frame-photo").innerHTML = this.photos.insertImages();
}

function refreshDomElements()
{    
    /* show the current photo number */
	var current = this.photos.currentPhotoNumber()+1;
    this.elementById("page").innerHTML = 
        "PAGE " + (current) + "<br>OF " + this.photos.numberPhotos();
        
    /* prepare the image file name for possible download */
    var image = this.elementById("download");
    image.href = "images/" + this.photos.photoFileName(current);
    image.download = "Photo_" + (current+1) + ".jpg";
} 

