var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.image.formURL('BirthdayImage.jpg'), function (Img){
        block_image_object.scaleTowidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0,
        });
        canvas.( block_image_object);
    }
	
	
}

function playSound(){
x.play();	
}
