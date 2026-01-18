import Icon from '@/components/ui/Icon';
import IconButton from '@/components/ui/IconButton';
import './FooterContact.scss';

export default function FooterContact() {
  return (
    <div className="footer-contact">
      <div className="footer-contact__item">
        <IconButton
          icon="id-card"
          variant="outline"
          color="default"
          className="footer-contact__icon"
        />
        <div className="footer-contact__content">
          <p className="footer-contact__label">Dergi Editörü</p>
          <p className="footer-contact__title">Prof. Dr. Elif Başkaya Acar</p>
          <div className="footer-contact__email">
            <Icon name="email" className="footer-contact__email-icon" />
            <span className="footer-contact__email-text">elif@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="footer-contact__item">
        <IconButton
          icon="message"
          variant="outline"
          color="default"
          className="footer-contact__icon"
        />
        <div className="footer-contact__content">
          <p className="footer-contact__label">Mail Adresi</p>
          <p className="footer-contact__title">profuture@gmail.com</p>
        </div>
      </div>

      <div className="footer-contact__item">
        <IconButton
          icon="location"
          variant="outline"
          color="default"
          className="footer-contact__icon"
        />
        <div className="footer-contact__content">
          <p className="footer-contact__address-text">
            Profuture Teknoloji Yayınevi Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara
          </p>
        </div>
      </div>
    </div>
  );
}
