const express = require('express');
const path = require('path');
const app = express();

// Port from environment or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve HTML files without extension
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname, 'students.html'));
});

app.get('/universities', (req, res) => {
    res.sendFile(path.join(__dirname, 'universities.html'));
});

app.get('/partner-schools', (req, res) => {
    res.sendFile(path.join(__dirname, 'partner-schools.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/vle', (req, res) => {
    res.sendFile(path.join(__dirname, 'vle.html'));
});

app.get('/admissions', (req, res) => {
    res.sendFile(path.join(__dirname, 'admissions.html'));
});

// Handle 404 - redirect to home
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`IUFP Landing server running on port ${PORT}`);
});