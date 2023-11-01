const express = require('express')
const app = express()
const port = 3000

var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('me');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Your Portfolio - Home',
        welcomeMessage: 'WELCOME TO MY PORTFOLIO',
        yourName: 'Dat Duong',
        yourRole: 'a Data Analyst',
        yourLocation: 'Vietnam',
        currentYear: new Date().getFullYear()
    });
});
