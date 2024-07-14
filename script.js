/*dropdown*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dropbtn').addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('show');
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
/*header*/
document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.hero-section');

    if (window.scrollY > heroSection.clientHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* read more */
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const moreContent = this.previousElementSibling;
            if (moreContent.style.display === "none" || moreContent.style.display === "") {
                moreContent.style.display = "block";
                this.textContent = "Read Less";
            } else {
                moreContent.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});