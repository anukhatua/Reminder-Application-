function modifyReminder() {
    var reminderText = document.getElementById("reminder-text").value;
    var reminderDate = document.getElementById("reminder-date").value;
    alert("Reminder modified!\nNew Message: " + reminderText + "\nNew Date and Time: " + reminderDate);

    window.location.href = "initial_page.html";
}