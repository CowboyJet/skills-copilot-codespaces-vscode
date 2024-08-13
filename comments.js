// Create web server
const express = require('express');
const app = express();

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Creating a comment');
});

// Get a comment
app.get('/comments/:id', (req, res) => {
  res.send('Getting a comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Updating a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Deleting a comment');
});

// Listen to the port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});const express = require('express');
const app = express();

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Creating a comment');
});

// Get a comment
app.get('/comments/:id', (req, res) => {
  res.send('Getting a comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send('Updating a comment');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send('Deleting a comment');
});

// Listen to the port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
