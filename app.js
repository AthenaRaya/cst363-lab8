const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js


//routes
app.get("/", function(req, res){
    
    //console.log(req.query.q1);
    // let score = 0;
    // let f1, f2, f3, f4, f5;
    // f1 = f2 = f3 = f4 = f5 = "Wrong!";
    
    // if (req.query.q1.toLowerCase() == "sacramento") {
    //     score += 20;
    //     f1 = "You got it!";
    // }
    //res.render("index", {"score": score, "feedback1":f1});
    
    res.render("index");
    
} );


app.get("/gradeQuiz", function(req,res){ // using express to grade the quiz
    
    //console.log(req.query.q1);
    let score = 0;
    let f1, f2, f3, f4, f5;
    f1 = f2 = f3 = f4 = f5 = "Wrong!";
    
    if (req.query.q1.toLowerCase() == "sacramento") {
        score += 20;
        f1 = "You got it!";
       
        
    }
    if (req.query.q2 == "ms") {
        score += 20;
        f2 = "You got it!";
    }
  if (req.query.q3a =="checked" , req.query.q3b =="checked" ,req.query.q3b != "checked" ,req.query.q3c != "checked"){
     
        score += 20; //increment score. 
       f3 = "you got it";
   }
  
   if (req.query.q4d  =="checked"){
       
     
        score += 20; //increment score. 
       f3 = "you got it";
   }
    
    res.send( {"score": score, "feedback1":f1, "feedback2":f2, "feedback3":f3, "feedback4": f4}); // display feedback 
    
    
})

app.listen("8081","0.0.0.0",function(){
  console.log("Express Server is running...");
});

//running server
//app.listen(process.env.PORT, process.env.IP, function(){
 //   console.log("Express server is running...");
//})