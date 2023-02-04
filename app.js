const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})) // This is needed to parse thru the body of my html

app.use(express.static("public")) // tells express to also use my static files(ie styles.css)
let items = ["Buy Food", "Cook Food", "Eat Food"]; // Array for the utems to be pushed too
let workItems = []; 
app.set('view engine', 'ejs'); // Needed for ejs, tells app to use it

app.get("/", (req, res) => {

    let today = new Date(); // Variable to hold a new instance of the Date() object
    
    let options = // variable for how to format the date method
    {
        weekday: "long",
        day: "numeric",
        month: "long"
    }


    let day = today.toLocaleDateString("en-US", options) // method to format and get a day

    res.render("list", {listTitle: day, newListItems: items})

})

app.post("/", (req, res) => 
{
    let item = req.body.newItem;

    items.push(item) // we created the items array above so that it is global. And we push each item into this array

    res.redirect("/") // method for redirecting to the home route everything within this post
})

app.get("/work", (req, res) => 
{
    res.render("list", {listTitle: "Work List", newListItems: "workItems"})
})
app.post("/work", (req, res) => {
    res.sendFile
})

app.listen(3000, () => {
    console.log("Server started on port 3000...")
})