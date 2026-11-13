import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-wordmark" href="/">
        <span className="wordmark-mark" aria-hidden="true">LOGO</span>
        <span>[Company Name]</span>
      </Link>
      <p>One coordinated import journey between global markets and Nigeria.</p>
      <Link className="back-top" href="/#home">
        Back to home
      </Link>
      <span className="footer-copyright">© 2026 [Company Name]</span>
      <Link className="whatsapp-float" href="/#contact">
        WhatsApp <span>TODO: add number</span>
      </Link>
    </footer>
  );
}
