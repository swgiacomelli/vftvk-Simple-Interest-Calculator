// Compute interest
function compute() {
    // first validate the principal is greater than 0
    if (!validatePrincipal()) {
        return;
    }

    // capture form values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate results
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // update the page with the results.
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "If you deposit <mark>" + principal +
        "</mark>,<br>at an interest rate of <mark>" + rate +
        "%</mark><br>You will receive an amount of <mark>" + interest +
        "</mark>,<br>in the year <mark>" + year +
        "</mark><br>"
}

// Update the rate output based on the slider position
function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal + "%";
}

// Validate that the principal value
function validatePrincipal() {

    // Capture the DOM element for principal
    var principalElement = document.getElementById("principal")

    // check value is greater than 0
    if (principalElement.value <= 0) {
        // Alert user and set focus
        alert("Enter a positive number");
        principalElement.focus();
        // Error return invalid
        return false;
    }

    // All good return valid
    return true;
}