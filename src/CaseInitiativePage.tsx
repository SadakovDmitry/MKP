import { useEffect, useMemo, useState } from 'react';
import './CaseInitiativePage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import MobileCaseExtraSection from './MobileCaseExtraSection';
import type { CaseId } from './caseDetailsData';
import getViewportWidth from './getViewportWidth';

const heroImage = '/assets/9caeca757f49fce2da4992aa999e6d77c10b0482.jpg';
const problemImage = '/assets/case-situation-warning-clean.webp';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 4190;

type CaseInitiativePageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
};

const MOBILE_LAYOUT_BREAKPOINT = 1200;
const MOBILE_HERO_HEIGHT = 760;
const MOBILE_PROBLEM_FRAME_WIDTH = 1080;
const MOBILE_PROBLEM_FRAME_HEIGHT = 980;
const MOBILE_WORK_FRAME_WIDTH = 1080;
const MOBILE_WORK_FRAME_HEIGHT = 2340;
const MOBILE_RECOMMENDATIONS_FRAME_WIDTH = 1080;
const MOBILE_RECOMMENDATIONS_FRAME_HEIGHT = 1750;
const MOBILE_RESULT_FRAME_WIDTH = 1080;
const MOBILE_RESULT_FRAME_HEIGHT = 640;

export default function CaseInitiativePage({ onNavigate, onOpenCase }: CaseInitiativePageProps) {
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

  const scale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileProblemScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_PROBLEM_FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileWorkScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_WORK_FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileRecommendationsScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_RECOMMENDATIONS_FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileResultScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_RESULT_FRAME_WIDTH;
  }, [viewportWidth]);

  const isMobileLayout = viewportWidth > 0 && viewportWidth < MOBILE_LAYOUT_BREAKPOINT;

  if (isMobileLayout) {
    return (
      <div className="case3-page">
        <main className="case3-main">
          <section className="case3-mobile-fixed-hero" style={{ height: `${MOBILE_HERO_HEIGHT}px` }}>
            <img src={heroImage} alt="" className="case3-mobile-fixed-hero-image" />
            <div className="case3-mobile-fixed-hero-overlay" />
            <div className="case3-mobile-fixed-hero-content">
              <h1 className="case3-mobile-fixed-hero-title">Инициативный экспресс-аудит строительной компании</h1>
              <p className="case3-mobile-fixed-hero-subtitle">
                Вновь назначенный Генеральный директор инициировал аудиторскую проверку, чтобы иметь представление о
                возможных рисках и фактическом состоянии дел на предприятии.
              </p>
            </div>
          </section>

          <section className="case3-mobile-meta-flow">
            <div className="case3-mobile-meta-row">
              <span className="case3-mobile-meta-pill case3-mobile-meta-pill--dark">Клиент</span>
              <ul>
                <li>Строительная компания с обособленными подразделениями</li>
                <li>На ранке более 15 лет</li>
                <li>Штат более 200 сотрудников</li>
              </ul>
            </div>
            <span className="case3-mobile-meta-down">↓</span>
            <div className="case3-mobile-meta-row">
              <span className="case3-mobile-meta-pill case3-mobile-meta-pill--blue">Проект</span>
              <ul>
                <li>Инициативный экспресс-аудит для предварительной оценки состояния дел компании</li>
                <li>Оценка состояния и качества ведения бухгалтерского учета компании</li>
                <li>Организация ведения бухгалтерского учета</li>
                <li>Внедрение и автоматизация управленческого учета</li>
              </ul>
            </div>
            <span className="case3-mobile-meta-down">↓</span>
            <div className="case3-mobile-meta-row">
              <span className="case3-mobile-meta-pill case3-mobile-meta-pill--light">Результат</span>
              <ul>
                <li>Выявлены налоговые риски в размере 4,3 млн. рублей за предыдущий период.</li>
                <li>Предоставлены рекомендации по устранению ошибок в учете.</li>
                <li>Получена информация о возможных рисках в работе предприятия.</li>
              </ul>
            </div>
          </section>

          <section className="case3-mobile-problem">
            <div
              className="case3-mobile-problem-shell"
              style={{
                width: `${MOBILE_PROBLEM_FRAME_WIDTH * mobileProblemScale}px`,
                height: `${MOBILE_PROBLEM_FRAME_HEIGHT * mobileProblemScale}px`,
              }}
            >
              <div
                className="case3-mobile-problem-frame"
                style={{
                  width: `${MOBILE_PROBLEM_FRAME_WIDTH}px`,
                  transform: `scale(${mobileProblemScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case3-mobile-section-title">проблема</h2>
                <div className="case3-mobile-problem-card">
                  <p>
                    Вновь назначенный Генеральный директор инициировал аудиторскую проверку, чтобы иметь представление о
                    возможных рисках и фактическом состоянии дел на предприятии, так как он, как руководитель, несет
                    уголовную и административную ответственность за финансовую деятельность компании.
                  </p>
                </div>
                <img src={problemImage} alt="" className="case3-mobile-problem-image" />
              </div>
            </div>
          </section>

          <section className="case3-mobile-work">
            <div
              className="case3-mobile-work-shell"
              style={{
                width: `${MOBILE_WORK_FRAME_WIDTH * mobileWorkScale}px`,
                height: `${MOBILE_WORK_FRAME_HEIGHT * mobileWorkScale}px`,
              }}
            >
              <div
                className="case3-mobile-work-frame"
                style={{
                  width: `${MOBILE_WORK_FRAME_WIDTH}px`,
                  transform: `scale(${mobileWorkScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case3-mobile-section-title">ход работы</h2>
                <p className="case3-mobile-work-lead">В процессе проведения экспресс-аудита:</p>

                <article className="case3-mobile-task case3-mobile-task--1">
                  <p>не зарегистрировано обособленное подразделение по месту фактического выполнения работ;</p>
                </article>
                <article className="case3-mobile-task case3-mobile-task--2">
                  <p>отсутствует четко выстроенная организационная структура компании и регламентирующая документация;</p>
                </article>
                <article className="case3-mobile-task case3-mobile-task--3">
                  <p>нет системы контроллинга затрат, фактического выполнения и отклонений экономических показателей;</p>
                </article>
                <article className="case3-mobile-task case3-mobile-task--4">
                  <p>в бухгалтерском учете отсутствует система пообъектного учета затрат;</p>
                </article>
                <article className="case3-mobile-task case3-mobile-task--5">
                  <p>отсутствует план развития компании;</p>
                </article>
                <article className="case3-mobile-task case3-mobile-task--6">
                  <p>не выстроена система документооборота и сроки подготовки внутренней отчетности;</p>
                </article>
                <article className="case3-mobile-task case3-mobile-task--7">
                  <p>выявлены системные ошибки при ведении учета и уязвимость системы учета;</p>
                </article>
                <article className="case3-mobile-task case3-mobile-task--8">
                  <p>отсутствует система пообъектного планирования затрат.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="case3-mobile-recommendations">
            <div
              className="case3-mobile-recommendations-shell"
              style={{
                width: `${MOBILE_RECOMMENDATIONS_FRAME_WIDTH * mobileRecommendationsScale}px`,
                height: `${MOBILE_RECOMMENDATIONS_FRAME_HEIGHT * mobileRecommendationsScale}px`,
              }}
            >
              <div
                className="case3-mobile-recommendations-frame"
                style={{
                  width: `${MOBILE_RECOMMENDATIONS_FRAME_WIDTH}px`,
                  transform: `scale(${mobileRecommendationsScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case3-mobile-recommendations-title">Рекомендации</h2>
                <p className="case3-mobile-recommendations-lead">
                  Для обеспечения достоверности и своевременности информации, получаемой Руководителем и Собственником
                  Компании, а также для повышения эффективности деятельности Компании, специалистами МКР даны
                  рекомендации:
                </p>
                <div className="case3-mobile-recommendations-list">
                  <p>
                    <strong>1.</strong> Зарегистрировать обособленное подразделение.
                  </p>
                  <p>
                    <strong>2.</strong> Выполнить мероприятия по регламентации и формализации бизнес-процессов в
                    организации.
                  </p>
                  <p>
                    <strong>3.</strong> Оптимизировать и регламентировать работу подразделений, определить функционал и
                    подготовить должностные инструкции.
                  </p>
                  <p>
                    <strong>4.</strong> Внедрить систему управленческого учета (производственные и финансовые показатели)
                    и бюджетирования на базе 1С:
                  </p>
                  <ul>
                    <li>производственные отчеты и планы;</li>
                    <li>система нормирования;</li>
                    <li>система платежного календаря с согласованием заявок и контролем цен/объемов;</li>
                    <li>управленческие формы с детализациями по объектам и подразделениям.</li>
                  </ul>
                  <p>
                    <strong>5.</strong> Разработать и внедрить систему нормирования и контроля издержек затрат.
                  </p>
                  <p>
                    <strong>6.</strong> Выстроить систему бухгалтерского учета в разрезе пообъектного и постатейного
                    учета доходов и расходов на базе единого программного продукта 1С.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="case3-mobile-result">
            <div
              className="case3-mobile-result-shell"
              style={{
                width: `${MOBILE_RESULT_FRAME_WIDTH * mobileResultScale}px`,
                height: `${MOBILE_RESULT_FRAME_HEIGHT * mobileResultScale}px`,
              }}
            >
              <div
                className="case3-mobile-result-frame"
                style={{
                  width: `${MOBILE_RESULT_FRAME_WIDTH}px`,
                  transform: `scale(${mobileResultScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case3-mobile-result-title">Результат</h2>
                <p className="case3-mobile-result-text">
                  В результате проделанной работы вновь назначенное Руководство компании получило достоверную информацию
                  о фактическом состоянии дел в Компании, а также рекомендации по устранению имеющихся ошибок и налоговых
                  рисков.
                  <br />
                  <br />
                  Подготовлен рекомендуемый план мероприятий для создания эффективной системы управления предприятием.
                </p>
              </div>
            </div>
          </section>

          <MobileCaseExtraSection currentCaseId="case-initiative" onNavigate={onNavigate} onOpenCase={onOpenCase} />
        </main>

        <SharedFooter onNavigate={onNavigate} forceMobile />
      </div>
    );
  }

  return (
    <div className="case3-page">
      <main className="case3-main">
        <div className="case3-shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <div
            className="case3-frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <section className="case3-hero">
              <img src={heroImage} alt="" className="case3-hero-image" />
              <div className="case3-hero-overlay" />
              <h1 className="case3-hero-title">Инициативный экспресс-аудит строительной компании</h1>
              <p className="case3-hero-subtitle">
                Вновь назначенный Генеральный директор инициировал аудиторскую проверку, чтобы иметь представление о
                возможных рисках и фактическом состоянии дел на предприятии.
              </p>
            </section>

            <section className="case3-meta">
              <div className="case3-chip case3-chip--dark">Клиент</div>
              <div className="case3-chip case3-chip--blue">Проект</div>
              <div className="case3-chip case3-chip--light">Результат</div>

              <div className="case3-list case3-list--client">
                <ul>
                  <li>Строительная компания с обособленными подразделениями</li>
                  <li>На ранке более 15 лет</li>
                  <li>Штат более 200 сотрудников</li>
                </ul>
              </div>

              <div className="case3-list case3-list--project">
                <ul>
                  <li>Инициативный экспресс-аудит для предварительной оценки состояния дел компании</li>
                  <li>Оценка состояния и качества ведения бухгалтерского учета компании</li>
                  <li>Организация ведения бухгалтерского учета</li>
                  <li>Внедрение и автоматизация управленческого учета</li>
                </ul>
              </div>

              <div className="case3-list case3-list--result">
                <ul>
                  <li>Выявлены налоговые риски в размере 4,3 млн. рублей за предыдущий период.</li>
                  <li>Предоставлены рекомендации по устранению ошибок в учете.</li>
                  <li>Получена информация о возможных рисках в работе предприятия.</li>
                </ul>
              </div>

              <span className="case3-meta-arrow case3-meta-arrow--1">→</span>
              <span className="case3-meta-arrow case3-meta-arrow--2">→</span>
            </section>

            <section className="case3-problem">
              <h2 className="case3-section-title">проблема</h2>
              <div className="case3-problem-card">
                <p>
                  Вновь назначенный Генеральный директор инициировал аудиторскую проверку, чтобы иметь представление о
                  возможных рисках и фактическом состоянии дел на предприятии, так как он, как руководитель, несет
                  уголовную и административную ответственность за финансовую деятельность компании.
                </p>
              </div>
              <img src={problemImage} alt="" className="case3-problem-image" />
            </section>

            <section className="case3-work">
              <h2 className="case3-section-title">ход работы</h2>
              <p className="case3-work-lead">В процессе проведения экспресс-аудита:</p>

              <article className="case3-task case3-task--1">
                <p>не зарегистрировано обособленное подразделение по месту фактического выполнения работ;</p>
              </article>
              <article className="case3-task case3-task--2">
                <p>отсутствует четко выстроенная организационная структура компании и регламентирующая документация;</p>
              </article>
              <article className="case3-task case3-task--3">
                <p>нет системы контроллинга затрат, фактического выполнения и отклонений экономических показателей;</p>
              </article>
              <article className="case3-task case3-task--4">
                <p>в бухгалтерском учете отсутствует система пообъектного учета затрат;</p>
              </article>
              <article className="case3-task case3-task--5">
                <p>отсутствует план развития компании;</p>
              </article>
              <article className="case3-task case3-task--6">
                <p>не выстроена система документооборота и сроки подготовки внутренней отчетности;</p>
              </article>
              <article className="case3-task case3-task--7">
                <p>выявлены системные ошибки при ведении учета и уязвимость системы учета;</p>
              </article>
              <article className="case3-task case3-task--8">
                <p>отсутствует система пообъектного планирования затрат.</p>
              </article>
            </section>

            <section className="case3-recommendations">
              <h2 className="case3-recommendations-title">Рекомендации</h2>
              <p className="case3-recommendations-lead">
                Для обеспечения достоверности и своевременности информации, получаемой Руководителем и Собственником
                Компании, а также для повышения эффективности деятельности Компании, специалистами МКР даны
                рекомендации:
              </p>
              <div className="case3-recommendations-list">
                <p>
                  <strong>1.</strong> Зарегистрировать обособленное подразделение.
                </p>
                <p>
                  <strong>2.</strong> Выполнить мероприятия по регламентации и формализации бизнес-процессов в
                  организации.
                </p>
                <p>
                  <strong>3.</strong> Оптимизировать и регламентировать работу подразделений, определить функционал и
                  подготовить должностные инструкции.
                </p>
                <p>
                  <strong>4.</strong> Внедрить систему управленческого учета (производственные и финансовые показатели)
                  и бюджетирования на базе 1С.
                </p>
                <ul>
                  <li>производственные отчеты и планы;</li>
                  <li>система нормирования;</li>
                  <li>система платежного календаря с согласованием заявок и контролем цен/объемов;</li>
                  <li>управленческие формы с детализациями по объектам и подразделениям.</li>
                </ul>
                <p>
                  <strong>5.</strong> Разработать и внедрить систему нормирования и контроля издержек затрат.
                </p>
                <p>
                  <strong>6.</strong> Выстроить систему бухгалтерского учета в разрезе пообъектного и постатейного учета
                  доходов и расходов на базе единого программного продукта 1С.
                </p>
              </div>
            </section>

            <section className="case3-result">
              <h2 className="case3-result-title">Результат</h2>
              <p className="case3-result-text">
                В результате проделанной работы вновь назначенное Руководство компании получило достоверную информацию о
                фактическом состоянии дел в Компании, а также рекомендации по устранению имеющихся ошибок и налоговых
                рисков.
                <br />
                <br />
                Подготовлен рекомендуемый план мероприятий для создания эффективной системы управления предприятием.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
