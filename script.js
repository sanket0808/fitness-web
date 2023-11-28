document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    alert("Form submitted!\n\nName: " + formData.name + "\nEmail: " + formData.email + "\nMessage: " + formData.message);

});
