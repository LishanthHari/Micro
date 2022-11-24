const express = require('express'); 
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 1000;
// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
//app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {  res.send("Hello World");});
// Require employee routesconst employee
//const check_inRoutes1 = require('./route/route_api_1')// using as middleware
// const expensesRoutes2 = require('./routes/routes_api_2')// using as middleware
// const expensesRoutes3 = require('./routes/routes_api_3')// using as middleware
//app.use('/api/h1/check_in', check_inRoutes1)
// app.use('/api/h2/expenses', expensesRoutes2)
// app.use('/api/h3/expenses', expensesRoutes3)

// listen for requests
app.listen(port, () => {  
    console.log(`Server is listening on port ${port}`);
});