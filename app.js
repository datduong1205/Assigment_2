// Import the Express.js library and create an instance of the Express application.
const express = require('express')
const app = express()

// Define the port number for the server to listen on.
const port = 3000


// Import the 'path' module to work with file paths.
var path = require('path');

// Configure the Express application to use the EJS template engine for rendering views.
app.set('view engine', 'ejs');

// Serve static files (e.g., CSS, JavaScript) from the 'public' directory.
app.use(express.static('public'));

// Serve static files from the 'public' directory using an absolute path.
app.use(express.static(path.join(__dirname, 'public')))

// Define a route for the root URL ('/') and render the 'index' template.
app.get('/', (req, res) => {
  res.render('index');
});

// Define a route for the '/about' URL and render the 'me' template.
app.get('/about', (req, res) => {
  res.render('me');
});

// Define a route for the '/projects' URL and render the 'projects' template.
app.get('/projects', (req, res) => {
  res.render('projects');
});

// Define a route for the '/contact' URL and render the 'contact' template.
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the Express server and listen on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
