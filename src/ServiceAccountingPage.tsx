import { useEffect, useState } from 'react';
import getViewportWidth from './getViewportWidth';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import './ServiceAccountingPage.css';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 5140;
const MOBILE_BREAKPOINT = 1200;
const MOBILE_FRAME_WIDTH = 1080;
const MOBILE_FIRST_SECTION_HEIGHT = 1080;
const MOBILE_SECOND_SECTION_HEIGHT = 1400;
const MOBILE_PROCESS_SCALE = MOBILE_FRAME_WIDTH / FRAME_WIDTH;
const MOBILE_THIRD_SECTION_HEIGHT = 1420;
const MOBILE_FOURTH_SECTION_HEIGHT = 1750;
const MOBILE_FIFTH_SECTION_BASE_HEIGHT = 1080;
const MOBILE_FIFTH_SECTION_EXPANDED_DELTA = 420;
const MOBILE_SIXTH_SECTION_HEIGHT = 1600;
const MOBILE_SEVENTH_SECTION_HEIGHT = 1640;
const MOBILE_FIFTH_SECTION_TOP = MOBILE_FIRST_SECTION_HEIGHT + MOBILE_SECOND_SECTION_HEIGHT + MOBILE_THIRD_SECTION_HEIGHT + MOBILE_FOURTH_SECTION_HEIGHT;

const heroIcon = '/assets/b168250fe902bb2dbc34cfdf6686d1c1d2e2e6de.png';
const sendIcon = '/assets/e38681f5ecbd1f392819aea92eb2583c57615e89.svg';
const envelopeIcon = '/assets/99529a733eeb5b552be035c8cca8fe0182a35c67.png';
const mobileHeaderLogo = '/assets/news-figma-header-logo.png';
const mobileHeaderTelegram = '/assets/552b828f557817905235015c2dad5dabdcd75d06.svg';

const TASK_ITEMS = [
  'предоставление консультации по любому вопросу, связанному с правилами ведения бухгалтерии, изменением законодательства и др.;',
  'проверка всех предоставленных документов от учетной политики до налоговых деклараций;',
  'ведение бухгалтерского учета на всех уровнях;',
  'участие в государственных налоговых проверках;',
  'разработку документации для вашего предприятия;',
  'помощь в подготовке и сдаче бухгалтерской отчетности;',
  'помощь в автоматизации бухучета 1С;',
  'восстановление бухгалтерского учета;',
  'выполнение функций главного бухгалтера на удаленной основе;',
  'решение проблем спорного характера;',
  'подготовка и заполнение налоговых деклараций.',
] as const;

const STEP_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const PROCESS_STEPS = [
  { step: 'шаг 1.', title: 'Название', theme: 'light', size: 'short' },
  { step: 'шаг 2.', title: 'Название', theme: 'dark', size: 'tall' },
  { step: 'шаг 3.', title: 'Название', theme: 'light', size: 'tall' },
  { step: 'шаг 4.', title: 'Название', theme: 'dark', size: 'tall' },
  { step: 'шаг 5.', title: 'Название', theme: 'light', size: 'tall' },
] as const;

const ADVANTAGES = [
  'специалисты высшего уровня',
  'приятные цены на услуги',
  'опыт работы компании 5 лет',
  'положительные отзывы',
  'широкий спектр услуг',
  'глубокие знания и быстрое реагирование\nна изменения законодательной базы',
  'вежливое общение',
] as const;

const MOBILE_FAQ_ITEMS = ['Вопрос 1', 'Вопрос 2', 'Вопрос 3', 'Вопрос 4', 'Вопрос 5'] as const;
const MOBILE_FAQ_ANSWER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

type ServiceAccountingPageProps = {
  onNavigate: (page: SitePage) => void;
};

