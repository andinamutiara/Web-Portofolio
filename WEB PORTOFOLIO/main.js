document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetID = this.getAttribute('href');
        const targetSection = document.querySelector(targetID);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function myResume() {
    event.preventDefault();
}

function sendMessage() {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate"); 
        } else {
            entry.target.classList.remove("animate");
        }
    });
});

document.querySelectorAll(".animate-home, .animate-left, .animate-right").forEach(el => {
    observer.observe(el);
});