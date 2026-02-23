import { useEffect, useMemo, useState } from 'react';
import './CaseAutomationOpsPage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';
import MobileCaseExtraSection from './MobileCaseExtraSection';
import type { CaseId } from './caseDetailsData';
import getViewportWidth from './getViewportWidth';

const heroImage = '/assets/b2b736d622a11a57c36aed328ad4b3329851a19d.png';
const situationImage = '/assets/case-situation-warning-clean.png';

const FRAME_WIDTH = 1400;
const FRAME_HEIGHT = 4059;

type CaseAutomationOpsPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenCase: (caseId: CaseId) => void;
};

const MOBILE_LAYOUT_BREAKPOINT = 1200;
const MOBILE_HERO_HEIGHT = 760;
const MOBILE_SITUATION_FRAME_WIDTH = 1080;
const MOBILE_SITUATION_FRAME_HEIGHT = 1080;
const MOBILE_PROBLEM_FRAME_WIDTH = 1080;
const MOBILE_PROBLEM_FRAME_HEIGHT = 1880;
const MOBILE_RECOMMENDATIONS_FRAME_WIDTH = 1080;
const MOBILE_RECOMMENDATIONS_FRAME_HEIGHT = 1400;
const MOBILE_RESULT_FRAME_WIDTH = 1080;
const MOBILE_RESULT_FRAME_HEIGHT = 760;

