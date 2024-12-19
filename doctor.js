// Appointment Status Update
document.querySelectorAll('.status-dropdown').forEach(dropdown => {
    dropdown.addEventListener('change', function () {
        const appointmentStatus = this.value;
        const patientName = this.closest('tr').querySelector('td:nth-child(2)').innerText;
        const appointmentDate = this.closest('tr').querySelector('td:nth-child(6)').innerText;

        console.log(`Status for ${patientName} on ${appointmentDate} changed to: ${appointmentStatus}`);
        
    });
});


// Diagnosis updates
document.querySelectorAll('.diagnosis-input').forEach(input => {
    input.addEventListener('blur', function () {
        const diagnosis = this.value;
        const patientName = this.closest('tr').querySelector('td:nth-child(2)').innerText;

        console.log(`Diagnosis for ${patientName}: ${diagnosis}`);
    });
});