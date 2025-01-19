document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("pesan").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    this.submit(); // Submit the form if validation passes
});
