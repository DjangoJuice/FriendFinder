


var path = require("path");
var friendsArray = require("../data/friends");

//console.log(friendsArray[0].q1);

// Routes
// =============================================================


module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(require("../data/friends"));
  });
  
app.post("/api/friends", function(req, res) {
    //friendsArray.push(req.body);\

    var newFriend = req.body;
  

     findBestMatch(newFriend, function(matchData){
      res.json(matchData);
     })
    
    // for (var friend in friendsArray) {
    //   res.json(req.body.q1 - friendsArray[friend].q1)
    // }

    //Find the best match here from friendsArray
    // for (var friend in friendsArray) {
    //   for (i=0; i < 9; i++) {
    //   (friendsArray[friend].qi - req.body.qi)
    //   }
    // }

  

    //res.json(friendsArray[0]);
  });
};

function findBestMatch(newFriend, callback) {

  var bestMatch;
  var bestMatchDifference;

  friendsArray.forEach(ele => {
      var totalDifference = 0;
     
      ele.scores.forEach((e, i)=> {
        var scoreDifference = e - newFriend.scores[i];
        totalDifference += Math.abs(scoreDifference);
      });

     

      if( bestMatchDifference ) {
          if(totalDifference < bestMatchDifference) {
            bestMatchDifference = totalDifference;
            bestMatch = ele;
          }
      } else {
        bestMatchDifference = totalDifference;
        bestMatch = ele;
      }

      console.log("This is the total difference " +totalDifference + "for " + ele.name );

  });

  console.log("This is the best match " + bestMatch.name + "And this is the total difference " + bestMatchDifference);

  callback(bestMatch);

}
