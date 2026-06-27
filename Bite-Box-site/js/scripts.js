function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (email === "admin@123" && password === "pass123") {

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", email);

        window.location.href = "index.html";
    }
    else {
        error.innerText = "Invalid email or password!!"
    }


}


function showPassword() {

    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password"
    }
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});