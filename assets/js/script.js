const togglePassword = document.querySelector("#login #showpass");
const password = document.querySelector("#login #password");

togglePassword.addEventListener("click", function () {
   
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});