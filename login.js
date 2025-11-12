document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate a login check (you can expand this with multiple users later)
  const validEmail = "user@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    alert(`Login successful! Welcome back.`);
    window.location.href = "index.html"; // redirect to dashboard
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
