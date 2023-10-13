function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct (for example, hardcoded values)
    if (username === "admin" && password === "1234") {
        window.location.href="index2.html";
        // Redirect to another page or perform other actions after successful login
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}