var expr = require("express");
var app = expr();
app.use(expr.static("../css"));
app.use(expr.static("../html",{index:'1.html'}));

app.get("/calc",(req,res,next)=>{
    res.set("content-type","text/html");
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
    if ((n1>0) && (n2>0)) {
        if(req.query.formula == "addition"){
            a = n1+n2;
            res.write("<h1>Addition is : " + a + "</h1>");
        }
        else if(req.query.formula == "subtraction"){
            s = n1-n2;
            res.write("<h1>Subtraction is : " + s + "</h1>");
        } 
        else if(req.query.formula == "multi"){
            m = n1*n2;
            res.write("<h1>Multiplication is : " + m + "</h1>");
        } 
        else if(req.query.formula == "div"){
            d = n1/n2;
            res.write("<h1>Division is : " + d + "</h1>");
        }
        else{
            res.write("<h1>You have not selected any formula.</h1>");
        }
    }else{
        res.write("<h1>Please enter the valid number/s.</h1>");
    }
    res.send()
})
app.listen(6012);
