

const customer = customers[0]

// Create div container for the 'customer card'
let customerDiv = document.getElementById("customers")


// let name = customers.name

// // Create Variables to make placing into DOM easy
let name = customer.name.title + ' ' + customer.name.first + ' ' + customer.name.last
let email = customer.email
let street = customer.street
let cityStateZip = customer.location.city + ' ' + customer.location.state + ', ' + customer.location.postcode
let dob = "Date of Birth"               // Fill in later
let customerDate = "Registered Date"    // Fill in later



