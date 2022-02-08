// const moment = require("./moment")               // No idea where this came from.. did I write this??

// const moment = require("./moment")

const customer = customers[0]

// Create div container for the 'customer card'
let customersDiv = document.getElementById("customers")

for (let customer of customers) {
    
// Create Variables to make placing into DOM easy
let srcURL = customer.picture.large
let name =  capitalize(customer.name.first) + ' ' + capitalize(customer.name.last) 
let email = customer.email
let street = customer.location.street.number + ' ' + customer.location.street.name


let cityStateZip = customer.location.city + ' ' + nameToAbbr(customer.location.state) + ', ' + customer.location.postcode
let dob = "DOB: " + moment(customer.dob.date).format("MMM DD, YYYY")
let customerDate = "Customer Since: " + moment(customer.registered.date).format("MMM DD, YYYY")

let customerCard = document.createElement("div")
customersDiv.appendChild(customerCard)
customerCard.className = "customer-card"

// Add Image

customerCard.innerHTML += `
<div>
    <img class='customer-img' src=${srcURL} />
</div>
`

let h2element = document.createElement("h2")
customerCard.appendChild(h2element)
customerCard.id = customer.name.first + '-' + customer.name.last
customerCard.className = 'customer-card'

let h2text = document.createTextNode(name)
h2element.appendChild(h2text)

// Define variables
let emailText = document.createTextNode(email)
let streetText = document.createTextNode(street)
let cityStateZipText = document.createTextNode(cityStateZip)
let dobText = document.createTextNode(dob)
let customerDateText = document.createTextNode(customerDate)
// -----------------------------------------
let h4email = document.createElement("h4")
customerCard.appendChild(h4email)
h4email.appendChild(emailText)
// -----------------------------------------
let h4street = document.createElement("h4")
customerCard.appendChild(h4street)
h4street.appendChild(streetText)
// -----------------------------------------
let h4cityStateZip = document.createElement("h4")
customerCard.appendChild(h4cityStateZip)
h4cityStateZip.appendChild(cityStateZipText)
// -----------------------------------------
let h4dob = document.createElement("h4")
customerCard.appendChild(h4dob)
h4dob.appendChild(dobText)
// -----------------------------------------
let h4customerDate = document.createElement("h4")
customerCard.appendChild(h4customerDate)
h4customerDate.appendChild(customerDateText)

}


function capitalize(string) {
    let firstLetter = string[0]
    let slicedString = string.slice(1)
    return firstLetter.toUpperCase() + slicedString
}