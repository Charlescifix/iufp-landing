const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'iufp-landing.html'));
});

// Route for Students page
app.get(['/students', '/students/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'iufp-students.html'));
});

// Route for Universities page
app.get(['/universities', '/universities/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'iufp-universities.html'));
});

// Redirect any .html file requests to clean URLs
app.get('/iufp-landing.html', (req, res) => {
  res.redirect(301, '/');
});

app.get('/iufp-students.html', (req, res) => {
  res.redirect(301, '/students/');
});

app.get('/iufp-universities.html', (req, res) => {
  res.redirect(301, '/universities/');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});