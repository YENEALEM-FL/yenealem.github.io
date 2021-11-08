$(document).ready(function(){
    
    let win = true; 
    let start = false;
    $("div.boundary").mouseover(turnRed);
    $("div#start").click(reset);
    $("div#end").mouseover(winMessage);
    $("#maze").mouseleave (handlemouseout);
    $("#status").text("Click the \"S\" to begin. ");
    
    function turnRed(){
        $("div.boundary").addClass("youlose");
        handlemouseout();
	win=false;
        }
    function winMessage(){
        if(start){
            if(win){
                alert("You win!");
 		$("#status").text("You won!");
   
            }
            else{
               alert("Sorry, you lost!");
	       $("#status").text("Sorry, you lost!");
              
            }
            start = false;
	    win = false;
        }
        
    }
    function reset(){
        win = true;
        $("div.boundary").removeClass("youlose");
        $("#status").text("Move mouse pointer through maze to win");
        start = true;
        
    }
    function handlemouseout(){
            if(start){
                $("div.boundary").addClass("youlose");
                $("#status").text("Sorry, you lost!");
                win = false;
            }
    }
});