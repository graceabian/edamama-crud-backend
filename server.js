const express = require("express"); // this import is for building rest api
const cors = require("cors"); // to enable CORS with various options
const app = express(); // creates express app
var corsOptions = {
  origin: "http://localhost:8081",
};

// The below three lines adds body parser & cors
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to edamama App." });
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDb Atlas!");
  });

require("./app/routes/product.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
