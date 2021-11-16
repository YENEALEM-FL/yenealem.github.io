const express = require('express');
const cors = require('cors');
const entries = require("./word.js");
const path = require('path');


const app = express();
app.use(express.static(__dirname));
const urlencodedParser = express.urlencoded({ extended: false })
app.use(cors({
    origin: '*'
}));
app.get('/', urlencodedParser, function(req,res){
    res.sendFile(path.join(__dirname, "/dict.html"));
});

app.get('/api', urlencodedParser, function(req,res){
    entries.findByWord(req.query.keyword, (err, data) => {
        if (err) {
            res.send([]);
        } 
        else res.send(data);
      });
});

app.listen('3000', () => {
    console.log(`listening on port 3000!`)
});