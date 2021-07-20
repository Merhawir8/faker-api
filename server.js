const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');


// User_class
class User {
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

// Company class
class Company {
    constructor(){
        this._id = faker.datatype.number();
        this.name = faker.name.firstName();
            //street
        this.streetAddress = faker.address.streetAddress();
            //city
        this.cityName = faker.address.cityName();
        
            //state
        this.state = faker.address.state();
            //zipCode
        this.zipCode = faker.address.zipCode();
            //country
        this.country = faker.address.country();
    }
}


// Make a get request to see a particular page
app.get("/api/users/new", (req, res) => {
    res.json(new User);
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company);
})

// Create an api route "/api/user/company" that returns 
// both a new user and a new company

app.get("/api/user/company", (req,res) => {
    res.json({user: new User, company: new Company});
})



// For our server to start
app.listen(port, () => console.log(`Running on port ${port} !!`));
