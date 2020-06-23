const express = require("express");

// routes from the Routes
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// start app and create port
const app = express();
const PORT = process.env.PORT || 3000;

//code to make api calls work
app.use(express.json());    //send and return json to api
app.use(express.urlencoded({ extended: true }));

//access to public folder to use css and all other assets and index
app.use(express.static("Public"));

//api routes for server to acess the index and notes htmls
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});