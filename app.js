document.addEventListener("DOMContentLoaded", function () {
    // Register and Login Modal elements
    const registerModal = document.getElementById("registerModal");
    const loginModal = document.getElementById("loginModal");

    const closeButtons = document.querySelectorAll(".close-btn");
    const registerButton = document.querySelector(".register-btn");
    const loginButton = document.querySelector(".login-btn");

    // Open Modals
    registerButton.addEventListener("click", () => {
        registerModal.style.display = "flex";
    });

    loginButton.addEventListener("click", () => {
        loginModal.style.display = "flex";
    });

    // Close Modals
    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            registerModal.style.display = "none";
            loginModal.style.display = "none";
        });
    });

    // Close Modal on clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === registerModal) {
            registerModal.style.display = "none";
        }
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    // Handle Register Form Submission
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Registration successful!");
        registerForm.reset();
        registerModal.style.display = "none";
    });

    // Handle Login Form Submission
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login successful!");
        loginForm.reset();
        loginModal.style.display = "none";
    });
});

// JavaScript for appointment modal functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("appointmentModal");
    const btn = document.getElementById("appointmentBtn");
    const closeBtn = document.querySelector(".close-btn");

    // Open modal
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Form submission (example functionality)
    const form = document.getElementById("appointmentForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Appointment scheduled successfully!");
        form.reset();
        modal.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("patientInfoModal");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("patientInfoForm");
    const selectedTestElement = document.getElementById("selectedTest");
    const addTestButtons = document.querySelectorAll(".add-test-btn");

    let selectedTest = "";

    // Open modal and set test details
    addTestButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            selectedTest = btn.getAttribute("data-test");
            const fee = btn.getAttribute("data-fee");
            selectedTestElement.innerHTML = `<strong>Test:</strong> ${selectedTest} (Fee: $${fee})`;
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const patientName = document.getElementById("patientName").value;
        const patientPhone = document.getElementById("patientPhone").value;
        const appointmentDate = document.getElementById("appointmentDate").value;

        alert(`Appointment scheduled for ${patientName} (${patientPhone}) on ${appointmentDate} for ${selectedTest}.`);
        form.reset();
        modal.style.display = "none";
    });
});



