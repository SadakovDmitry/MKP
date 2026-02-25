import { useEffect, useState } from 'react';
import getViewportWidth from './getViewportWidth';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import './ServiceAuditPage.css';
import './ServiceManagementPage.css';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 3816;
const MOBILE_BREAKPOINT = 1200;
const MOBILE_FRAME_WIDTH = 1080;
const MOBILE_BASE_HEIGHT = 6680;

const heroIcon = '/assets/e8463afe767ac9cfe505ca2c0a7aec9317a62958.png';

type ServiceManagementPageProps = {
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
  return (
    <article className={`service-audit-page__card ${className}`}>
      <h2>{title}</h2>
      <button type="button" className="service-audit-page__card-button" aria-label="Подробнее">
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

export default function ServiceManagementPage({ onNavigate }: ServiceManagementPageProps) {
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
      <div className="service-audit-mobile service-management-mobile">
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
                <h1>Управленческий и финансовый консалтинг</h1>
              </section>

              <section className="service-audit-mobile__cards">
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--left"
                  title="Анализ и диагностика финансово-хозяйственной деятельности компаний, предприятий, организаций"
                />
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--middle"
                  title="Услуги финансового консалтинга: бюджетирование, моделирование, планирование"
                />
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--right"
                  title="Услуги IT бизнес консалтинга"
                />
              </section>

              <section className="service-audit-mobile__details">
                <h2>Управленческий консалтинг: услуги управления компанией и бизнесом, услуги управленческого учета</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--first">
                  <p>
                    Управленческий консалтинг - это расширенный комплекс консультационных услуг, целью которых является повышение эффективности
                    работы бизнеса на основе анализа существующих возможностей и решения задач по повышению потенциала деятельности компании.
                  </p>
                  <p>В этом процессе участвует команда различных специалистов с разносторонним опытом.</p>
                  <p>Основные услуги управленческого консалтинга:</p>
                  <ul>
                    <li>стратегическое бизнес-планирование;</li>
                    <li>разработка концепции проектов;</li>
                    <li>организация и внедрение управленческого учета и отчетности в компаниях;</li>
                    <li>анализ бизнес-процессов компаний;</li>
                    <li>аудит и оптимизация процессов;</li>
                    <li>аудит расходов компании.</li>
                  </ul>
                </div>

                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--first" onClick={() => onNavigate('contacts')} />

                <h2 className="service-audit-mobile__subtitle">Услуги финансового консалтинга: бюджетирование, моделирование, планирование</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--second">
                  <p>
                    Финансовый консалтинг включает совокупность услуг, оказываемых в целях построения надежной и эффективной системы управления
                    финансами компании для достижения долгосрочных целей финансового развития и финансовой устойчивости.
                  </p>
                  <p>
                    Консалтинг в сфере финансов помогает обеспечить контроль, высвободить нерационально используемые ресурсы, увеличить
                    прибыльность.
                  </p>
                  <ul>
                    <li>внедрение политики системы управления финансами;</li>
                    <li>финансовое планирование и бюджетирование;</li>
                    <li>налоговое планирование;</li>
                    <li>финансово-экономическое моделирование.</li>
                  </ul>
                </div>

                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--second" onClick={() => onNavigate('contacts')} />

                <h2 className="service-audit-mobile__subtitle service-audit-mobile__subtitle--third">Услуги ИТ бизнес консалтинга</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--third">
                  <p>Создание единого информационного пространства:</p>
                  <ul>
                    <li>
                      внедрение комплексных решений 1С в области автоматизации деятельности компании и учета бухгалтерского, налогового,
                      управленческого.
                    </li>
                  </ul>
                </div>
                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--third" onClick={() => onNavigate('contacts')} />
              </section>

              <section className="service-audit-mobile__other">
                <h2>другие виды услуг</h2>

                <article className="service-audit-mobile__other-card service-audit-mobile__other-card--management">
                  <h3 className="service-audit-mobile__other-title service-audit-mobile__other-title--default">
                    Бухгалтерский
                    <br />и налоговый консалтинг
                  </h3>
                  <button type="button" className="service-audit-mobile__other-more-btn" onClick={() => onNavigate('service-accounting')}>
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
    <div className="service-audit-page service-management-page">
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
              <h1>Управленческий и финансовый консалтинг</h1>
            </section>

            <section className="service-audit-page__cards-section">
              <AuditCard
                className="service-audit-page__card--left"
                title="Анализ и диагностика финансово-хозяйственной деятельности компаний, предприятий, организаций"
              />
              <AuditCard
                className="service-audit-page__card--middle"
                title="Услуги финансового консалтинга: бюджетирование, моделирование, планирование"
              />
              <AuditCard
                className="service-audit-page__card--right"
                title="Услуги IT бизнес консалтинга"
              />
            </section>

            <section className="service-audit-page__details">
              <h2 className="service-audit-page__details-title service-audit-page__details-title--first">
                Управленческий консалтинг: услуги управления компанией и бизнесом, услуги управленческого учета
              </h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--second">Услуги финансового консалтинга: бюджетирование, моделирование, планирование</h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--third">Услуги ИТ бизнес консалтинга</h2>

              <div className="service-audit-page__details-text service-audit-page__details-text--first">
                <p>
                  Управленческий консалтинг – это расширенный комплекс консультационных услуг, целью которых является повышение эффективности
                  работы бизнеса, на основе анализа существующих взаимосвязанных проблем и разработки планов по оптимизации деятельности компании.
                  В этом процессе участвует команда различных специалистов с разносторонним опытом.
                  <br />
                  <br />
                  Основные услуги управленческого консалтинга:
                  <br />
                </p>
                <ul>
                  <li>стратегическое и бизнес-планирование;</li>
                  <li>разработка концепции проектов;</li>
                  <li>организация и внедрение управленческого учета и отчетности в компании;</li>
                  <li>анализ бизнес-процессов компании;</li>
                  <li>аудит и оптимизация процессов;</li>
                  <li>аудит расходов компании.</li>
                </ul>
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--second">
                <p>
                  Финансовый консалтинг включает совокупность услуг, оказываемых в целях построения надежной и эффективной системы управления
                  финансами компании для достижения долгосрочных целей компании.
                </p>
                <p>Консалтинг в сфере финансов помогает обеспечить контроль, высвободить нерационально используемые ресурсы, увеличить прибыльность.</p>
                <p>Мы предлагаем услуги:</p>
                <ul>
                  <li>анализ и построение системы управления финансами;</li>
                  <li>финансовое планирование и бюджетирование;</li>
                  <li>налоговое планирование;</li>
                  <li>финансово-экономическое моделирование:</li>
                </ul>
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--third">
                <ul>
                  <li>создание единого информационного пространства;</li>
                  <li>внедрение комплексных решений «1С» в области автоматизации деятельности компании и учета бухгалтерского, налогового, управленческого;</li>
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
                  Бухгалтерский
                  <br />и налоговый консалтинг
                </h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-accounting')}>
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
