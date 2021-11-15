module.exports.add = function (res,vals) {
     if(vals.operator=='addition'){
	   var result = parseInt(vals.first) + parseInt(vals.second);
	}
    else if(vals.operator=='subtraction'){
	   var result = parseInt(vals.first) - parseInt(vals.second);
	}
    else if(vals.operator=='multiplication'){
	   var result = parseInt(vals.first) * parseInt(vals.second);
	}
    else if(vals.operator=='division'){
	   var result =parseInt(vals.first) / parseInt(vals.second);
	}
    
    else{
	var result = "please enter a proper operator."; 
	}


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h3><i>" +" Result of " + vals.operator + " between " + parseInt(vals.first) + " and " + parseInt(vals.second) + ":</i><u>" +String(result) + "</u></h3>" );
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };