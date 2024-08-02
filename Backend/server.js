const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');  // Import cors

const app = express();
const port = 3000;

// Middleware to parse incoming requests with URL-encoded payloads and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware to allow cross-origin requests

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ananth*123',
  database: 'VISKAMINIX'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, phoneNumber, course, gender, facilities, query } = req.body;

  // Insert form data into the database
  const sql = 'INSERT INTO registrations (name, email, phone_number, course, gender, facilities, query) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [name, email, phoneNumber, course, gender, facilities.join(','), query];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error saving data');
      throw err;
    }
    res.send('Form data saved successfully');
  });
});

app.post('/Contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Insert form data into the database
  const sql = 'INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)';
  const values = [name, email, phone, message];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error saving data');
      throw err;
    }
    res.send('Form data saved successfully');
  });
});

app.post('/cloudenquery', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO cloudEnquery(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});
app.post('/AI', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO AI(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});
app.post('/BlockChain', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO BlockChain(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/DataScince', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO DataScince(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/Testing', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO Testing(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/UIUX', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO UIUX(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/VR', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO VR(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/FULLSTACK', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO FULLSTACK(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});

app.post('/Ethical-Hacking', (req, res) => {
  const { name, email_address, contact_number, enquiry } = req.body;

  // Insert form data into the MySQL table
  const query = 'INSERT INTO ETHICALHACKING(name, email_address, contact_number, enquiry) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email_address, contact_number, enquiry], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while submitting the form.');
    } else {
      res.status(200).send('Form submitted successfully.');
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
