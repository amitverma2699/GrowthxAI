const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

// THEME
function applyTheme(theme){
    if(theme==="dark"){
        html.classList.add("dark");
        themeIcon.className="fas fa-moon text-xl";
        localStorage.setItem("theme","dark");
    } else {
        html.classList.remove("dark");
        themeIcon.className="fas fa-sun text-xl";
        localStorage.setItem("theme","light");
    }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggleBtn.addEventListener("click",()=>{
    applyTheme(
        html.classList.contains("dark")
            ? "light"
            : "dark"
    );
});

// NAV ACTIVE
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`)
            link.classList.add('active');
    });
});

// MODAL
function showForm() {
    document.getElementById('modal').classList.remove('hidden');
}

function hideForm() {
    document.getElementById('modal').classList.add('hidden');
}

function submitForm(e) {
    e.preventDefault();
    alert("✅ Thank you! Our team will contact you within 24 hours.");
    hideForm();
    document.getElementById('contactForm').reset();
}

document.addEventListener('keydown', e => {
    if (e.key === "Escape") hideForm();
});

// SLIDER
let currentSlide = 0;
const slider = document.getElementById('slider');
let startX = 0;

function showSlide(n) {
    currentSlide = (n + 5) % 5;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide(){ showSlide(currentSlide + 1); }
function prevSlide(){ showSlide(currentSlide - 1); }

slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
});