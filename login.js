function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email && password) {
        alert("Logged in successfully!");
        // You can add actual authentication logic here
    } else {
        alert("Please enter both email and password.");
    }
}

function search() {
    var searchInput = document.querySelector(".srch").value;
    alert("Searching for: " + searchInput);
    // You can add actual search logic here
}
