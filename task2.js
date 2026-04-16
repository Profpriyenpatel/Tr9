var express = require("express");
var app = express();

// Serve your HTML file (place it as 2.html in same folder)
app.use(express.static(__dirname, { index: "a.html" }));

app.get("/login", (req, res) => {
    res.set("content-type", "text/html");

    let msg = req.query.message || "";

    // 🔹 Split by whitespace only
    let words = msg.trim().split(/\s+/);


    let vowelCount = (msg.match(/[aeiou]/gi) || []).length;
    let charCount = (msg.match(/[a-z]/gi) || []).length;


    res.write("<h2>Split Output:</h2>");
    words.forEach(w => res.write(w + "<br>"));

    res.write(`<h3>Total Characters: ${charCount}</h3>`);
    res.write(`<h3>Total Vowels: ${vowelCount}</h3>`);

    res.send();
});

app.listen(5122, () => {
    console.log("Server running on http://localhost:5122");
});
