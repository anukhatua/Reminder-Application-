function updateDateTime() {
    var now = new Date();
    var dateTimeString = "Today's date: " + now.toDateString() + "<br>Current time: " + now.toLocaleTimeString();
    document.getElementById("datetime").innerHTML = dateTimeString;
}

// Call the updateDateTime function when the page loads
updateDateTime();

function logout() {
    // Redirect back to the login page after logout
    window.location.href = "index.html";
}

function redirectToSetRemainder(){
    window.location.href = "set_reminder.html";
}

function redirectToModifyRemainder(){
    window.location.href = "modify.html";
}