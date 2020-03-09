//JUST FOR REFERENCE - EVERYTHING ON SERVER.JS
//did this first, can delete once have database 
const fs = require('fs');
const Datastore = require("nedb");

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

//Recomment in to create new database 
// db.insert(tequilaDrinks, (err, docs) =>{
//     console.log(docs); 
// }); 