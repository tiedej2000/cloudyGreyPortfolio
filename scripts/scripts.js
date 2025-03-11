document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.add("lazy-loaded");
                observer.unobserve(img); 
            }
        });
    }, {
        root: null, 
        threshold: 0.1
    });

    lazyImages.forEach(img => observer.observe(img));
});