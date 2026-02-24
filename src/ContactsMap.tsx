import { useState } from 'react';

const CONSTRUCTOR_IFRAME_URL =
  'https://yandex.ru/map-widget/v1/?um=constructor%3A20cb4256f96c8e4067adbf9e3b7a2a8bb0d7c718f89d077eef88c4c21785e74d&source=constructor';
const OPEN_IN_MAPS_URL =
  'https://yandex.ru/maps/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA%2C%203%D1%811';

export default function ContactsMap() {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  return (
    <div className="contacts-map">
      <iframe
        className="contacts-map__iframe"
        src={CONSTRUCTOR_IFRAME_URL}
        title="Карта офиса МКР"
        loading="lazy"
        frameBorder={0}
        onLoad={() => setStatus('ready')}
        onError={() => setStatus('error')}
      />

      {status === 'loading' && <div className="contacts-map__status">Загрузка карты...</div>}

      {status === 'error' && (
        <div className="contacts-map__status contacts-map__status--error">
          <p>Не удалось загрузить карту</p>
          <a href={OPEN_IN_MAPS_URL} target="_blank" rel="noreferrer">
            Открыть в Яндекс Картах
          </a>
        </div>
      )}
    </div>
  );
}
