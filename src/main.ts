// Main TypeScript entry point
console.log("SomaVita website initialized with TypeScript.");

// We can add interactive logic here safely with strong typing.
document.addEventListener('DOMContentLoaded', () => {
    const ctaBtn = document.getElementById('cta-termin') as HTMLAnchorElement | null;
    
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            console.log("Termin buchen button clicked!");
        });
    }

    // Set dynamic current year in footer if we had a copyright line
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    if (form) {
        form.addEventListener('submit', () => {
            console.log("Form submission intercepted via TS!");
            // Continue with standard form action...
        });
    }
});
