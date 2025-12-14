document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".needs-validation");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // check if passwords match
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
    } else {
      confirmPassword.setCustomValidity("");
    }

    // check all validations
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    form.classList.add("was-validated");


    if (successMsg) {
      successMsg.classList.remove("d-none");
    } else {
      alert("Sign up successful!");
    }

    // reset form after success
    form.reset();
    form.classList.remove("was-validated");
  });
});
