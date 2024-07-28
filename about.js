document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.dropdown-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });

            targetElement.classList.add('active');
        });
    });
});
