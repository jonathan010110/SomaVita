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

  // Cookie banner (visual parity with live site)
  const cookieKey = 'somavita-cookie-choice';
  const hasChoice = window.localStorage.getItem(cookieKey);

  if (!hasChoice) {
    document.body.classList.add('cookie-open');

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-inner">
        <button type="button" class="cookie-close" data-cookie-action="close" aria-label="Cookie-Hinweis schließen">x</button>
        <h2 class="cookie-title">Cookie-Richtlinie</h2>
        <p class="cookie-text">Diese Website verwendet Cookies, um dir das bestmögliche Online-Erlebnis zu geben. Lass uns bitte wissen, dass du damit einverstanden bist, indem du weiter unten auf die Option "Ja, ich stimme zu" klickst. Falls du mehr über die von uns verwendeten Cookies herausfinden und eigene Cookie-Einstellungen verwenden möchtest, schau dir bitte unsere Cookie-Richtlinie an.</p>
        <div class="cookie-links"><a href="impressum.html">Impressum</a> <a href="datenschutz.html">Datenschutzerklärung</a></div>
        <div class="cookie-cats">
          <span>Unbedingt erforderlich</span>
          <span>Funktionell</span>
          <span>Performance</span>
          <span>Marketing / Third Party</span>
        </div>
        <div class="cookie-actions">
          <button type="button" class="cookie-btn" data-cookie-action="accept">Alle akzeptieren</button>
          <button type="button" class="cookie-btn secondary" data-cookie-action="selection">Nur Auswahl akzeptieren</button>
          <button type="button" class="cookie-btn secondary" data-cookie-action="decline">Alle ablehnen</button>
        </div>
      </div>
    `;

    const closeBanner = (value: string) => {
      window.localStorage.setItem(cookieKey, value);
      document.body.classList.remove('cookie-open');
      banner.remove();
    };

    banner.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('[data-cookie-action]') as HTMLButtonElement | null;

      if (!button) {
        return;
      }

      const action = button.dataset.cookieAction ?? 'selection';
      closeBanner(action);
    });

    document.body.appendChild(banner);
  }
});
