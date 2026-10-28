const express = require('express');
const app = express();

const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.use(express.urlencoded({ extended: true }));

// Create the form on /form route
app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write('<title>Express Form Exercise</title>');
  res.write('<main>');
  res.write('<h1>Express Form Exercise</h1>');
  res.write('<form action="/submit" method="post">');
  res.write('<label for="name">Enter your username: </label>');
  res.write(
    '<input type="text" name="username" id="name" required /><br /><br />',
  );
  res.write('<label for="email">Enter your email: </label>');
  res.write(
    '<input type="email" name="email" id="email" required /><br /><br />',
  );
  res.write('<label for="comms">Enter any comments: </label>');
  res.write('<input type="text" name="comms" id="comms" /><br /><br />');
  res.write('<fieldset class="newsletter">');
  res.write('<legend>Sign up for our newsletter?</legend>');
  res.write(
    '<label><input type="radio" name="radio" value="yes" id="yes" required /> Yes</label>',
  );
  res.write(
    '<label><input type="radio" name="radio" value="no" id="no" /> No</label>',
  );
  res.write('</fieldset><br />');
  res.write('<button type="submit" id="submitBtn">Submit</button>');
  res.write('</form></main></body></html>');
  res.end();
});

// Display form content on /submit route
app.post('/submit', (req, res) => {
  res.set({ 'Content-Type': 'text/plain' });
  res.write('Express Form Content\n\n');
  res.write(`Username: ${req.body.username}\n`);
  res.write(`Email: ${req.body.email}\n`);
  res.write(`Comments: ${req.body.comms}\n`);
  res.write(`Signed up for newsletter: ${req.body.radio}\n`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
