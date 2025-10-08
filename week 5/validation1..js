document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const phone = document.getElementById("phone").value.trim();

  let valid = true;

  // Clear previous errors
  ["nameErr", "emailErr", "passErr", "phoneErr"].forEach(id => {
    document.getElementById(id).textContent = "";
  });

  if (name === "") {
    document.getElementById("nameErr").textContent = "Full Name is required";
    valid = false;
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    document.getElementById("emailErr").textContent = "Enter a valid email";
    valid = false;
  }
  if (pass.length < 6) {
    document.getElementById("passErr").textContent = "Password must be at least 6 characters";
    valid = false;
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    document.getElementById("phoneErr").textContent = "Enter a 10-digit phone number";
    valid = false;
  }

  if (valid) {
    alert("🎉 Registration Successful!");
    // 👉 send data to server or save in localStorage here
  }
});
