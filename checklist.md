Checklist for the shopping list app

## Database
 * Create a database called `fs-react-shopping`
 * SQL to create the database table
    * Columns: name, displayImage, unit, quantity
 * Create a `database.sql` file and add the create table SQL
 * Add sample data with insert statements
 * Add insert statements to the `database.sql` file

## GET -- David
 * Create a GET route in the `groceries.router`
 * Test the GET route with Postman
 * Add useEffect and Axios GET to the List.jsx
 * Display items on the page with .map
    * Include buttons that will be used in the PUT
 * 

## POST  -- Michael
 * Add input fields to the page
 * Create a POST route in Form.jsx for adding shopping items
 * Create a POST route in the `groceries.router`
 * Test the POST route with Postman
 * 

## DELETE -- Padee
 * Create a DELETE route in App.jsx for removing an item from the shopping list
 * Create a DELETE route in  the `groceries.router` to remove item from the database
 * Test the DELETE route with Postman
 * 

## PUT -- Ken
 * Create a PUT route in App.jsx for changing status to `purchased`
 * Create a PUT route in the `groceries.router` to update item in the database
 * Test the PUT route with Postman
 * Change display on page to remove buttons when status is changed
 * 

## RESET/CLEAR -- Lons
 * Create a PUT route in App.jsx for changing status to default
 * Create a PUT route in the `groceries.router` to update item in the database
 * Test the PUT route with Postman
 * Create a DELETE route in App.jsx for removing everything from the shopping list
 * Create a DELETE route in  the `groceries.router` to clear the database
 * Test the DELETE route with Postman
 * 