const generateAge = () => {
    const currentDate = new Date();
    const dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        document.getElementById("output").textContent = "Please select a date.";
        return;
    }

    const dob = new Date(dobInput);

    let ageYears = currentDate.getFullYear() - dob.getFullYear();
    let ageMonths = currentDate.getMonth() - dob.getMonth();
    const dayDiff = currentDate.getDate() - dob.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && dayDiff < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (dayDiff < 0) {
        ageMonths--;
    }

    let output = "";

    if (ageYears > 0) {
        output = `Your age is: ${ageYears} year(s)`;
        if (ageMonths > 0) {
            output += ` and ${ageMonths} month(s)`;
        }
    } else {
        output = `Your age is: ${ageMonths} month(s)`;
    }

    document.getElementById("output").textContent = output;
};
