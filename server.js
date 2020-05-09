let express = require('express');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let reservation = [];
let waitlist = [];

app.get('/', function(req, res){
  
})