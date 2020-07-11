const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://trackdb:CHC@2019_track@ds123834.mlab.com:23834/heroku_0qmbljtf", {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiRoutes"));
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
