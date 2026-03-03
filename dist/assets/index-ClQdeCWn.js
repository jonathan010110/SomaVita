(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.getElementById("contact-form");c&&c.addEventListener("submit",o=>{o.preventDefault();const e=document.getElementById("f-name")?.value??"",t=document.getElementById("f-email")?.value??"",i=document.getElementById("f-tel")?.value??"",s=document.getElementById("f-msg")?.value??"",a=`Name: ${e}
E-Mail: ${t}
Tel: ${i}

${s}`;window.location.href=`mailto:somavita.praxis@gmail.com?subject=Kontaktanfrage&body=${encodeURIComponent(a)}`});const n="somavita-cookie-choice";if(!window.localStorage.getItem(n)){document.body.classList.add("cookie-open");const o=document.createElement("div");o.className="cookie-banner",o.innerHTML=`
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
    `;const e=t=>{window.localStorage.setItem(n,t),document.body.classList.remove("cookie-open"),o.remove()};o.addEventListener("click",t=>{const s=t.target.closest("[data-cookie-action]");if(!s)return;const a=s.dataset.cookieAction??"selection";e(a)}),document.body.appendChild(o)}});
