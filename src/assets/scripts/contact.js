document.addEventListener("DOMContentLoaded", function () {
  console.log("Contact page script loaded");

  function validateForm(event) {
    event.preventDefault();
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Form submitted successfully!");
  }

  document.querySelector("form")?.addEventListener("submit", validateForm);
});