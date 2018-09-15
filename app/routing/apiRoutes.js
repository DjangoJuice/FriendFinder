


var path = require("path");
var friendsArray = require("../data/friends");


// Routes
// =============================================================


module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(require("../data/friends"));
    //res.json(path.join(__dirname, "../data/friends.js"));
  });
  
app.post("/api/friends", function(req, res) {
    friendsArray.push(req.body);
    res.json(true);
    //res.json(require(path.join(__dirname, "../data/friends.js")));
  });
};