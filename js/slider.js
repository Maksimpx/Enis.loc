var ImageIndex = 0;
var myImage = document.getElementById("mainImage");
var imageArray = [
"/images/thumbs/thumb1.jpg",
"/images/thumbs/thumb2.jpg",
"/images/thumbs/thumb3.jpg",
"/images/thumbs/thumb4.jpg",
"/images/thumbs/thumb5.jpg",
"/images/thumbs/thumb6.jpg",
"/images/thumbs/thumb7.jpg",
"/images/thumbs/thumb8.jpg",
"/images/thumbs/thumb9.jpg",
"/images/thumbs/thumb10.jpg",
"/images/thumbs/thumb11.jpg",
"/images/thumbs/thumb12.jpg",
];
function changeImage(){
	myImage.setAttribute("src",imageArray[ImageIndex]);
	ImageIndex++;
	if (ImageIndex >= imageArray.length) {
		ImageIndex= 0;
	}
	
}

var intervalHendle = setInterval(changeImage,5000);

myImage.onclick = function() {
	clearInterval(intervalHendle);
}

