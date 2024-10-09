document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme'); 
    document.getElementById('theme-toggle').classList.toggle('btn-light');
    document.getElementById('theme-toggle').classList.toggle('btn-dark');
    
});
