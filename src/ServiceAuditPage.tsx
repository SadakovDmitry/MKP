import { useEffect, useState } from 'react';
import getViewportWidth from './getViewportWidth';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import './ServiceAuditPage.css';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 4746;
const MOBILE_BREAKPOINT = 1200;
const MOBILE_FRAME_WIDTH = 1080;
const MOBILE_BASE_HEIGHT = 6680;

const heroIcon = '/assets/b375f28bf7f11fb12e7b9b5c52811e656d947049.webp';

type ServiceAuditPageProps = {
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

export default function ServiceAuditPage({ onNavigate }: ServiceAuditPageProps) {
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
      <div className="service-audit-mobile">
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
                <h1>Аудит и анализ деятельности компаний</h1>
              </section>

              <section className="service-audit-mobile__cards">
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--left"
                  title="Проведение инициативного аудита предприятия и организации"
                />
                <AuditCard className="service-audit-mobile__card service-audit-mobile__card--middle" title="Экспресс-аудит" />
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--right"
                  title="Анализ и диагностика финансово хозяйственной деятельности предприятия, организации"
                />
              </section>

              <section className="service-audit-mobile__details">
                <h2>Проведение инициативного аудита предприятия и организации</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--first">
                  Один из наиболее верных способов получения объективной информации о положении дел компании является инициативный аудит. Как
                  правило это услуга, адресована собственникам предприятия, по экспертизе состояния бухгалтерского учета и налогового учета, а
                  также оценке эффективности управления Компанией.
                  <br />
                  <br />
                  Аудиторская проверка осуществляется по инициативе учредителей или руководящего состава организации по запросу за любой отрезок
                  времени. С его помощью можно проверить финансовое положение определённого подразделения или Компании в целом.
                  <br />
                  <br />
                  Аудит по инициативе руководства позволяет досконально проверить работу всех подразделений организации, выявить возможные риски и
                  срытые проблемы, которые могут привести к ухудшению финансового состояния компании.
                </div>

                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--first" onClick={() => onNavigate('contacts')} />

                <h2 className="service-audit-mobile__subtitle">Экспресс-аудиТ</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--second">
                  <p>
                    Все большей популярностью у Руководителей компаний пользуется экспресс-аудит. Данная проверка представляет собой один из
                    вариантов инициативного аудита.
                  </p>
                  <p>
                    Услуги экспресс-аудита проводится в тех случаях, когда компания по каким-либо причинам не может или не хочет проводить полный
                    анализ и аудит компании. Как правило, это связано с ограничением сроков для принятия Руководителем тех или иных решений. И в
                    данном случае экспресс-аудит имеет ряд безусловных плюсов:
                  </p>
                  <ul>
                    <li>
                      Важные сведения заказчик получает максимально быстро (промежуточную информацию Руководитель получает уже в ходе рабочих
                      сессий, т.е. в процесс работы специалистов МКР в компании Заказчика).
                    </li>
                    <li>
                      Подготовка итогового заключения и рекомендаций занимает 3-5 рабочих дней, при этом Руководитель уже владеет основной
                      информацией по интересующим его вопросам.
                    </li>
                    <li>
                      В ходе экспресс-проверки специалисты минимально вмешиваются в текущую деятельность бухгалтеров, существенно не нарушая рабочий
                      ритм.
                    </li>
                  </ul>
                </div>

                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--second" onClick={() => onNavigate('contacts')} />

                <h2 className="service-audit-mobile__subtitle service-audit-mobile__subtitle--third">
                  Анализ и диагностика финансово хозяйственной деятельности предприятия, организации
                </h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--third">
                  <p>
                    Все большей популярностью у Руководителей компаний пользуется экспресс-аудит. Данная проверка представляет собой один из
                    вариантов инициативного аудита.
                  </p>
                  <p>
                    Услуги экспресс-аудита проводится в тех случаях, когда компания по каким-либо причинам не может или не хочет проводить полный
                    анализ и аудит компании. Как правило, это связано с ограничением сроков для принятия Руководителем тех или иных решений. И в
                    данном случае экспресс-аудит имеет ряд безусловных плюсов:
                  </p>
                  <ul>
                    <li>
                      Важные сведения заказчик получает максимально быстро (промежуточную информацию Руководитель получает уже в ходе рабочих
                      сессий, т.е. в процесс работы специалистов МКР в компании Заказчика).
                    </li>
                    <li>
                      Подготовка итогового заключения и рекомендаций занимает 3-5 рабочих дней, при этом Руководитель уже владеет основной
                      информацией по интересующим его вопросам.
                    </li>
                    <li>
                      В ходе экспресс-проверки специалисты минимально вмешиваются в текущую деятельность бухгалтеров, существенно не нарушая рабочий
                      ритм.
                    </li>
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
                  <h3 className="service-audit-mobile__other-title service-audit-mobile__other-title--default">Юридические услуги</h3>
                  <button type="button" className="service-audit-mobile__other-more-btn" onClick={() => onNavigate('service-legal')}>
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
    <div className="service-audit-page">
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
              <h1>Аудит и анализ деятельности компаний</h1>
            </section>

            <section className="service-audit-page__cards-section">
              <AuditCard
                className="service-audit-page__card--left"
                title="Проведение инициативного аудита предприятия и организации"
              />
              <AuditCard className="service-audit-page__card--middle" title="Экспресс-аудит" />
              <AuditCard
                className="service-audit-page__card--right"
                title="Анализ и диагностика финансово хозяйственной деятельности предприятия, организации"
              />
            </section>

            <section className="service-audit-page__details">
              <h2 className="service-audit-page__details-title service-audit-page__details-title--first">
                Проведение инициативного аудита предприятия и организации
              </h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--second">Экспресс-аудиТ</h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--third">
                Анализ и диагностика финансово хозяйственной деятельности предприятия, организации
              </h2>

              <div className="service-audit-page__details-text service-audit-page__details-text--first">
                Один из наиболее верных способов получения объективной информации о положении дел компании является инициативный аудит. Как
                правило это услуга, адресована собственникам предприятия, по экспертизе состояния бухгалтерского учета и налогового учета, а
                также оценке эффективности управления Компанией.
                <br />
                <br />
                Аудиторская проверка осуществляется по инициативе учредителей или руководящего состава организации по запросу за любой отрезок
                времени. С его помощью можно проверить финансовое положение определённого подразделения или Компании в целом.
                <br />
                <br />
                Аудит по инициативе руководства позволяет досконально проверить работу всех подразделений организации, выявить возможные риски
                и срытые проблемы, которые могут привести к ухудшению финансового состояния компании.
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--second">
                <p>Все большей популярностью у Руководителей компаний пользуется экспресс-аудит. Данная проверка представляет собой один из вариантов инициативного аудита.</p>
                <p>Услуги экспресс-аудита проводится в тех случаях, когда компания по каким-либо причинам не может или не хочет проводить полный анализ и аудит компании. Как правило, это связано с ограничением сроков для принятия Руководителем тех или иных решений. И в данном случае экспресс-аудит имеет ряд безусловных плюсов:</p>
                <p>&nbsp;</p>
                <ul>
                  <li>Важные сведения заказчик получает максимально быстро (промежуточную информацию Руководитель получает уже в ходе рабочих сессий, т.е. в процесс работы специалистов МКР в компании Заказчика).</li>
                  <li>Подготовка итогового заключения и рекомендаций занимает 3-5 рабочих дней, при этом Руководитель уже владеет основной информацией по интересующим его вопросам.</li>
                  <li>В ходе экспресс-проверки специалисты минимально вмешиваются в текущую деятельность бухгалтеров, существенно не нарушая рабочий ритм.</li>
                </ul>
                <p>&nbsp;</p>
                <p>Ценность данных и информацию, которые оперативно получает руководитель организации, существенна для принятия ключевых решений.</p>
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--third">
                <p>Все большей популярностью у Руководителей компаний пользуется экспресс-аудит. Данная проверка представляет собой один из вариантов инициативного аудита.</p>
                <p>Услуги экспресс-аудита проводится в тех случаях, когда компания по каким-либо причинам не может или не хочет проводить полный анализ и аудит компании. Как правило, это связано с ограничением сроков для принятия Руководителем тех или иных решений. И в данном случае экспресс-аудит имеет ряд безусловных плюсов:</p>
                <p>&nbsp;</p>
                <ul>
                  <li>Важные сведения заказчик получает максимально быстро (промежуточную информацию Руководитель получает уже в ходе рабочих сессий, т.е. в процесс работы специалистов МКР в компании Заказчика).</li>
                  <li>Подготовка итогового заключения и рекомендаций занимает 3-5 рабочих дней, при этом Руководитель уже владеет основной информацией по интересующим его вопросам.</li>
                  <li>В ходе экспресс-проверки специалисты минимально вмешиваются в текущую деятельность бухгалтеров, существенно не нарушая рабочий ритм.</li>
                </ul>
                <p>&nbsp;</p>
                <p>Ценность данных и информацию, которые оперативно получает руководитель организации, существенна для принятия ключевых решений.</p>
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
                <h3 className="service-audit-page__other-title service-audit-page__other-title--default">Юридические услуги</h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-legal')}>
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
