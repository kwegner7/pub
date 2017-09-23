
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

function elementById(id) { 
    return window.document.getElementById(id);
}

function initializePhotoImgElements()
{
    this.elementById("frame-photo").innerHTML = this.photos.insertImages();
}

function refreshDomElements() {
	var current = doc.photos.currentPhotoNumber();
	
	/* hide all except one photo */
    var selected_elements = window.document.getElementsByClassName("all-images"); 
    for (var i = 0; i < selected_elements.length; i++) {
    	if (i == current) {
    		selected_elements[current].removeAttribute("hidden"); }
    	else {
    	    selected_elements[i].setAttribute("hidden", "hidden"); }
    }
    
    /* show the photo number */
    this.elementById("page").innerHTML = 
        "PAGE " + (current+1) + "<br>OF " + this.photos.numberPhotos();
        
    /* prepare the image file name for possible download */
    var image = this.elementById("download");
    image.href = "images/" + this.photos.photoFileName(current);
    image.download = "Photo_" + (current+1) + ".jpg";
} 

