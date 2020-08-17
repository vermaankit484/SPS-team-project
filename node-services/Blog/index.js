var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8000,
    articleRoute=require("./routes/articles");
    methodOverride = require('method-override'),
    

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use("/articles", articleRoute);

app.get("/",function(req,res){
    res.render("profile");
});

// PORT
app.listen(port, function () {
  console.log(`Running at ${port}`);
});
