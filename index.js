//import the pets array from data.js
  //you can also require 
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 3000; //changed the port to 3000, 8080 was not loading 

//middleware
app.use(express.static('public'))

// GET - / - returns homepage
  //set the get to /, like the home page
  //send the index.html
app.get('/', (req, res) => {
    res.send("./index.html")
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World, Welcome to Block 31!');
});

// get all pets from the database
  //set the response to send the pets
  //make sure you are requiring the data from data.js
app.get('/api/v1/pets', (req, res) => {
   res.send(pets);
});

// get pet by owner with query string      
    //set owner to req.query
    //console log the owner 
    //send the response to pet
    app.get('/api/v1/pets/owner', (req, res) => {
        const {owner} = req.query
        console.log(`Getting the pets owner, ${owner}`) 
    
        // find the pet in the pets array
        const pet = pets.find(pet => pet.owner === owner);
    
        // send the pet as a response
        res.send(pet)
    });

// get pet by name
    //deconstruct name
    //request params
    //respond send, pet
app.get('/api/v1/pets/:name', (req, res) => {
    const {name} = req.params

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response 
    res.send(pet)
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;