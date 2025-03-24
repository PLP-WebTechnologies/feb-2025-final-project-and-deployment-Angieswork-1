document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('form-message');

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields 🌿";
        formMessage.style.color = "#A8D5BA";
    } else {
        formMessage.textContent = "Your message has been sent! 🙏";
        formMessage.style.color = "#3A5A40";
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        observer.observe(section);
    });
});



/*document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('form-message');

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
    }
});*/
