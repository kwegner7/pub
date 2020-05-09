
/*******************************************************************************
* entry points from the document
*******************************************************************************/
var doc = new Doc(); /* this is static */

function initialize() { 
	doc.constructDoc();
    $("img.all-images").hide();   
    $("img:nth-of-type(1)").show();   
    doc.refreshDomElements();
    /* window.alert("Photos Have Been Loaded"); */
} 