function MoreArrow() {
  return (
    <span className="service-accounting-exact__more-badge" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 9H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ServiceAccountingPage({ onNavigate }: ServiceAccountingPageProps) {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [openMobileFaq, setOpenMobileFaq] = useState<number | null>(0);

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
  const mobileFaqSectionHeight =
    MOBILE_FIFTH_SECTION_BASE_HEIGHT + (openMobileFaq === null ? 0 : MOBILE_FIFTH_SECTION_EXPANDED_DELTA);
  const mobileFrameHeight =
    MOBILE_FIRST_SECTION_HEIGHT +
    MOBILE_SECOND_SECTION_HEIGHT +
    MOBILE_THIRD_SECTION_HEIGHT +
    MOBILE_FOURTH_SECTION_HEIGHT +
    mobileFaqSectionHeight +
    MOBILE_SIXTH_SECTION_HEIGHT +
    MOBILE_SEVENTH_SECTION_HEIGHT;

  if (isMobileLayout) {
    return (
      <div className="service-accounting-mobile">
        <main className="service-accounting-mobile__main">
          <div
            className="service-accounting-mobile__shell"
            style={{ width: `${MOBILE_FRAME_WIDTH * mobileScale}px`, height: `${mobileFrameHeight * mobileScale}px` }}
          >
            <section
              className="service-accounting-mobile__frame"
              style={{
                width: `${MOBILE_FRAME_WIDTH}px`,
                height: `${mobileFrameHeight}px`,
                transform: `scale(${mobileScale})`,
                transformOrigin: 'top left',
              }}
            >
              <div className="service-accounting-mobile__hero-section">
                <div className="service-accounting-mobile__header">
                  <div className="service-accounting-mobile__header-row">
                    <button type="button" className="service-accounting-mobile__header-logo" onClick={() => onNavigate('home')} aria-label="Главная">
                      <img src={mobileHeaderLogo} alt="" />
                    </button>

                    <button type="button" className="service-accounting-mobile__header-title" onClick={() => onNavigate('home')}>
                      Главная
                    </button>

                    <button type="button" className="service-accounting-mobile__header-telegram" aria-label="Telegram">
                      <img src={mobileHeaderTelegram} alt="" />
                    </button>
                  </div>

                  <button type="button" className="service-accounting-mobile__menu" aria-label="Меню">
                    <span />
                    <span />
                    <span />
                  </button>
                </div>

                <h1 className="service-accounting-mobile__title">
                  Бухгалтерский
                  <br />и налоговый консалтинг
                </h1>

                <img src={heroIcon} alt="" className="service-accounting-mobile__hero-icon" />
              </div>

              <section className="service-accounting-mobile__tasks-section">
                <h2>задачи и решения</h2>
                <div className="service-accounting-mobile__tasks-text">
                  <p>Среди услуг, которые оказывает наша компания МКР в сфере бухгалтерского консалтинга:</p>
                  <p>&nbsp;</p>
                  <ul>
                    {TASK_ITEMS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>&nbsp;</p>
                  <p>Можно заказать как комплексное обслуживание, так и отдельную услугу.</p>
                </div>
              </section>

              <section className="service-accounting-mobile__process-scaled">
                <div
                  className="service-accounting-mobile__process-scaled-inner"
                  style={{ transform: `scale(${MOBILE_PROCESS_SCALE})`, transformOrigin: 'top left' }}
                >
                  <section className="service-accounting-exact__process">
                    <h2>пошаговый процесс</h2>
                    <div className="service-accounting-exact__steps">
                      {PROCESS_STEPS.map((item, index) => (
                        <article
                          key={`mobile-${item.step}`}
                          className={`service-accounting-exact__step service-accounting-exact__step--${item.theme} service-accounting-exact__step--${item.size} ${index === PROCESS_STEPS.length - 1 ? 'service-accounting-exact__step--last' : ''}`}
                          style={{ zIndex: PROCESS_STEPS.length - index }}
                        >
                          <p className="service-accounting-exact__step-title">
                            <span>{item.step} </span>
                            <b>{item.title}</b>
                          </p>
                          <p className="service-accounting-exact__step-text">{STEP_TEXT}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                </div>
              </section>

              <section className="service-accounting-mobile__advantages-section">
                <h2>преимущества сотрудничества</h2>

                <article className="service-accounting-mobile__adv-card service-accounting-mobile__adv-card--1">
                  <p>специалисты высшего уровня</p>
                  <span>1</span>
                </article>

                <article className="service-accounting-mobile__adv-card service-accounting-mobile__adv-card--2">
                  <p>приятные цены на услуги</p>
                  <span>2</span>
                </article>

                <article className="service-accounting-mobile__adv-card service-accounting-mobile__adv-card--3">
                  <p>опыт работы компании 5 лет</p>
                  <span>3</span>
                </article>

                <article className="service-accounting-mobile__adv-card service-accounting-mobile__adv-card--4">
                  <p>положительные отзывы</p>
                  <span>4</span>
                </article>

                <article className="service-accounting-mobile__adv-card service-accounting-mobile__adv-card--5">
                  <p>широкий спектр услуг</p>
                  <span>5</span>
                </article>

                <article className="service-accounting-mobile__adv-card service-accounting-mobile__adv-card--6 service-accounting-mobile__adv-card--tall">
                  <p>
                    глубокие знания
                    <br />и быстрое реагирование
                    <br />на изменения законодательной базы
                  </p>
                  <span>6</span>
                </article>

                <article className="service-accounting-mobile__adv-card service-accounting-mobile__adv-card--7">
                  <p>вежливое общение</p>
                  <span>7</span>
                </article>
              </section>

              <section
                className="service-accounting-mobile__faq-section"
                style={{ top: `${MOBILE_FIFTH_SECTION_TOP}px`, height: `${mobileFaqSectionHeight}px` }}
              >
                <h2>часто задаваемые вопросы</h2>

                <div className="service-accounting-mobile__faq-items">
                  {MOBILE_FAQ_ITEMS.map((question, index) => (
                    <div key={question} className="service-accounting-mobile__faq-entry">
                      <button
                        type="button"
                        className="service-accounting-mobile__faq-item"
                        onClick={() => setOpenMobileFaq((current) => (current === index ? null : index))}
                      >
                        <span>{question}</span>
                      </button>

                      {openMobileFaq === index && <p className="service-accounting-mobile__faq-answer">{MOBILE_FAQ_ANSWER}</p>}
                    </div>
                  ))}
                </div>
              </section>

              <section
                className="service-accounting-mobile__contact-section"
                style={{ top: `${MOBILE_FIFTH_SECTION_TOP + mobileFaqSectionHeight}px` }}
              >
                <h2>напишите нам</h2>

                <div className="service-accounting-mobile__contact-comment">
                  <textarea className="service-accounting-mobile__contact-comment-input" placeholder="Комментарий" />
                </div>

                <div className="service-accounting-mobile__contact-field service-accounting-mobile__contact-field--name">
                  <input type="text" className="service-accounting-mobile__contact-field-input" placeholder="Имя" />
                </div>

                <div className="service-accounting-mobile__contact-field service-accounting-mobile__contact-field--phone">
                  <input type="tel" className="service-accounting-mobile__contact-field-input" placeholder="Телефон" />
                </div>

                <div className="service-accounting-mobile__contact-field service-accounting-mobile__contact-field--email">
                  <input type="email" className="service-accounting-mobile__contact-field-input" placeholder="E-mail" />
                </div>

                <button type="button" className="service-accounting-mobile__contact-submit">
                  <div className="service-accounting-mobile__contact-submit-bg" />
                  <div className="service-accounting-mobile__contact-submit-label">Отправить</div>
                  <img className="service-accounting-mobile__contact-submit-icon" src={sendIcon} alt="" />
                </button>

                <img className="service-accounting-mobile__contact-envelope" src={envelopeIcon} alt="" />
              </section>

              <section
                className="service-accounting-mobile__other-section"
                style={{ top: `${MOBILE_FIFTH_SECTION_TOP + mobileFaqSectionHeight + MOBILE_SIXTH_SECTION_HEIGHT}px` }}
              >
                <h2>другие виды услуг</h2>

                <article className="service-accounting-mobile__other-card service-accounting-mobile__other-card--audit">
                  <h3>Аудит компании и анализ деятельности предприятия</h3>
                  <button type="button" className="service-accounting-mobile__other-btn" onClick={() => onNavigate('services')}>
                    <span>Подробнее</span>
                    <MoreArrow />
                  </button>
                </article>

                <article className="service-accounting-mobile__other-card service-accounting-mobile__other-card--projects">
                  <h3>
                    Управление
                    <br />и сопровождение проектов
                  </h3>
                  <button type="button" className="service-accounting-mobile__other-btn" onClick={() => onNavigate('services')}>
                    <span>Подробнее</span>
                    <MoreArrow />
                  </button>
                </article>

                <article className="service-accounting-mobile__other-card service-accounting-mobile__other-card--management">
                  <h3>Управленческий и финансовый консалтинг</h3>
                  <button type="button" className="service-accounting-mobile__other-btn" onClick={() => onNavigate('services')}>
                    <span>Подробнее</span>
                    <MoreArrow />
                  </button>
                </article>

                <article className="service-accounting-mobile__other-card service-accounting-mobile__other-card--legal">
                  <h3>Юридические услуги</h3>
                  <button type="button" className="service-accounting-mobile__other-btn" onClick={() => onNavigate('services')}>
                    <span>Подробнее</span>
                    <MoreArrow />
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
    <div className="service-accounting-exact">
      <main className="service-accounting-exact__main">
        <div className="service-accounting-exact__shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <div
            className="service-accounting-exact__frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <section className="service-accounting-exact__hero">
              <img src={heroIcon} alt="" className="service-accounting-exact__hero-icon" />
              <h1 className="service-accounting-exact__hero-title">
                Бухгалтерский
                <br />и налоговый консалтинг
              </h1>
            </section>

            <section className="service-accounting-exact__tasks">
              <h2>задачи и решения</h2>
              <div className="service-accounting-exact__tasks-text">
                <p>Среди услуг, которые оказывает наша компания МКР в сфере бухгалтерского консалтинга:</p>
                <ul>
                  {TASK_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Можно заказать как комплексное обслуживание, так и отдельную услугу.</p>
              </div>
            </section>

            <section className="service-accounting-exact__process">
              <h2>пошаговый процесс</h2>
              <div className="service-accounting-exact__steps">
                {PROCESS_STEPS.map((item, index) => (
                  <article
                    key={item.step}
                    className={`service-accounting-exact__step service-accounting-exact__step--${item.theme} service-accounting-exact__step--${item.size} ${index === PROCESS_STEPS.length - 1 ? 'service-accounting-exact__step--last' : ''}`}
                    style={{ zIndex: PROCESS_STEPS.length - index }}
                  >
                    <p className="service-accounting-exact__step-title">
                      <span>{item.step} </span>
                      <b>{item.title}</b>
                    </p>
                    <p className="service-accounting-exact__step-text">{STEP_TEXT}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="service-accounting-exact__advantages">
              <h2>преимущества сотрудничества</h2>
              <div className="service-accounting-exact__adv-list">
                {ADVANTAGES.map((item, index) => (
                  <article key={item} className={`service-accounting-exact__adv ${index === 5 ? 'service-accounting-exact__adv--tall' : ''}`}>
                    <span>{index + 1}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="service-accounting-exact__contact">
              <h2>Напишите нам</h2>
              <div className="service-accounting-exact__contact-grid">
                <div className="service-accounting-exact__contact-left">
                  <input type="text" placeholder="Имя" />
                  <input type="tel" placeholder="Телефон" />
                  <input type="email" placeholder="E-mail" />
                  <button type="button">
                    <span>Отправить</span>
                    <img src={sendIcon} alt="" />
                  </button>
                </div>
                <textarea placeholder="Комментарий" />
              </div>
              <div className="service-accounting-exact__contact-envelope" aria-hidden="true">
                <img src={envelopeIcon} alt="" />
              </div>
            </section>

            <section className="service-accounting-exact__other">
              <h2>другие виды услуг</h2>
              <article className="service-accounting-exact__other-card service-accounting-exact__other-card--management">
                <h3 className="service-accounting-exact__other-title service-accounting-exact__other-title--default">
                  Управленческий и финансовый консалтинг
                </h3>
                <button type="button" className="service-accounting-exact__more-btn" onClick={() => onNavigate('services')}>
                  <span>Подробнее</span>
                  <MoreArrow />
                </button>
              </article>

              <article className="service-accounting-exact__other-card service-accounting-exact__other-card--audit">
                <h3 className="service-accounting-exact__other-title service-accounting-exact__other-title--audit">
                  Аудит компании и анализ деятельности предприятия
                </h3>
                <button type="button" className="service-accounting-exact__more-btn" onClick={() => onNavigate('services')}>
                  <span>Подробнее</span>
                  <MoreArrow />
                </button>
              </article>

              <article className="service-accounting-exact__other-card service-accounting-exact__other-card--staffing">
                <h3 className="service-accounting-exact__other-title service-accounting-exact__other-title--staffing">
                  Кадровый и организационный консалтинг
                </h3>
                <button type="button" className="service-accounting-exact__more-btn" onClick={() => onNavigate('services')}>
                  <span>Подробнее</span>
                  <MoreArrow />
                </button>
              </article>

              <article className="service-accounting-exact__other-card service-accounting-exact__other-card--projects">
                <h3 className="service-accounting-exact__other-title service-accounting-exact__other-title--default">
                  Управление
                  <br />и сопровождение проектов
                </h3>
                <button type="button" className="service-accounting-exact__more-btn" onClick={() => onNavigate('services')}>
                  <span>Подробнее</span>
                  <MoreArrow />
                </button>
              </article>

              <article className="service-accounting-exact__other-card service-accounting-exact__other-card--legal">
                <h3 className="service-accounting-exact__other-title service-accounting-exact__other-title--default">
                  Юридические услуги
                </h3>
                <button type="button" className="service-accounting-exact__more-btn" onClick={() => onNavigate('services')}>
                  <span>Подробнее</span>
                  <MoreArrow />
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
