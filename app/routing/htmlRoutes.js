var path = require("path");


// Routes
// =============================================================


module.exports = function(app) {
  
// Should only send users to the Survey page to answer questions
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

// Catch all route to send users to the home page
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};