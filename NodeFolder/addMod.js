module.exports.add = function (req,res,vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    var prod = parseInt(vals.first) * parseInt(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h3> Result of computations(Addition and Multiplication)</h3>");
    res.write("<p>The sum is: ");
    res.write(String(sum)+"<br>");
    res.write("<p> The product is:")
    res.write(String(prod));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };