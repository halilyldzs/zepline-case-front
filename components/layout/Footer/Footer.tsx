import FooterContact from './FooterContact';
import FooterLegal from './FooterLegal';
import FooterCopyright from './FooterCopyright';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__background">
        <div className="footer__content container">
          <FooterContact />
          <FooterLegal />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
