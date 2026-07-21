/*
  Shared site chrome, defined as native custom elements so the header and
  footer markup lives in exactly one place. No Shadow DOM is used on purpose:
  header/footer styling stays in common/css/base.css like any other element,
  so nothing needs to be duplicated into the component itself.

  Usage in a page's HTML:
    <site-header></site-header>
    ...
    <site-footer></site-footer>

  All paths below are root-absolute so this component works unchanged at any
  depth (site root, or one level down like /recruit/, /company/, etc).
*/

const ICONS = "/common/assets/icons";

const SERVICE_URL = "/services/";
const COMPANY_URL = "/company/";
const RECRUIT_URL = "/recruit/";
const CONTACT_URL = "/company/#contact";

const HEADER_HTML = `
<header class="site-header">
  <a href="/" class="logo">MARUTTO</a>
  <nav class="nav" aria-label="main navigation">
    <a href="${SERVICE_URL}">SERVICE</a><a href="${COMPANY_URL}">COMPANY</a><a href="${RECRUIT_URL}">RECRUIT</a><a href="${CONTACT_URL}">CONTACT</a>
    <span class="nav-icons">
      <a href="#" aria-label="X"><img src="${ICONS}/icon-x.svg" alt=""></a>
      <a href="#" aria-label="Instagram"><img src="${ICONS}/icon-instagram.svg" alt=""></a>
      <a href="#" aria-label="note"><img src="${ICONS}/icon-note.svg" alt=""></a>
    </span>
  </nav>
</header>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner reveal-block">
    <p class="footer-copy">&copy; MARUTTO .inc</p>
    <div class="footer-icons">
      <a href="#" aria-label="X"><img src="${ICONS}/icon-x.svg" alt=""></a>
      <a href="#" aria-label="Instagram"><img src="${ICONS}/icon-instagram.svg" alt=""></a>
      <a href="#" aria-label="note"><img src="${ICONS}/icon-note.svg" alt=""></a>
    </div>
    <nav class="footer-nav">
      <a href="${SERVICE_URL}">SERVICE</a><a href="${COMPANY_URL}">COMPANY</a><a href="${RECRUIT_URL}">RECRUIT</a><a href="${CONTACT_URL}">CONTACT</a><a href="#">PRIVACY POLICY</a>
    </nav>
  </div>
</footer>`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.outerHTML = HEADER_HTML;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.outerHTML = FOOTER_HTML;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
