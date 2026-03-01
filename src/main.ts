// SomaVita – main.ts

document.addEventListener('DOMContentLoaded', () => {
  // Contact form — prevent default and open mailto
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('f-name') as HTMLInputElement)?.value ?? '';
      const email = (document.getElementById('f-email') as HTMLInputElement)?.value ?? '';
      const tel = (document.getElementById('f-tel') as HTMLInputElement)?.value ?? '';
      const msg = (document.getElementById('f-msg') as HTMLTextAreaElement)?.value ?? '';
      const body = `Name: ${name}\nE-Mail: ${email}\nTel: ${tel}\n\n${msg}`;
      window.location.href = `mailto:somavita.praxis@gmail.com?subject=Kontaktanfrage&body=${encodeURIComponent(body)}`;
    });
  }
});
