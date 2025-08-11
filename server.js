const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'iufp-landing.html'));
});

// Route for Students page to match links like "/students/"
app.get(['/students', '/students/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'iufp-students.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});