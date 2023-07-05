
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
  keyPressed = e.keyCode
  console.log(keyPressed)

if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			
			document.getElementById("d1").innerHTML="Você pressionou uma tecla do alfabeto";
			console.log("alphabet key");
		}
		else if(keyPressed >=48 && keyPressed<=57)
		{
			
			document.getElementById("d1").innerHTML="Você pressionou um número";
			console.log("Number key");
		}
		else if(keyPressed >=37 && keyPressed<=40)
		{
		
			document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional";
			console.log("Arrow Key");
		}
		else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27))
		{
			
			document.getElementById("d1").innerHTML="Você pressionou ctrl/esc/alt";
			console.log("special key");
		}
	else{
		document.getElementById("d1").innerHTML="Você pressionou um simbolo ou outra tecla";
	}
}