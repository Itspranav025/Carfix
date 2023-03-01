// Import MySQL connection.
const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_name"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Create CURD operation
// Create
function createContacts(name, email, message) {
  let queryString = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  connection.query(queryString, [name, email, message], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

// Read
function readContacts() {
  let queryString = "SELECT * FROM contacts";
  connection.query(queryString, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

// Update
function updateContacts(name, email, message, id) {
  let queryString = "UPDATE contacts SET name = ?, email = ?, message = ? WHERE id = ?";
  connection.query(queryString, [name, email, message, id], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

// Delete
function deleteContacts(id) {
  let queryString = "DELETE FROM contacts WHERE id = ?";
  connection.query(queryString, [id], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

// Export functions
module.exports = {
  createContacts,
  readContacts,
  updateContacts,
  deleteContacts
};