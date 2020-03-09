// const express = require(‘express’);
// const app = express();
// app.get("/", (request, response) => {
// response.sendStatus(200);
// });
app.listen(process.env.PORT);
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express(); 
const Datastore = require('nedb');


app.use(express.static('public'));
app.use(express.json());

// const database = new Datastore('database.db');
// database.loadDatabase(); 
//autoload - don't have to wait for callback function
const db = new Datastore({filename: "tequila.db", autoload: true});
db.loadDatabase();

//from the script.js 
//prints out all pizza toppings with unique ID(see in terminal) and it inserts into toppings.db file 
const content = fs.readFileSync("drinks.json");
let drinksObj = JSON.parse(content);

let tequilaDrinks = drinksObj.drinks;  //this is equal to drinks 
//drinksObj is drinks.json object
//tequilaDrinks is a JSON RRAY from the drink.json drinks field
//recipe is each JSON entry in tequila drinks
// tequilaDrinks = tequilaDrinks.map((recipe) => {
//     return {
//         popularDrink: 
//     };
// }); 

// db.insert(tequilaDrinks, (err, docs) =>{
//     // console.log(docs); 
// }); 

// function getDrink() {
//     const contents = fs.readFileSync(path.join(__dirname, "./data/drinks.json"));
//     const obj = JSON.parse(contents);
//     return obj;
//   }


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
  });

//request to get the data?
app.get('/getdrinks', (req, res) => {
    db.find({strDrink: /Tequila/}, (err,data) => {
        if (err) {
            response.end();
            //get out of here
            return; 
        }
        res.json(data);
    }); 
});

app.get('/getegg', (req, res) => {
    db.find({strIngredient: /Egg white/}, (err,data) => {
        if (err) {
            response.end();
            //get out of here
            return; 
        }
        res.json(data);
    }); 
});

app.get('/getsugar', (req, res) => {
    db.find({strIngredient: /Powdered sugar/}, (err,data) => {
        if (err) {
            response.end();
            //get out of here
            return; 
        }
        res.json(data);
    }); 
});

// app.get("/drinks", (req, res) => {
//     const drinks = getDrink();
//     res.json(drinks);
//     console.log(drinks);
// });


// app.post('/api', (request, response) => {
//     console.log('I got a request');
//     const data = request.body;
//     const timestamp = Date.now(); 
//     data.timestamp = timestamp;
//     //insert data into database.db
//     database.insert(data);
//     //send an object back with data 
//     response.json(data);
// }); 

app.listen(3000, () => {
    console.log("Server listening on http:localhost:3000")
});
