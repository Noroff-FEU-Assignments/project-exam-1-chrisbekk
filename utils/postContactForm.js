// Retrieve form data
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;

// Create an object with the form data
var formData = {
  name: name,
  email: email,
  message: message
};

// Convert form data to JSON
var jsonData = JSON.stringify(formData);

// WordPress API endpoint
var apiURL = 'https://example.com/wp-json/contact-form/v1/submit';

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the HTTP method and URL
xhr.open('POST', apiURL, true);

// Set the request headers
xhr.setRequestHeader('Content-Type', 'application/json');

// Handle the response from the server
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log('Form submitted successfully!');
    } else {
      console.error('Error:', xhr.status);
    }
  }
};

// Send the JSON data as the request body
xhr.send(jsonData);