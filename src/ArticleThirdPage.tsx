import './ArticleThirdPage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';

const imgHero = '/assets/news-figma-article-tax.png';
const imgArticleOutsource = '/assets/news-figma-article-outsource.png';
const imgArticleLiability = '/assets/news-figma-article-liability.png';

type ArticleThirdPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenArticle: (page: 'article-1' | 'article-2' | 'article-3') => void;
};

const INTRO_PARAGRAPHS = [
  'Задача любого государства — увеличить собираемость налогов. Задача же коммерческих организаций состоит в обратном - заплатить как можно меньше налогов максимально снизив уровень налоговой нагрузки (при этом спать спокойно). Стремление к уменьшению налоговых обязательств является вполне понятным желанием собственника или руководителя в любом бизнесе.',
  'Оптимизация налоговой нагрузки — это снижение налоговой нагрузки наиболее подходящими для этого инструментами финансового планирования в рамках существующего налогового законодательства РФ.',
  'Если совсем проще, то Оптимизация налоговой нагрузки предприятия — это снижение легальными способами и методами налоговых обязательств Компании.',
];

type Section = {
  heading: string;
  lines: string[];
};

const SECTIONS: Section[] = [
  {
    heading: '1. Для чего это нужно',
    lines: [
      '1.1. Уменьшение фактического размера уплаченных компанией налогов.',
      '1.2. Повышение финансовой безопасности на предприятии (уход от рисков в виде налоговых санкций).',
      '1.3. Увеличение доходности бизнеса и стимулирования его к дальнейшему развитию.',
    ],
  },
  {
    heading: '2. Способы оптимизации',
    lines: [
      '2.1. Законные.',
      '2.2. Незаконные (сразу отметим, мы руководствуемся только легальными способами).',
    ],
  },
  {
    heading: '3. Методы оптимизации',
    lines: [
      '3.1. Налоговое планирование (перспективное, долгосрочное) или тактическое (текущее, короткое - в моменте для конкретного случая).',
      '3.2. Изменение места налоговой юрисдикции, или территории регистрации бизнеса. Снижения налоговой нагрузки за счет несовершенства и не стыковки налоговых систем разных стран, так называемого агрессивного налогового планирования. Это для групп компаний, у которых предприятия открыты в разных царствах-государствах.',
      '3.3. Использование специальных налоговых режимов для целей оптимизации налоговой нагрузки.',
      '3.4. Трансформация видов деятельности компании на такие, которые облагаются налогами в гораздо меньшем объеме.',
      '3.5. Совершенствование учетной политики.',
    ],
  },
  {
    heading: '4. Результат и выгода компании',
    lines: [
      '4.1. Финансовая устойчивость бизнеса.',
      '4.2. Увеличение величины оборотных средств.',
      '4.3. Минимизация налоговых выплат (в долгосрочном и краткосрочном периодах при любом объеме деятельности) и недопущение штрафных санкций со стороны налоговых (фискальных) органов.',
      'Если Вы хотите внедрить систему налогового планирования у себя в компании, наши специалисты помогут Вам в этом.',
    ],
  },
];

type RelatedArticle = {
  title: string;
  date: string;
  image: string;
  imageModifier?: string;
  target: 'article-1' | 'article-2' | 'article-3' | 'news';
};

const RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: 'Бухгалтерский\nи наловой консалтинг',
    date: '08.04.2019',
    image: imgArticleOutsource,
    imageModifier: 'article-third-related__image--first',
    target: 'article-1',
  },
  {
    title: 'Субсидиарная ответственность-\nмифы и реальность',
    date: '01.03.2019',
    image: imgArticleLiability,
    imageModifier: 'article-third-related__image--second',
    target: 'article-2',
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="article-third-related__arrow-svg">
      <path d="M2.5 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RelatedMoreButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="article-third-related__more" aria-label="Подробнее" onClick={onClick}>
      <span className="article-third-related__more-text">Подробнее</span>
      <span className="article-third-related__more-icon">
        <ArrowIcon />
      </span>
    </button>
  );
}

export default function ArticleThirdPage({ onNavigate, onOpenArticle }: ArticleThirdPageProps) {
  return (
    <div className="article-third-page">
      <main className="article-third-page__main">
        <section className="article-third-hero">
          <img src={imgHero} alt="" className="article-third-hero__image" />
          <div className="article-third-hero__overlay" />
          <h1 className="article-third-hero__title">Оптимизация налоговой нагрузки компании</h1>
          <p className="article-third-hero__date">01.04.2019</p>
        </section>

        <section className="article-third-content">
          <div className="article-third-content__inner">
            <div className="article-third-content__intro">
              {INTRO_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="article-third-content__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="article-third-content__sections">
              {SECTIONS.map((section) => (
                <article key={section.heading} className="article-third-content__section">
                  <h2 className="article-third-content__section-title">{section.heading}</h2>
                  {section.lines.map((line, index) => (
                    <p key={index} className="article-third-content__paragraph">
                      {line}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="article-third-related">
          <h2 className="article-third-related__title">другие статьи</h2>
          <div className="article-third-related__cards">
            {RELATED_ARTICLES.map((article) => (
              <article key={article.title} className="article-third-related__card">
                <img
                  src={article.image}
                  alt=""
                  className={`article-third-related__image ${article.imageModifier ?? ''}`}
                />
                <div className="article-third-related__overlay" />
                <p className="article-third-related__date">{article.date}</p>
                <h3 className="article-third-related__card-title">{article.title}</h3>
                <RelatedMoreButton onClick={() => (article.target === 'news' ? onNavigate('news') : onOpenArticle(article.target))} />
              </article>
            ))}
          </div>
        </section>
      </main>

      <SharedFooter onNavigate={onNavigate} />
    </div>
  );
}
