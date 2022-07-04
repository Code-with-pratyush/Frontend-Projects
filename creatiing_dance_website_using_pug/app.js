const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use( '/static',express.static('static'));//serving static files
app.use(express.urlencoded());

app.set('view engine', 'pug');//setting templete engine as pug
app.set('views',path.join(__dirname,'views'));//setting up the views directory

app.get("/", (req,res) =>{
    res.status(200).render('home.pug');
});
app.get("/contact", (req,res) => {
    res.status(200).render('contact.pug');
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});