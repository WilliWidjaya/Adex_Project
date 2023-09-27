
function validateInputs() {
    let username = document.getElementById("user-name-input").value
    let full_name = document.getElementById("full-name-input").value
    let email = document.getElementById("email-input").value
    let password = document.getElementById("password-input").value
    let password_confirm = document.getElementById("confirm-password-input").value
    let country_input = document.getElementById("country-input").value
    let address = document.getElementById("address-input").value
    let agree_input = document.getElementById("agree-input")

    if(username == "") {
        return throwError("Please enter username")
    } else if (username.length < 3 || username.length > 30){
        return throwError("Enter your username between 3 - 30 characters")
    } else if(full_name == "") {
        return throwError("Please fill in full name")
    } else if ( /\d/.test(full_name)) {
        return throwError("Full name must not contain numbers")
    } else if (full_name.length < 3){
        return throwError("Please fill in full name (minimal 4 characters)")
    } else if(email == "") {
        return throwError("Please enter your email address")
    } else if (email.indexOf("@") == -1) {
        return throwError("Invalid email address")
    } else if (!email.endsWith(".com")){
        return throwError("Invalid email address")
    } else if(password == "") {
        return throwError("Please input your password")
    } else if(password_confirm == "") {
        return throwError("Please re-type your password")
    } else if (password != password_confirm) {
        return throwError("Incorrect password re-confirmation")
    } else if (country_input == "-1") {
        return throwError("Please select a country")
    } else if (address == "") {
        return throwError("Please enter your address")
    } else if (!address.startsWith("Jl. ")) {
        return throwError("Invalid address (start with Jl. )")
    } else 
    if (!agree_input.checked) {
        return throwError("You must agree to the terms and conditions in order to create an account")
    } else {
        return true
    }
}

let errortext = document.getElementById("error-not")

function throwError(errormsg) {
    errortext.innerHTML = errormsg
    return false
}