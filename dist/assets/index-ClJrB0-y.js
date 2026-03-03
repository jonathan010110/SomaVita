(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{document.body.classList.add("js-ready");const a=document.getElementById("contact-form");a&&a.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("f-name")?.value??"",o=document.getElementById("f-email")?.value??"",s=document.getElementById("f-tel")?.value??"",c=document.getElementById("f-msg")?.value??"",r=`Name: ${t}
E-Mail: ${o}
Tel: ${s}

${c}`;window.location.href=`mailto:somavita.praxis@gmail.com?subject=Kontaktanfrage&body=${encodeURIComponent(r)}`});const n="somavita-cookie-choice";if(!window.localStorage.getItem(n)){document.body.classList.add("cookie-open");const e=document.createElement("div");e.className="cookie-banner",e.innerHTML=`
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
    `;const t=o=>{window.localStorage.setItem(n,o),document.body.classList.remove("cookie-open"),e.remove()};e.addEventListener("click",o=>{const c=o.target.closest("[data-cookie-action]");if(!c)return;const r=c.dataset.cookieAction??"selection";t(r)}),document.body.appendChild(e)}const i=document.querySelectorAll(".reveal");if(i.length>0)if("IntersectionObserver"in window){const e=new IntersectionObserver((t,o)=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),o.unobserve(s.target))})},{threshold:.14,rootMargin:"0px 0px -4% 0px"});i.forEach(t=>e.observe(t))}else i.forEach(e=>e.classList.add("is-visible"))});
