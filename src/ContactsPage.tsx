import { useEffect, useState } from 'react';
import SharedFooter from './SharedFooter';
import getViewportWidth from './getViewportWidth';
import type { SitePage } from './navigation';
import ContactsMap from './ContactsMap';
import './ContactsPage.css';

const FRAME_WIDTH = 1400;
const CONTACTS_FRAME_HEIGHT = 1460;
const MOBILE_BREAKPOINT = 1200;

const imgSendIcon = '/assets/e38681f5ecbd1f392819aea92eb2583c57615e89.svg';
const imgMax = '/assets/max_icon.svg';
const imgVk = '/assets/vk_icon.svg';
const imgTelegram = '/assets/tg_icon.svg';
const imgWhatsapp = '/assets/whatsapp_icon.svg';

type ContactsPageProps = {
  onNavigate: (page: SitePage) => void;
};

export default function ContactsPage({ onNavigate }: ContactsPageProps) {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(getViewportWidth());
    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.visualViewport?.addEventListener('resize', updateViewport);
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.visualViewport?.removeEventListener('resize', updateViewport);
    };
  }, []);

  const measuredViewportWidth = viewportWidth > 0 ? viewportWidth : getViewportWidth();
  const scale = measuredViewportWidth > 0 ? measuredViewportWidth / FRAME_WIDTH : 1;
  const isMobileLayout = measuredViewportWidth > 0 && measuredViewportWidth < MOBILE_BREAKPOINT;

  if (isMobileLayout) {
    return null;
  }

  return (
    <div className="contacts-page">
      <main className="contacts-page__main">
        <div className="contacts-page__scaled-wrap" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${CONTACTS_FRAME_HEIGHT * scale}px` }}>
          <section
            className="contacts-page__frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              height: `${CONTACTS_FRAME_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <h1 className="contacts-page__title">Контакты</h1>

            <p className="contacts-page__city">Москва</p>
            <p className="contacts-page__address">
              Благовещенский переулок, 3с1
              <br />
              помещение 1/6
            </p>

            <p className="contacts-page__email">info@ooomkr.ru</p>
            <p className="contacts-page__phones">
              +7 (499) 347-24-27
              <br />
              +7 (926) 803-07-53
            </p>

            <div className="contacts-page__map">
              <ContactsMap />
            </div>

            <form className="contacts-page__form" onSubmit={(event) => event.preventDefault()}>
              <label className="contacts-page__input-shell">
                <input type="text" name="name" placeholder="Имя" />
              </label>
              <label className="contacts-page__input-shell">
                <input type="tel" name="phone" placeholder="Телефон" />
              </label>
              <label className="contacts-page__input-shell">
                <input type="email" name="email" placeholder="E-mail" />
              </label>
              <button type="submit" className="contacts-page__submit">
                <span>Отправить</span>
                <img src={imgSendIcon} alt="" />
              </button>
            </form>

            <div className="contacts-page__socials" aria-label="Социальные сети">
              <a href="#" aria-label="MAX" className="contacts-page__social-btn">
                <img src={imgMax} alt="" />
              </a>
              <a href="#" aria-label="VK" className="contacts-page__social-btn">
                <img src={imgVk} alt="" />
              </a>
              <a href="#" aria-label="Telegram" className="contacts-page__social-btn">
                <img src={imgTelegram} alt="" />
              </a>
              <a href="#" aria-label="WhatsApp" className="contacts-page__social-btn">
                <img src={imgWhatsapp} alt="" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} desktopScale={scale} />
    </div>
  );
}
