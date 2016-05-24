'USE STRICT'
const express = require('express');
const app = express();


app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

               app.get("/taco/:index", function(req, res){
                var index = req.params.index;
                var selection = tacos[index] || "Sorry no tacos for you"
                res.send( selection );
              });

              app.get("/burger/:index", function(req, res){
                var index = req.params.index;
                var selection = burgers[index] || "Sorry no burgers for you"
                res.send( selection );
              });
              app.get('/', function(req, res){
                var hello = console.log('HELLO');
                res.send(hello);
              });
/******************************************************/
const right_number = 7;
app.get("/pick-a-number/:number", function (req, res) {
    var number = req.query.number;
    if (number === right_number) {
        res.send("Yay you got it!");
    } else if (number > right_number){
      res.send('Getting colder');
    } else {
      res.send("I'm freezing over here");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/")
});