export default function CaseAutomationOpsPage({ onNavigate, onOpenCase }: CaseAutomationOpsPageProps) {
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

  const mobileSituationScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_SITUATION_FRAME_WIDTH;
  }, [viewportWidth]);

  const mobileProblemScale = useMemo(() => {
    if (viewportWidth <= 0) {
      return 1;
    }
    return viewportWidth / MOBILE_PROBLEM_FRAME_WIDTH;
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
      <div className="case4-page">
        <main className="case4-main">
          <section className="case4-mobile-fixed-hero" style={{ height: `${MOBILE_HERO_HEIGHT}px` }}>
            <img src={heroImage} alt="" className="case4-mobile-fixed-hero-image" />
            <div className="case4-mobile-fixed-hero-overlay" />
            <div className="case4-mobile-fixed-hero-content">
              <h1 className="case4-mobile-fixed-hero-title">Автоматизация бухгалтерского, производственного и управленческого учета</h1>
              <p className="case4-mobile-fixed-hero-subtitle">
                Автоматизация бухгалтерского, производственного и управленческого учета на едином информационном продукте с
                доработкой программного продукта под индивидуальные задачи заказчика
              </p>
            </div>
          </section>

          <section className="case4-mobile-meta-flow">
            <div className="case4-mobile-meta-row">
              <span className="case4-mobile-meta-pill case4-mobile-meta-pill--dark">Клиент</span>
              <ul>
                <li>Группа компаний (индустрия рекламы)</li>
                <li>На рынке более 10 лет</li>
                <li>Штат более 100 сотрудников</li>
              </ul>
            </div>
            <span className="case4-mobile-meta-down">↓</span>
            <div className="case4-mobile-meta-row">
              <span className="case4-mobile-meta-pill case4-mobile-meta-pill--blue">Проект</span>
              <ul>
                <li>
                  Автоматизация бухгалтерского, производственного и управленческого учета на едином информационном продукте
                  с доработкой программного продукта под индивидуальные задачи заказчика
                </li>
                <li>Срок реализации — 1 год</li>
              </ul>
            </div>
            <span className="case4-mobile-meta-down">↓</span>
            <div className="case4-mobile-meta-row">
              <span className="case4-mobile-meta-pill case4-mobile-meta-pill--light">Результат</span>
              <ul>
                <li>Индивидуальный программный продукт, соответствующий задачам бизнеса</li>
                <li>Повышение эффективности и производительности служб компании</li>
                <li>Оптимизация численности персонала</li>
                <li>Доступная система контроля финансовых показателей</li>
              </ul>
            </div>
          </section>

          <section className="case4-mobile-situation">
            <div
              className="case4-mobile-situation-shell"
              style={{
                width: `${MOBILE_SITUATION_FRAME_WIDTH * mobileSituationScale}px`,
                height: `${MOBILE_SITUATION_FRAME_HEIGHT * mobileSituationScale}px`,
              }}
            >
              <div
                className="case4-mobile-situation-frame"
                style={{
                  width: `${MOBILE_SITUATION_FRAME_WIDTH}px`,
                  transform: `scale(${mobileSituationScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case4-mobile-section-title">ситуация</h2>
                <div className="case4-mobile-situation-card">
                  <p>
                    Руководствуясь рекомендациями, полученными по итогам проведения Экспресс-аудита (Кейс №1.1),
                    Собственником группы компаний было принято решение об автоматизации бухгалтерского, производственного и
                    управленческого учета на едином информационном продукте с доработкой программного продукта под
                    индивидуальные задачи группы компаний.
                  </p>
                </div>
                <img src={situationImage} alt="" className="case4-mobile-situation-image" />
              </div>
            </div>
          </section>

          <section className="case4-mobile-problem">
            <div
              className="case4-mobile-problem-shell"
              style={{
                width: `${MOBILE_PROBLEM_FRAME_WIDTH * mobileProblemScale}px`,
                height: `${MOBILE_PROBLEM_FRAME_HEIGHT * mobileProblemScale}px`,
              }}
            >
              <div
                className="case4-mobile-problem-frame"
                style={{
                  width: `${MOBILE_PROBLEM_FRAME_WIDTH}px`,
                  transform: `scale(${mobileProblemScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case4-mobile-section-title">проблема</h2>
                <p className="case4-mobile-problem-lead">Основной причиной неэффективной работы и существенных потерь являлось:</p>

                <article className="case4-mobile-problem-card case4-mobile-problem-card--1">
                  <span className="case4-mobile-problem-num">1</span>
                  <p>Дублирование функций по вводу данных несколькими специалистами Компании</p>
                </article>

                <article className="case4-mobile-problem-card case4-mobile-problem-card--2">
                  <span className="case4-mobile-problem-num">2</span>
                  <p>Двойной учет и регистрация документов в различных информационных системах</p>
                </article>

                <article className="case4-mobile-problem-card case4-mobile-problem-card--3">
                  <span className="case4-mobile-problem-num">3</span>
                  <p>Замена приходных комплектов документов от Поставщика</p>
                </article>

                <article className="case4-mobile-problem-card case4-mobile-problem-card--4">
                  <span className="case4-mobile-problem-num">4</span>
                  <p>Перевыставление отгрузочных комплектов документов после проведения фактической отгрузки</p>
                </article>

                <article className="case4-mobile-problem-card case4-mobile-problem-card--5">
                  <span className="case4-mobile-problem-num">5</span>
                  <p>Все отгрузочные документы оформляются в системе Excel</p>
                </article>
              </div>
            </div>
          </section>

          <section className="case4-mobile-recommendations">
            <div
              className="case4-mobile-recommendations-shell"
              style={{
                width: `${MOBILE_RECOMMENDATIONS_FRAME_WIDTH * mobileRecommendationsScale}px`,
                height: `${MOBILE_RECOMMENDATIONS_FRAME_HEIGHT * mobileRecommendationsScale}px`,
              }}
            >
              <div
                className="case4-mobile-recommendations-frame"
                style={{
                  width: `${MOBILE_RECOMMENDATIONS_FRAME_WIDTH}px`,
                  transform: `scale(${mobileRecommendationsScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case4-mobile-recommendations-title">Рекомендации</h2>
                <p className="case4-mobile-recommendations-lead">Основные этапы работ:</p>

                <div className="case4-mobile-recommendations-content">
                  <p>
                    <strong>1.</strong> Подготовка к автоматизации:
                  </p>
                  <ul>
                    <li>Проведение сессии с целью изучения бизнес-процессов компании</li>
                    <li>
                      Разработка организационной структуры и регламентов взаимодействия служб/отделов, центров
                      ответственности
                    </li>
                    <li>Адаптация программного продукта (ERP) под индивидуальные задачи заказчика</li>
                    <li>
                      Разработка индивидуального блока для ведения документооборота с целью повышения эффективности работы
                      финансовой службы
                    </li>
                  </ul>
                  <p>
                    <strong>2.</strong> Разработать и внедрить системы нормирования и контроля издержек затрат:
                  </p>
                  <ul>
                    <li>Полностью оптимизировать бизнес-процессы предприятия</li>
                    <li>
                      Грамотно выстроить организационную структуру предприятия с учетом объемов и специфики выполняемых
                      работ
                    </li>
                    <li>
                      Выстроить систему учета затрат в соответствии с бизнес-процессами предприятия и ответственностью
                      конкретных лиц
                    </li>
                    <li>Выстроить систему контроля издержек производства</li>
                    <li>Повысить эффективное взаимодействие между подразделениями и службами предприятия</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="case4-mobile-result">
            <div
              className="case4-mobile-result-shell"
              style={{
                width: `${MOBILE_RESULT_FRAME_WIDTH * mobileResultScale}px`,
                height: `${MOBILE_RESULT_FRAME_HEIGHT * mobileResultScale}px`,
              }}
            >
              <div
                className="case4-mobile-result-frame"
                style={{
                  width: `${MOBILE_RESULT_FRAME_WIDTH}px`,
                  transform: `scale(${mobileResultScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <h2 className="case4-mobile-result-title">Результат</h2>
                <p className="case4-mobile-result-lead">
                  Заказчик получил индивидуальный программный продукт, соответствующий задачам бизнеса, внедрение которого
                  позволило:
                </p>
                <div className="case4-mobile-result-list">
                  <ul>
                    <li>Существенно повысить эффективность работы финансовой службы (40% рабочего времени)</li>
                    <li>Уйти от двойного учета (применение нескольких программных продуктов)</li>
                    <li>Исключить дублирующие функции специалистов Компании</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <MobileCaseExtraSection currentCaseId="case-automation-1" onNavigate={onNavigate} onOpenCase={onOpenCase} />
        </main>

        <SharedFooter onNavigate={onNavigate} forceMobile />
      </div>
    );
  }

  return (
    <div className="case4-page">
      <main className="case4-main">
        <div className="case4-shell" style={{ width: `${FRAME_WIDTH * scale}px`, height: `${FRAME_HEIGHT * scale}px` }}>
          <div
            className="case4-frame"
            style={{
              width: `${FRAME_WIDTH}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <section className="case4-hero">
              <img src={heroImage} alt="" className="case4-hero-image" />
              <div className="case4-hero-overlay" />
              <h1 className="case4-hero-title">Автоматизация бухгалтерского, производственного и управленческого учета</h1>
              <p className="case4-hero-kicker">Кейс 1.2</p>
              <p className="case4-hero-subtitle">
                Автоматизация бухгалтерского, производственного и управленческого учета на едином информационном продукте с
                доработкой программного продукта под индивидуальные задачи заказчика
              </p>
            </section>

            <section className="case4-meta">
              <div className="case4-chip case4-chip--dark">Клиент</div>
              <div className="case4-chip case4-chip--blue">Проект</div>
              <div className="case4-chip case4-chip--light">Результат</div>

              <div className="case4-list case4-list--client">
                <ul>
                  <li>Группа компаний (индустрия рекламы)</li>
                  <li>На рынке более 10 лет</li>
                  <li>Штат более 100 сотрудников</li>
                </ul>
              </div>

              <div className="case4-list case4-list--project">
                <ul>
                  <li>
                    Автоматизация бухгалтерского, производственного и управленческого учета на едином информационном
                    продукте с доработкой программного продукта под индивидуальные задачи заказчика
                  </li>
                  <li>Срок реализации — 1 год</li>
                </ul>
              </div>

              <div className="case4-list case4-list--result">
                <ul>
                  <li>Индивидуальный программный продукт, соответствующий задачам бизнеса</li>
                  <li>Повышение эффективности и производительности служб компании</li>
                  <li>Оптимизация численности персонала</li>
                  <li>Доступная система контроля финансовых показателей</li>
                </ul>
              </div>

              <span className="case4-meta-arrow case4-meta-arrow--1">→</span>
              <span className="case4-meta-arrow case4-meta-arrow--2">→</span>
            </section>

            <section className="case4-situation">
              <h2 className="case4-section-title">ситуация</h2>
              <div className="case4-situation-card">
                <p>
                  Руководствуясь рекомендациями, полученными по итогам проведения Экспресс-аудита (Кейс №1.1), Собственником
                  группы компаний было принято решение об автоматизации бухгалтерского, производственного и управленческого
                  учета на едином информационном продукте с доработкой программного продукта под индивидуальные задачи
                  группы компаний.
                </p>
              </div>
              <img src={situationImage} alt="" className="case4-situation-image" />
            </section>

            <section className="case4-problem">
              <h2 className="case4-section-title">проблема</h2>
              <p className="case4-problem-lead">Основной причиной неэффективной работы и существенных потерь являлось:</p>

              <article className="case4-problem-card case4-problem-card--1">
                <span className="case4-problem-num">1</span>
                <p>Дублирование функций по вводу данных несколькими специалистами Компании</p>
              </article>

              <article className="case4-problem-card case4-problem-card--2">
                <span className="case4-problem-num">2</span>
                <p>Двойной учет и регистрация документов в различных информационных системах</p>
              </article>

              <article className="case4-problem-card case4-problem-card--3">
                <span className="case4-problem-num">3</span>
                <p>Замена приходных комплектов документов от Поставщика</p>
              </article>

              <article className="case4-problem-card case4-problem-card--4">
                <span className="case4-problem-num">4</span>
                <p>Перевыставление отгрузочных комплектов документов после проведения фактической отгрузки</p>
              </article>

              <article className="case4-problem-card case4-problem-card--5">
                <span className="case4-problem-num">5</span>
                <p>Все отгрузочные документы оформляются в системе Excel</p>
              </article>
            </section>

            <section className="case4-recommendations">
              <h2 className="case4-recommendations-title">Рекомендации</h2>
              <p className="case4-recommendations-lead">Основные этапы работ:</p>

              <div className="case4-recommendations-content">
                <p>
                  <strong>1.</strong> Подготовка к автоматизации:
                </p>
                <ul>
                  <li>Проведение сессии с целью изучения бизнес-процессов компании</li>
                  <li>
                    Разработка организационной структуры и регламентов взаимодействия служб/отделов, центров
                    ответственности
                  </li>
                  <li>Адаптация программного продукта (ERP) под индивидуальные задачи заказчика</li>
                  <li>
                    Разработка индивидуального блока для ведения документооборота с целью повышения эффективности работы
                    финансовой службы
                  </li>
                </ul>

                <p>
                  <strong>2.</strong> Разработать и внедрить системы нормирования и контроля издержек затрат:
                </p>
                <ul>
                  <li>Полностью оптимизировать бизнес-процессы предприятия</li>
                  <li>
                    Грамотно выстроить организационную структуру предприятия с учетом объемов и специфики выполняемых работ
                  </li>
                  <li>
                    Выстроить систему учета затрат в соответствии с бизнес-процессами предприятия и ответственностью
                    конкретных лиц
                  </li>
                  <li>Выстроить систему контроля издержек производства</li>
                  <li>Повысить эффективное взаимодействие между подразделениями и службами предприятия</li>
                </ul>
              </div>
            </section>

            <section className="case4-result">
              <h2 className="case4-result-title">Результат</h2>
              <p className="case4-result-lead">
                Заказчик получил индивидуальный программный продукт, соответствующий задачам бизнеса, внедрение которого
                позволило:
              </p>
              <div className="case4-result-list">
                <ul>
                  <li>Существенно повысить эффективность работы финансовой службы (40% рабочего времени)</li>
                  <li>Уйти от двойного учета (применение нескольких программных продуктов)</li>
                  <li>Исключить дублирующие функции специалистов Компании</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
