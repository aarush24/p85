canvas=document.getElementById("myCanvas")
ctx=canvas.getcontext("2d")

greencar_width=75;
greencar_height=100;

greencar_x=5;
greencar_y=225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	
background_imgTag = new Image(); 
background_imgTag.onload = uploadBackground; 
background_imgTag.src = background_image; 


background_imgTag = new Image(); 
background_imgTag.onload = uploadgreencar; 
background_imgTag.src = greencar_image; 

}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);	
	

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y <=0);

{
greencar_y=greencar_y-10;
console.log("when up arrow pressed x = " +greencar_x + "| y = " +greencar_y);
uploadbackground();
uploadgreencar();
}
}

function down()
{
	if(greencar_y <=500);

{
greencar_y=greencar_y-10;
console.log("when up down pressed x = " +greencar_x + "| y = " +greencar_y);
uploadbackground();
uploadgreencar();
	//Define function to move the car downward
}
}
function left()
{
	if(greencar_y <=0);

{
greencar_y=greencar_y-10;
console.log("when up left pressed x = " +greencar_x + "| y = " +greencar_y);
uploadbackground();
uploadgreencar();
	//Define function to move the car left side
}
}
function right()
{
	f(greencar_y <=700);

{
greencar_y=greencar_y-10;
console.log("when up right pressed x = " +greencar_x + "| y = " +greencar_y);
uploadbackground();
uploadgreencar();
	//Define function to move the car right side
}
}