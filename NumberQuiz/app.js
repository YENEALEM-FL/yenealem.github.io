const express = require("express");
const app = express();
const port = 3000;
const urlencodedParser = express.urlencoded({ extended: false });

//set view engine

app.set("view engine","pug");

const questions=[
    {"qid":1, "sequence":"3, 1, 4, 1, 5"},
    {"qid":2, "sequence":"1, 1, 2, 3, 5"},
    {"qid":3, "sequence":"1, 4, 9, 16, 25"},
    {"qid":4, "sequence":"2, 3, 5, 7, 11"},
    {"qid":5, "sequence":"1, 2, 4, 8, 16"}
];
const answers=[9,8,36,13,32];
app.get("/",function(req,res){
    res.render('quiz',{questions:questions[0], step:0,score:0})
});

app.post("/",urlencodedParser,function(req,res){
    console.log(req.body);
    let data=req.body;
    let step=parseInt(data.step);
    let score=parseInt(data.score);
    let answer=parseInt(data.answer);
    
    if(answer==answers[step]){
        ++score;
    }
    if(step==questions.length-1){
        res.render("result",{step:0,score:score});
    }
    
    else{
        ++step;
        res.render("quiz",{questions:questions[step],step:step,score:score})

    }
});

app.listen(port, () => {
    console.log('listening on port ${port}!')
});