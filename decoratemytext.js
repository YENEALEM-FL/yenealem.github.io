

alert("Hello, world!");

function textFormat() {

document.getElementById("ta1").style.background="blue";
document.getElementById("ta1").style.color="red";
document.getElementById("ta1").style.weight=normal;
document.getElementById("ta1").style.textDecoration ='none';
document.getElementsByTagName("body")[0].style.backgroundColor="white";

}
var newSize;
function FormatInTimerInterval(){
	
	var currSize=window.getComputedStyle(document.getElementById("ta1")).fontSize;
	newSize=parseInt(currSize)+2+"pt";
	document.getElementById("ta1").style.fontSize=newSize;
	//document.getElementsByTagName("body")[0].style.backgroundColor="white";
	textFormat();
	
	}
function setFormatInTimerInterval(){

	setInterval(FormatInTimerInterval,500);
	}



function newTextFormat() {
	if(document.getElementById("chkbx").checked== true){
		document.getElementById("ta1").style.weight="bold";
		document.getElementById("ta1").style.background="yellow";
		document.getElementById("ta1").style.color="green";
		document.getElementById("ta1").style.textDecoration = 'underline';
		document.getElementsByTagName("body")[0].style.backgroundImage="url('images/background.png')";
		
	}
	else{
		textFormat();
		}
	}

