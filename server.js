
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let reservation = [];
let waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(reservation);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

// post
app.post("/api/tables", function(req, res) {

    var newReservation = req.body;

    
     
        
        if (reservation.length < 5){
            reservation.push(newReservation)
            return res.json(reservation);
        } else {
            waitlist.push(newReservation)
            return res.json(true);
        }
    
    console.log(reservation);

    res.json(newReservation);
});














app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});

