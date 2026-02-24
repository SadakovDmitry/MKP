import './MobileContactsPage.css';

const imgMapIframeUrl =
  'https://yandex.ru/map-widget/v1/?um=constructor%3A20cb4256f96c8e4067adbf9e3b7a2a8bb0d7c718f89d077eef88c4c21785e74d&source=constructor';
const imgSendIcon = '/assets/e38681f5ecbd1f392819aea92eb2583c57615e89.svg';
const imgMax = '/assets/max_icon.svg';
const imgVk = '/assets/vk_icon.svg';
const imgTelegram = '/assets/tg_icon.svg';
const imgWhatsapp = '/assets/whatsapp_icon.svg';

export default function MobileContactsPage() {
  return (
    <section className="mobile-contacts-page">
      <h2 className="mobile-contacts-page__title">Контакты</h2>

      <p className="mobile-contacts-page__city">Москва</p>
      <p className="mobile-contacts-page__address">
        Благовещенский переулок, 3с1
        <br />
        помещение 1/6
      </p>

      <p className="mobile-contacts-page__email">info@ooomkr.ru</p>
      <p className="mobile-contacts-page__phones">
        +7 (499) 347-24-27
        <br />
        +7 (926) 803-07-53
      </p>

      <div className="mobile-contacts-page__map-wrap">
        <iframe className="mobile-contacts-page__map-iframe" src={imgMapIframeUrl} title="Карта офиса МКР" loading="lazy" frameBorder={0} />
      </div>

      <form className="mobile-contacts-page__form" onSubmit={(event) => event.preventDefault()}>
        <div className="mobile-contacts-page__input-row">
          <span className="mobile-contacts-page__required" aria-hidden="true">
            *
          </span>
          <label className="mobile-contacts-page__input-shell">
            <input type="text" placeholder="Имя" />
          </label>
        </div>
        <div className="mobile-contacts-page__input-row">
          <span className="mobile-contacts-page__required" aria-hidden="true">
            *
          </span>
          <label className="mobile-contacts-page__input-shell">
            <input type="tel" placeholder="Телефон" />
          </label>
        </div>
        <div className="mobile-contacts-page__input-row">
          <span className="mobile-contacts-page__required" aria-hidden="true">
            *
          </span>
          <label className="mobile-contacts-page__input-shell">
            <input type="email" placeholder="E-mail" />
          </label>
        </div>
        <button type="submit" className="mobile-contacts-page__submit">
          <span>Отправить</span>
          <img src={imgSendIcon} alt="" />
        </button>
      </form>

      <p className="mobile-contacts-page__required-note">*— Поля обязательные для заполнения</p>

      <div className="mobile-contacts-page__socials" aria-label="Социальные сети">
        <a href="#" className="mobile-contacts-page__social-link" aria-label="MAX">
          <img src={imgMax} alt="" />
        </a>
        <a href="#" className="mobile-contacts-page__social-link" aria-label="VK">
          <img src={imgVk} alt="" />
        </a>
        <a href="#" className="mobile-contacts-page__social-link" aria-label="Telegram">
          <img src={imgTelegram} alt="" />
        </a>
        <a href="#" className="mobile-contacts-page__social-link" aria-label="WhatsApp">
          <img src={imgWhatsapp} alt="" />
        </a>
      </div>
    </section>
  );
}
