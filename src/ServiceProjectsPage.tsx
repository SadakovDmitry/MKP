import { useEffect, useState } from 'react';
import getViewportWidth from './getViewportWidth';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import './ServiceAuditPage.css';
import './ServiceProjectsPage.css';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 4412;
const MOBILE_BREAKPOINT = 1200;
const MOBILE_FRAME_WIDTH = 1080;
const MOBILE_BASE_HEIGHT = 6680;

const heroIcon = '/assets/6970dcca3d53861e581296f70514cacb37f69779.png';

type ServiceProjectsPageProps = {
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

export default function ServiceProjectsPage({ onNavigate }: ServiceProjectsPageProps) {
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
      <div className="service-audit-mobile service-projects-mobile">
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
                <h1>Управление и сопровождение проектов</h1>
              </section>

              <section className="service-audit-mobile__cards">
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--left"
                  title="Консультирование действующих проектов"
                />
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--middle"
                  title="Услуги по сопровождение проектов и стартапов: разработка организации проекта, юридическое сопровождение"
                />
                <AuditCard
                  className="service-audit-mobile__card service-audit-mobile__card--right"
                  title="Анализ и диагностика финансово хозяйственной деятельности предприятия, организации"
                />
              </section>

              <section className="service-audit-mobile__details">
                <h2>Консультирование действующих проектов</h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--first">
                  <ul>
                    <li>анализ и бизнес-моделирование;</li>
                    <li>разработка стратегии развития компании;</li>
                    <li>рекомендации по реструктуризации компании, бизнеса (разработка концепции холдинговой структуры);</li>
                    <li>создание единого информационного пространства компании, группы компаний;</li>
                    <li>разработка бизнес-планов, технико-экономического обоснования (ТЭО) проекта;</li>
                    <li>контроль затрат по проекту.</li>
                  </ul>
                </div>

                <OrderServiceButton className="service-audit-mobile__order service-audit-mobile__order--first" onClick={() => onNavigate('contacts')} />

                <h2 className="service-audit-mobile__subtitle">
                  Услуги по сопровождение проектов
                  <br />и стартапов: разработка организации проекта, юридическое сопровождение
                </h2>
                <div className="service-audit-mobile__text service-audit-mobile__text--second">
                  <p>
                    Услуга по юридическому сопровождению бизнеса будет полезна не только для компаний, которые не имеют собственного юриста, но и
                    для тех компаний, у которых в штате уже есть юрист.
                  </p>
                  <p>
                    Уровень одного, даже очень хорошего юриста, всегда проигрывает по сравнению с квалификацией целой команды профессионалов,
                    специализирующихся в разных областях юридического права.
                  </p>
                  <p>Мы предлагаем следующие юридические услуги.</p>
                  <ul>
                    <li>Корпоративное право:</li>
                    <li>оформление решений органов управления,</li>
                    <li>формирование органов управления,</li>
                    <li>разработка и реализация концепций объединения групп компаний (формирование холдингов);</li>
                    <li>Регистрация юрлиц, ИП, внесение изменений;</li>
                    <li>Ликвидация компаний (добровольная и альтернативная);</li>
                    <li>Банкротство все стадии:</li>
                    <li>Регистрация товарных знаков;</li>
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
                  <p>&nbsp;</p>
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
                  <p>&nbsp;</p>
                  <p>
                    Ценность данных и информацию, которые оперативно получает руководитель организации, существенна для принятия ключевых решений.
                  </p>
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
                    Бухгалтерский
                    <br />и налоговый консалтинг
                  </h3>
                  <button type="button" className="service-audit-mobile__other-more-btn" onClick={() => onNavigate('service-accounting')}>
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
    <div className="service-audit-page service-projects-page">
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
              <h1>Управление и сопровождение проектов</h1>
            </section>

            <section className="service-audit-page__cards-section">
              <AuditCard className="service-audit-page__card--left" title="Консультирование действующих проектов" />
              <AuditCard
                className="service-audit-page__card--middle"
                title="Услуги по сопровождение проектов и стартапов: разработка организации проекта, юридическое сопровождение"
              />
              <AuditCard
                className="service-audit-page__card--right"
                title="Анализ и диагностика финансово хозяйственной деятельности предприятия, организации"
              />
            </section>

            <section className="service-audit-page__details">
              <h2 className="service-audit-page__details-title service-audit-page__details-title--first">Консультирование действующих проектов</h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--second">
                Услуги по сопровождение проектов
                <br />и стартапов: разработка организации проекта, юридическое сопровождение
              </h2>
              <h2 className="service-audit-page__details-title service-audit-page__details-title--third">
                Анализ и диагностика финансово хозяйственной деятельности предприятия, организации
              </h2>

              <div className="service-audit-page__details-text service-audit-page__details-text--first">
                <ul>
                  <li>анализ и бизнес-моделирование;</li>
                  <li>разработка стратегии развития компании;</li>
                  <li>рекомендации по реструктуризации компании, бизнеса (разработка концепции холдинговой структуры);</li>
                  <li>создание единого информационного пространства компании, группы компаний;</li>
                  <li>разработка бизнес-планов, технико-экономического обоснования (ТЭО) проекта;</li>
                  <li>контроль затрат по проекту.</li>
                </ul>
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--second">
                <p>
                  Услуга по юридическому сопровождению бизнеса будет полезна не только для компаний, которые не имеют собственного юриста, но и
                  для тех компаний, у которых в штате уже есть юрист.
                </p>
                <p>
                  Уровень одного, даже очень хорошего юриста, всегда проигрывает по сравнению с квалификацией целой команды профессионалов,
                  специализирующихся в разных областях юридического права.
                </p>
                <p>Мы предлагаем следующие юридические услуги.</p>
                <ul>
                  <li>Корпоративное право:</li>
                  <li>оформление решений органов управления,</li>
                  <li>формирование органов управления,</li>
                  <li>разработка и реализация концепций объединения групп компаний (формирование холдингов);</li>
                  <li>Регистрация юрлиц, ИП, внесение изменений;</li>
                  <li>Ликвидация компаний (добровольная и альтернативная);</li>
                  <li>Банкротство все стадии:</li>
                  <li>Регистрация товарных знаков;</li>
                </ul>
              </div>

              <div className="service-audit-page__details-text service-audit-page__details-text--third">
                <p>
                  Все большей популярностью у Руководителей компаний пользуется экспресс-аудит. Данная проверка представляет собой один из
                  вариантов инициативного аудита.
                </p>
                <p>
                  Услуги экспресс-аудита проводится в тех случаях, когда компания по каким-либо причинам не может или не хочет проводить полный
                  анализ и аудит компании. Как правило, это связано с ограничением сроков для принятия Руководителем тех или иных решений. И в
                  данном случае экспресс-аудит имеет ряд безусловных плюсов:
                </p>
                <p>&nbsp;</p>
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
                <p>&nbsp;</p>
                <p>
                  Ценность данных и информацию, которые оперативно получает руководитель организации, существенна для принятия ключевых решений.
                </p>
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

              <article className="service-audit-page__other-card service-audit-page__other-card--projects">
                <h3 className="service-audit-page__other-title service-audit-page__other-title--default">
                  Бухгалтерский
                  <br />и налоговый консалтинг
                </h3>
                <button type="button" className="service-audit-page__other-more-btn" onClick={() => onNavigate('service-accounting')}>
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
