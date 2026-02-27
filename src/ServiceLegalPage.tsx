import { useEffect, useState } from 'react';
import getViewportWidth from './getViewportWidth';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import './ServiceAuditPage.css';
import './ServiceLegalPage.css';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 3893;
const MOBILE_BREAKPOINT = 1200;
const MOBILE_FRAME_WIDTH = 1080;
const MOBILE_BASE_HEIGHT = 6400;

const heroIcon = '/assets/bfecad0c6eac05654a6d611c67a7eb8842671718.webp';

type ServiceLegalPageProps = {
  onNavigate: (
    page: SitePage | 'service-accounting' | 'service-audit' | 'service-legal' | 'service-management' | 'service-projects',
  ) => void;
};

function AuditMoreArrow() {
  return (
    <span className="service-audit-page__card-arrow" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 9H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function AuditCard({ title, className }: { title: string; className: string }) {
  const handleOpenDetails = () => {
    const detailsSection = document.querySelector('.service-audit-mobile__details, .service-audit-page__details');
    if (detailsSection instanceof HTMLElement) {
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className={`service-audit-page__card ${className}`}>
      <h2>{title}</h2>
      <button type="button" className="service-audit-page__card-button" aria-label="Подробнее" onClick={handleOpenDetails}>
        <span>Подробнее</span>
        <AuditMoreArrow />
      </button>
    </article>
  );
}

function OrderServiceButton({ className, onClick }: { className: string; onClick: () => void }) {
  return (
    <button type="button" className={`service-audit-page__order ${className}`} onClick={onClick}>
      <span className="service-audit-page__order-text">Заказать услугу</span>
      <span className="service-audit-page__order-arrow" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 9H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

function OtherMoreArrow() {
  return (
    <span className="service-audit-page__other-more-badge" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 9H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ServiceLegalPage({ onNavigate }: ServiceLegalPageProps) {
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
  const mobileScale = measuredViewportWidth > 0 ? Math.min(1, measuredViewportWidth / MOBILE_FRAME_WIDTH) : 1;

  if (isMobileLayout) {
    return (
      <div className="service-audit-mobile service-legal-mobile">
        <main className="service-audit-mobile__main">
          <div
            className="service-audit-mobile__shell"
            style={{ width: `${MOBILE_FRAME_WIDTH * mobileScale}px`, height: `${MOBILE_BASE_HEIGHT * mobileScale}px` }}
          >
            <section
              className="service-audit-mobile__frame"
              style={{
                width: `${MOBILE_FRAME_WIDTH}px`,
                height: `${MOBILE_BASE_HEIGHT}px`,
                transform: `scale(${mobileScale})`,
                transformOrigin: 'top left',
              }}
            >
              <section className="service-audit-mobile__hero">
                <img src={heroIcon} alt="" className="service-audit-mobile__hero-icon" />
                <h1>Юридические услуги</h1>
              </section>

              <section className="service-audit-mobile__cards">
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--left"
                  title="Юридическое сопровождение бизнеса"
                />
                <AuditCard className="service-audit-mobile__card service-audit-mobile__card--middle" title="Юридический консалтинг" />
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--right"
                  title="Экспертиза и сопровождение сделок"
                />
              </section>

              <section className="service-audit-mobile__details">
                <h2>Юридическое сопровождение бизнеса</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--first">
                  <p>
                    Услуга по юридическому сопровождению бизнеса будет полезна не только для компаний, которые не имеют собственного юриста, но и
                    для тех компаний, у которых в штате уже есть юрист.
                  </p>
                  <p>
                    Уровень одного, даже очень хорошего юриста, всегда проигрывает по сравнению с квалификацией целой команды профессионалов,
                    специализирующихся в разных областях юридического права.
                  </p>
                  <p>&nbsp;</p>
                  <p>Мы предлагаем следующие юридические услуги.</p>
                  <ul>
                    <li>
                      Корпоративное право:
                      <br />
                      оформление решений органов управления,
                      <br />
                      формирование органов управления,
                      <br />
                      разработка и реализация концепций объединения групп компаний (формирование холдингов);
                    </li>
                    <li>Регистрация юрлиц, ИП, внесение изменений;</li>
                    <li>Ликвидация компаний (добровольная и альтернативная);</li>
                    <li>Банкротство все стадии;</li>
                    <li>Регистрация товарных знаков;</li>
                  </ul>
                </div>

                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--first" onClick={() => onNavigate('contacts')} />

                <h2 className="service-audit-mobile__subtitle">Юридический консалтинг</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--second">
                  <p>
                    В бизнесе часто появляются случаи, когда необходима консультация квалифицированного юриста. Наша компания готова предложить
                    следующие услуги:
                  </p>
                  <p>&nbsp;</p>
                  <ul>
                    <li>Консультации устные и письменные;</li>
                    <li>
                      Документооборот (разработка внутренних положений компании, регламентов, инструкций, создание базы договоров и др.);
                    </li>
                    <li>Ведение кадрового делопроизводства;</li>
                    <li>Подготовка корректировка документов по трудовым правоотношениям;</li>
                  </ul>
                </div>

                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--second" onClick={() => onNavigate('contacts')} />

                <h2 className="service-audit-mobile__subtitle service-audit-mobile__subtitle--third">
                  Экспертиза и сопровождение сделок
                </h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--third">
                  <p>
                    Заключение сделок –неотъемлемая часть бизнеса. При заключение любого договора или соглашения необходимо учесть ряд аспектов
                    конкретной области права и нюансов в законодательстве, что бы защитить компанию от недобросовестных контрагентов. Услуги по
                    юридической экспертизе и сопровождению сделок направлена на минимизацию рисков компании при заключении договоров.
                  </p>
                  <p>&nbsp;</p>
                  <ul>
                    <li>Сопровождение сделок;</li>
                    <li>
                      Претензионно-исковое производство,представительство в судах всех инстанций, сопровождение исполнительного производства;
                    </li>
                    <li>Подготовка и анализ договоров;</li>
                  </ul>
                </div>
                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--third" onClick={() => onNavigate('contacts')} />
              </section>

              <section className="service-audit-mobile__other">
                <h2>другие виды услуг</h2>

                <article className="service-audit-mobile__other-card service-audit-mobile__other-card--management">
                  <h3 className="service-audit-mobile__other-title service-audit-mobile__other-title--default">
                    Управленческий и финансовый консалтинг
                  </h3>
                  <button type="button" className="service-audit-mobile__other-more-btn" onClick={() => onNavigate('service-management')}>
                    <span>Подробнее</span>
                    <OtherMoreArrow />
                  </button>
                </article>

                <article className="service-audit-mobile__other-card service-audit-mobile__other-card--audit">
                  <h3 className="service-audit-mobile__other-title service-audit-mobile__other-title--audit">
                    Аудит компании и анализ деятельности предприятия
                  </h3>
                  <button type="button" className="service-audit-mobile__other-more-btn" onClick={() => onNavigate('service-audit')}>
                    <span>Подробнее</span>
                    <OtherMoreArrow />
                  </button>
                </article>

                <article className="service-audit-mobile__other-card service-audit-mobile__other-card--projects">
                  <h3 className="service-audit-mobile__other-title service-audit-mobile__other-title--default">
                    Управление
                    <br />и сопровождение проектов
                  </h3>
                  <button type="button" className="service-audit-mobile__other-more-btn" onClick={() => onNavigate('service-projects')}>
                    <span>Подробнее</span>
                    <OtherMoreArrow />
                  </button>
                </article>

                <article className="service-audit-mobile__other-card service-audit-mobile__other-card--legal">
                  <h3 className="service-audit-mobile__other-title service-audit-mobile__other-title--default">
                    Бухгалтерский
                    <br />и налоговый консалтинг
                  </h3>
                  <button type="button" className="service-audit-mobile__other-more-btn" onClick={() => onNavigate('service-accounting')}>
                    <span>Подробнее</span>
                    <OtherMoreArrow />
                  </button>
                </article>
              </section>
            </section>
          </div>
        </main>

        <SharedFooter onNavigate={onNavigate} forceMobile />
      </div>
    );
  }

  return (
    <div className="service-audit-page service-legal-page">
      <main className="service-audit-page__main">
        <div className="service-audit-page__shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <div
            className="service-audit-page__frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              height: `${FRAME_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <section className="service-audit-page__hero">
              <img src={heroIcon} alt="" className="service-audit-page__hero-icon" />
              <h1>Юридические услуги</h1>
            </section>

            <section className="service-audit-page__cards-section">
              <AuditCard
                className="service-audit-page__card--left"
                title="Юридическое сопровождение бизнеса"
              />
              <AuditCard className="service-audit-page__card--middle" title="Юридический консалтинг" />
              <AuditCard
                className="service-audit-page__card--right"
                title="Экспертиза и сопровождение сделок"
              />
            </section>

            <section className="service-audit-page__details">
              <h2 className="service-audit-page__details-title service-audit-page__details-title--first">
                Юридическое сопровождение бизнеса
              </h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--second">Юридический консалтинг</h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--third">
                Экспертиза и сопровождение сделок
              </h2>

              <div className="service-audit-page__details-text service-audit-page__details-text--first">
                <p>
                  Услуга по юридическому сопровождению бизнеса будет полезна не только для компаний, которые не имеют собственного юриста, но и
                  для тех компаний, у которых в штате уже есть юрист.
                </p>
                <p>
                  Уровень одного, даже очень хорошего юриста, всегда проигрывает по сравнению с квалификацией целой команды профессионалов,
                  специализирующихся в разных областях юридического права.
                </p>
                <p>&nbsp;</p>
                <p>Мы предлагаем следующие юридические услуги.</p>
                <ul>
                  <li>
                    Корпоративное право:
                    <br />
                    оформление решений органов управления,
                    <br />
                    формирование органов управления,
                    <br />
                    разработка и реализация концепций объединения групп компаний (формирование холдингов);
                  </li>
                  <li>Регистрация юрлиц, ИП, внесение изменений;</li>
                  <li>Ликвидация компаний (добровольная и альтернативная);</li>
                  <li>Банкротство все стадии;</li>
                  <li>Регистрация товарных знаков;</li>
                </ul>
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--second">
                <p>В бизнесе часто появляются случаи, когда необходима консультация квалифицированного юриста. Наша компания готова предложить следующие услуги:</p>
                <p>&nbsp;</p>
                <ul>
                  <li>Консультации устные и письменные;</li>
                  <li>Документооборот (разработка внутренних положений компании, регламентов, инструкций, создание базы договоров и др.);</li>
                  <li>Ведение кадрового делопроизводства</li>
                  <li>Подготовка корректировка документов по трудовым правоотношениям;</li>
                </ul>
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--third">
                <p>Заключение сделок –неотъемлемая часть бизнеса. При заключение любого договора или соглашения необходимо учесть ряд аспектов конкретной области права и нюансов в законодательстве, что бы защитить компанию от недобросовестных контрагентов. Услуги по юридической экспертизе и сопровождению сделок направлена на минимизацию рисков компании при заключении договоров.</p>
                <p>&nbsp;</p>
                <ul>
                  <li>Сопровождение сделок;</li>
                  <li>Претензионно-исковое производство,представительство в судах всех инстанций, сопровождение исполнительного производства;</li>
                  <li>Подготовка и анализ договоров;</li>
                </ul>
              </div>

              <OrderServiceButton className="service-audit-page__order--first" onClick={() => onNavigate('contacts')} />
              <OrderServiceButton className="service-audit-page__order--second" onClick={() => onNavigate('contacts')} />
              <OrderServiceButton className="service-audit-page__order--third" onClick={() => onNavigate('contacts')} />
            </section>

            <section className="service-audit-page__other">
              <h2>другие виды услуг</h2>

              <article className="service-audit-page__other-card service-audit-page__other-card--management">
                <h3 className="service-audit-page__other-title service-audit-page__other-title--default">
                  Управленческий и финансовый консалтинг
                </h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-management')}>
                  <span>Подробнее</span>
                  <OtherMoreArrow />
                </button>
              </article>

              <article className="service-audit-page__other-card service-audit-page__other-card--audit">
                <h3 className="service-audit-page__other-title service-audit-page__other-title--audit">
                  Аудит компании и анализ деятельности предприятия
                </h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-audit')}>
                  <span>Подробнее</span>
                  <OtherMoreArrow />
                </button>
              </article>

              <article className="service-audit-page__other-card service-audit-page__other-card--staffing">
                <h3 className="service-audit-page__other-title service-audit-page__other-title--staffing">
                  Кадровый и организационный консалтинг
                </h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-management')}>
                  <span>Подробнее</span>
                  <OtherMoreArrow />
                </button>
              </article>

              <article className="service-audit-page__other-card service-audit-page__other-card--projects">
                <h3 className="service-audit-page__other-title service-audit-page__other-title--default">
                  Управление
                  <br />и сопровождение проектов
                </h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-projects')}>
                  <span>Подробнее</span>
                  <OtherMoreArrow />
                </button>
              </article>

              <article className="service-audit-page__other-card service-audit-page__other-card--legal">
                <h3 className="service-audit-page__other-title service-audit-page__other-title--default">
                  Бухгалтерский
                  <br />и налоговый консалтинг
                </h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-accounting')}>
                  <span>Подробнее</span>
                  <OtherMoreArrow />
                </button>
              </article>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} desktopScale={scale} />
    </div>
  );
}
