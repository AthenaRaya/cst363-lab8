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
    let f1, f2, f3, f4, f5, f6,f7, f8, message;
    f1 = f2 = f3 = f4 = f5 = f6 =f7 =f8 = "Wrong!";
    
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
  
   if (req.query.q4 == "Rhode Island"){
       
      // console.log(req.query.q4);
    
        score += 20; //increment score. 
       f4 = "you got it";
     }
    if(req.query.q5choice== "seal2"){
      score += 20; //increment score. 
       f5 = "you got it";
    }
    if(req.query.q6 == "50"){
       score += 20; //increment score. 
       f6 = "you got it";
    }
   if (req.query.q7 == "d") {
        score += 20;
        f7 = "You got it!";
    }
     if (req.query.q8c =="checked" , req.query.q8d !="checked" ,req.query.q8a != "checked" ,req.query.q8b != "checked"){
     
        score += 20; //increment score. 
        f8 = "you got it";
   }
  
  
    res.send( {"score": score, "feedback1":f1, "feedback2":f2, "feedback3":f3, "feedback4": f4, "feedback5": f5,"feedback6": f6,"feedback7": f7, "feedback8": f8 }); // display feedback 
    
    
})

// app.listen("8080","0.0.0.0",function(){
//   console.log("Express Server is running...");
// });

//running server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})