function calculateAge() {
    var dobDay = parseInt(document.getElementById("dobDay").value);
    var dobMonth = parseInt(document.getElementById("dobMonth").value);
    var dobYear = parseInt(document.getElementById("dobYear").value);

    if (isNaN(dobDay) || isNaN(dobMonth) || isNaN(dobYear)) {
        alert("Please enter valid date of birth.");
        return;
    }

    var dob = new Date(dobYear, dobMonth - 1, dobDay); 
    var today = new Date();

    var ageYears = today.getFullYear() - dob.getFullYear();
    var ageMonths = today.getMonth() - dob.getMonth();
    var ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        var prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += prevMonthLastDay;
        ageMonths--;
    }
    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    document.getElementById("result").innerText = "Your age is: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.";
}