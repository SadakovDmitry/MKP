import { useEffect, useMemo, useState } from 'react';
import './CaseRecoveryPage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import MobileCaseExtraSection from './MobileCaseExtraSection';
import type { CaseId } from './caseDetailsData';

const heroImage = '/assets/b2a669d0351f584ebef2df816f31f342aa1ce334.png';
const problemImage = '/assets/case-situation-warning-clean.png';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 3200;

type CaseRecoveryPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
};

const MOBILE_LAYOUT_BREAKPOINT = 1200;
const MOBILE_HERO_HEIGHT = 760;
const MOBILE_PROBLEM_FRAME_WIDTH = 1080;
const MOBILE_PROBLEM_FRAME_HEIGHT = 1320;
const MOBILE_WORK_FRAME_WIDTH = 1080;
const MOBILE_WORK_FRAME_HEIGHT = 2040;
const MOBILE_RESULT_FRAME_WIDTH = 1080;
const MOBILE_RESULT_FRAME_HEIGHT = 980;

export default function CaseRecoveryPage({ onNavigate, onOpenCase }: CaseRecoveryPageProps) {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
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

  const mobileResultScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_RESULT_FRAME_WIDTH;
  }, [viewportWidth]);

  const isMobileLayout = viewportWidth > 0 && viewportWidth < MOBILE_LAYOUT_BREAKPOINT;

  if (isMobileLayout) {
    return (
      <div className="case2-page">
        <main className="case2-main">
          <section className="case2-mobile-fixed-hero" style={{ height: `${MOBILE_HERO_HEIGHT}px` }}>
            <img src={heroImage} alt="" className="case2-mobile-fixed-hero-image" />
            <div className="case2-mobile-fixed-hero-overlay" />
            <div className="case2-mobile-fixed-hero-content">
              <h1 className="case2-mobile-fixed-hero-title">Восстановление учета в строительной компании</h1>
              <p className="case2-mobile-fixed-hero-subtitle">
                Руководитель компании столкнулся с проблемой: нет возможности получить достоверную информацию по каждому
                объекту строительства.
              </p>
            </div>
          </section>

          <section className="case2-mobile-meta-flow">
            <div className="case2-mobile-meta-row">
              <span className="case2-mobile-meta-pill case2-mobile-meta-pill--dark">Клиент</span>
              <ul>
                <li>Строительная компания</li>
                <li>На рынке более 5 лет</li>
                <li>Штат более 150 сотрудников</li>
              </ul>
            </div>
            <span className="case2-mobile-meta-down">↓</span>
            <div className="case2-mobile-meta-row">
              <span className="case2-mobile-meta-pill case2-mobile-meta-pill--blue">Проект</span>
              <ul>
                <li>Инициативный экспресс-аудит для оценки качества ведения бухгалтерского учета компании.</li>
                <li>Восстановление бухгалтерского учета.</li>
                <li>Организация ведения бухгалтерского учета.</li>
                <li>Внедрение управленческого учета, пообъектный учет.</li>
              </ul>
            </div>
            <span className="case2-mobile-meta-down">↓</span>
            <div className="case2-mobile-meta-row">
              <span className="case2-mobile-meta-pill case2-mobile-meta-pill--light">Результат</span>
              <ul>
                <li>Восстановлен бухгалтерский учет за 1,5 года.</li>
                <li>Снижены налоговые риски на сумму 4,5 млн. рублей за предыдущий период.</li>
                <li>
                  Налажена отчетность для получения достоверного финансового результата по компании в целом и по каждому
                  объекту строительства.
                </li>
                <li>Получена информация о возможных рисках в работе предприятия.</li>
              </ul>
            </div>
          </section>

          <section className="case2-mobile-problem">
            <div
              className="case2-mobile-problem-shell"
              style={{
                width: `${MOBILE_PROBLEM_FRAME_WIDTH * mobileProblemScale}px`,
                height: `${MOBILE_PROBLEM_FRAME_HEIGHT * mobileProblemScale}px`,
              }}
            >
              <div
                className="case2-mobile-problem-frame"
                style={{
                  width: `${MOBILE_PROBLEM_FRAME_WIDTH}px`,
                  transform: `scale(${mobileProblemScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case2-mobile-section-title">проблема</h2>
                <div className="case2-mobile-problem-card">
                  <p>
                    Руководитель компании столкнулся с проблемой: он не смог получить достоверную информацию по
                    конкретному объекту строительства.
                    <br />
                    <br />
                    Пока объектов было не много, это не казалось для Руководителя столь важным. С ростом компании
                    увеличились обороты, появились «кассовые разрывы», а достоверные данные по каждому объекту
                    строительства от специалистов стало получить просто невозможно.
                  </p>
                </div>
                <img src={problemImage} alt="" className="case2-mobile-problem-image" />
              </div>
            </div>
          </section>

          <section className="case2-mobile-work">
            <div
              className="case2-mobile-work-shell"
              style={{
                width: `${MOBILE_WORK_FRAME_WIDTH * mobileWorkScale}px`,
                height: `${MOBILE_WORK_FRAME_HEIGHT * mobileWorkScale}px`,
              }}
            >
              <div
                className="case2-mobile-work-frame"
                style={{
                  width: `${MOBILE_WORK_FRAME_WIDTH}px`,
                  transform: `scale(${mobileWorkScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case2-mobile-section-title">ход работы</h2>
                <p className="case2-mobile-work-lead">В процессе проведения экспресс-аудита:</p>

                <article className="case2-mobile-task case2-mobile-task--1">
                  <p>Выявлены системные ошибки при ведении учета и уязвимость системы учета;</p>
                </article>
                <article className="case2-mobile-task case2-mobile-task--2">
                  <p>В бухгалтерском учете отсутствует система пообъектного учета затрат;</p>
                </article>
                <article className="case2-mobile-task case2-mobile-task--3">
                  <p>Налоговые риски компании оцениваются как крайне высокие.</p>
                </article>
                <article className="case2-mobile-task case2-mobile-task--4">
                  <p>Учет велся котловым методом;</p>
                </article>
                <article className="case2-mobile-task case2-mobile-task--5">
                  <p>Нет системы контроля за затратами;</p>
                </article>
                <article className="case2-mobile-task case2-mobile-task--6">
                  <p>
                    Несвоевременно списывались материалы, что не позволяло видеть достоверную информацию по объектам
                    строительства; выявлены нарушения в ведении учета, недостоверно отображались данные, не уделялось
                    должное внимание качеству предоставляемой первичной документации.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="case2-mobile-result">
            <div
              className="case2-mobile-result-shell"
              style={{
                width: `${MOBILE_RESULT_FRAME_WIDTH * mobileResultScale}px`,
                height: `${MOBILE_RESULT_FRAME_HEIGHT * mobileResultScale}px`,
              }}
            >
              <div
                className="case2-mobile-result-frame"
                style={{
                  width: `${MOBILE_RESULT_FRAME_WIDTH}px`,
                  transform: `scale(${mobileResultScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case2-mobile-result-title">результат</h2>
                <p className="case2-mobile-result-text">
                  В результате проведенной проверки Собственником компании было принято решение о{' '}
                  <strong>приведении в соответствие качества учета</strong>.
                  <br />
                  <br />
                  Специалистами ООО «МКР» <strong>проведена полная проверка</strong> и приведен в соответствие учет и
                  отчетность компании за предшествующие полтора года.
                  <br />
                  <br />
                  Снижены налоговые риски <strong>на сумму 4,5 млн. руб</strong>
                  <br />
                  <br />
                  Строительная компания продолжила сотрудничество с нашей компанией и перешла{' '}
                  <strong>на полное бухгалтерское сопровождение к ООО «МКР»</strong>.
                </p>
              </div>
            </div>
          </section>

          <MobileCaseExtraSection currentCaseId="case-recovery" onNavigate={onNavigate} onOpenCase={onOpenCase} />
        </main>

        <SharedFooter onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="case2-page">
      <main className="case2-main">
        <div className="case2-shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <div
            className="case2-frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <section className="case2-hero">
              <img src={heroImage} alt="" className="case2-hero-image" />
              <div className="case2-hero-overlay" />
              <h1 className="case2-hero-title">Восстановление учета в строительной компании</h1>
              <p className="case2-hero-subtitle">
                Руководитель компании столкнулся с проблемой: нет возможности получить достоверную информацию по каждому
                объекту строительства.
              </p>
            </section>

            <section className="case2-meta">
              <div className="case2-chip case2-chip--dark">Клиент</div>
              <div className="case2-chip case2-chip--blue">Проект</div>
              <div className="case2-chip case2-chip--light">Результат</div>

              <div className="case2-list case2-list--client">
                <ul>
                  <li>Строительная компания</li>
                  <li>На рынке более 5 лет</li>
                  <li>Штат более 150 сотрудников</li>
                </ul>
              </div>

              <div className="case2-list case2-list--project">
                <ul>
                  <li>Инициативный экспресс-аудит для оценки качества ведения бухгалтерского учета компании.</li>
                  <li>Восстановление бухгалтерского учета.</li>
                  <li>Организация ведения бухгалтерского учета.</li>
                  <li>Внедрение управленческого учета, пообъектный учет.</li>
                </ul>
              </div>

              <div className="case2-list case2-list--result">
                <ul>
                  <li>Восстановлен бухгалтерский учет за 1,5 года.</li>
                  <li>Снижены налоговые риски на сумму 4,5 млн. рублей за предыдущий период.</li>
                  <li>
                    Налажена отчетность для получения достоверного финансового результата по компании в целом и по
                    каждому объекту строительства.
                  </li>
                  <li>Получена информация о возможных рисках в работе предприятия.</li>
                </ul>
              </div>

              <span className="case2-meta-arrow case2-meta-arrow--1">→</span>
              <span className="case2-meta-arrow case2-meta-arrow--2">→</span>
            </section>

            <section className="case2-problem">
              <h2 className="case2-section-title">проблема</h2>
              <div className="case2-problem-card">
                <p>
                  Руководитель компании столкнулся с проблемой: он не смог получить достоверную информацию по
                  конкретному объекту строительства.
                  <br />
                  <br />
                  Пока объектов было не много, это не казалось для Руководителя столь важным. С ростом компании
                  увеличились обороты, появились «кассовые разрывы», а достоверные данные по каждому объекту
                  строительства от специалистов стало получить просто невозможно.
                </p>
              </div>
              <img src={problemImage} alt="" className="case2-problem-image" />
            </section>

            <section className="case2-work">
              <h2 className="case2-section-title">ход работы</h2>
              <p className="case2-work-lead">В процессе проведения экспресс-аудита:</p>

              <article className="case2-task case2-task--1">
                <p>Выявлены системные ошибки при ведении учета и уязвимость системы учета;</p>
              </article>
              <article className="case2-task case2-task--2">
                <p>В бухгалтерском учете отсутствует система пообъектного учета затрат;</p>
              </article>
              <article className="case2-task case2-task--3">
                <p>Налоговые риски компании оцениваются как крайне высокие.</p>
              </article>
              <article className="case2-task case2-task--4">
                <p>Учет велся котловым методом;</p>
              </article>
              <article className="case2-task case2-task--5">
                <p>Нет системы контроля за затратами;</p>
              </article>
              <article className="case2-task case2-task--6">
                <p>
                  Несвоевременно списывались материалы, что не позволяло видеть достоверную информацию по объектам
                  строительства; выявлены нарушения в ведении учета, недостоверно отображались данные, не уделялось
                  должное внимание качеству предоставляемой первичной документации.
                </p>
              </article>
            </section>

            <section className="case2-solution">
              <h2 className="case2-section-title case2-section-title--dark">результат</h2>
              <p className="case2-solution-text">
                В результате проведенной проверки Собственником компании было принято решение о{' '}
                <strong>приведении в соответствие качества учета</strong>.
                <br />
                <br />
                Специалистами ООО «МКР» <strong>проведена полная проверка</strong> и приведен в соответствие учет и
                отчетность компании за предшествующие полтора года.
                <br />
                <br />
                Снижены налоговые риски <strong>на сумму 4,5 млн. руб</strong>
                <br />
                <br />
                Строительная компания продолжила сотрудничество с нашей компанией и перешла{' '}
                <strong>на полное бухгалтерское сопровождение к ООО «МКР»</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
