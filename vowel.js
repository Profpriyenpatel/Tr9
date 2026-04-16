var expr = require("express");
var app = expr();

app.use(expr.static("../public"));

app.get("/login",(req,res,next)=>{
    console.log(req.query);
    res.set("content-type","text/html");
    res.write("<center><h1>Welcome " + req.query.name + "</h1>");
    res.write("<center><h1> Your Password is " + req.query.password + "</h1>");
    res.write("<center><h2>Your message id is " + req.query.message+ "</h2>"); 
    res.write("<h3>You can Find vowel in message by clicking</h3><a href='/message'>Message</a></center>");
    a=req.query.message
    next();
})
app.get("/login",(req,res)=>{
    res.send()
}
)
app.get("/message",(req,res)=>{
   res.set("content-type","text/html");
   res.write("<center><h2>Vowel in Your message id : " + a + "</h2>"); 
    const string =a
    const vowels = ["a", "e", "i", "o", "u"]
    function countVowel(str) {
        let count = 0;
            for (let letter of str.toLowerCase()) {
            if (vowels.includes(letter)) {
                count++;
            }
        }
        return count
    }
    const result = countVowel(string);
    res.write(`${result}`);
    res.send()
})
app.listen(5121,()=>
{
    console.log("server start");
});
