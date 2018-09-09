// Routes
// =============================================================

// 
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends.js"));
  });
  
app.post("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends.js"));
  });