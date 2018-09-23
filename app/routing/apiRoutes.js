// Require values
  var path = require("path");
  var friendsArray = require("../data/friends");


// Routes
// =============================================================


module.exports = function(app) {

// Retrieves all the data about friends that will be compared and analyzed
app.get("/api/friends", function(req, res) {
    res.json(require("../data/friends"));
  });
  
// Actually performing the match comparison and storing data in FriendsArray
app.post("/api/friends", function(req, res) {

  // New survey results should be stored here
    friendsArray.push(req.body);

  // Storing the newest survey reults for comparison and analyses
    var newFriend = req.body;
  
  // Function to retrieve the best match for the user based upon data in newFriend
     findBestMatch(newFriend, function(matchData){
      res.json(matchData);
     })
  });
};

// This function actually performs the comparison and decides best match based on bestMatchDifference
function findBestMatch(newFriend, callback) {

  // Will need to store the results here
  var bestMatch;
  var bestMatchDifference;

  // Compares the user's survey results against each record in FriendsArray
  friendsArray.forEach(ele => {
      var totalDifference = 0;
     
      // Takes the scores in each array from each record in FriendsArray
      // to find the difference and totalDifference will be used to calculate best match
      ele.scores.forEach((e, i)=> {
        var scoreDifference = e - newFriend.scores[i];
        totalDifference += Math.abs(scoreDifference);
      });

     
      // Need to determine best match based on comparisons
      if( bestMatchDifference ) {
          if(totalDifference < bestMatchDifference) {
            bestMatchDifference = totalDifference;
            bestMatch = ele;
          }
      } else {
        bestMatchDifference = totalDifference;
        bestMatch = ele;
      }


  });

  // Sends the best match results to the DOM
  callback(bestMatch);

}
