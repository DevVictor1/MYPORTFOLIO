document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Name validation
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText = "Please enter a valid email address.";
      isValid = false;
    }

    // Message validation
    if (message.length < 10) {
      document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      alert("Message sent successfully!");
      form.reset();
    }
  });
});
