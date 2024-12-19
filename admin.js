// Adding doctor 
document.getElementById("add-doctor-btn").addEventListener("click", function () {
    const doctorID = document.getElementById("doctor-id").value.trim();
    const doctorName = document.getElementById("doctor-name").value.trim();
    const doctorSpecialty = document.getElementById("doctor-specialty").value.trim();
    const doctorEmail = document.getElementById("doctor-email").value.trim();
    const doctorFees = document.getElementById("doctor-fees").value.trim();

    if (!doctorID || !doctorName || !doctorSpecialty || !doctorEmail || !doctorFees) {
        alert("Please fill out all fields!");
        return;
    }

    if (!validateEmail(doctorEmail)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert(`Doctor Added Successfully!\nID: ${doctorID}\nName: ${doctorName}\nSpecialty: ${doctorSpecialty}\nEmail: ${doctorEmail}\nFees: ${doctorFees}`);
    clearDoctorForm();
});

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Clear the doctor form
function clearDoctorForm() {
    document.getElementById("doctor-id").value = "";
    document.getElementById("doctor-name").value = "";
    document.getElementById("doctor-specialty").value = "";
    document.getElementById("doctor-email").value = "";
    document.getElementById("doctor-fees").value = "";
}


// Lab Test Report Status Change
document.querySelectorAll(".report-status-dropdown").forEach((dropdown) => {
    dropdown.addEventListener("change", function () {
        const selectedStatus = this.value;
        alert(`Lab Test Report Status updated to: ${selectedStatus}`);
    });
});

// Payment Status Change
document.querySelectorAll(".payment-status-dropdown").forEach((dropdown) => {
    dropdown.addEventListener("change", function () {
        const selectedStatus = this.value;
        alert(`Payment Status updated to: ${selectedStatus}`);
    });
});

