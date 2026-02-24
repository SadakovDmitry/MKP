import './ArticleFirstPage.css';
import type { SitePage } from './navigation';
import SharedFooter from './SharedFooter';

const imgHero = '/assets/news-figma-article-outsource.png';
const imgArticleTax = '/assets/news-figma-article-tax.png';
const imgArticleLiability = '/assets/news-figma-article-liability.png';

type ArticleFirstPageProps = {
  onNavigate: (page: SitePage) => void;
  onOpenArticle: (page: 'article-1' | 'article-2' | 'article-3') => void;
};

type Benefit = {
  title: string;
  paragraphs: string[];
};

const INTRO =
  'Больше половины европейских компаний отказались от штатной бухгалтерии в пользу аутсорсинга, и российский бизнес движется в том же направлении. За последние 10 лет спрос на бухгалтерский аутсорсинг вырос в 3 раза. И это не просто модная тенденция - такая форма организации бухучёта имеет ряд преимуществ, каждое из которых может быть решающим.';

const BENEFITS: Benefit[] = [
  {
    title: 'ЭКОНОМИЯ',
    paragraphs: [
      'Финансовая выгода очевидна. Команда бухгалтеров обходится в скромные 40 тысяч рублей в месяц, что сравнимо с зарплатой начинающего специалиста. А если посчитать налоги, выплаты в социальные фонды, прибавить затраты на организацию и оснащение рабочего места, оплату больничных, отпусков, курсов повышения квалификации, то фактические расходы сокращаются на несколько сотен тысяч в год.',
    ],
  },
  {
    title: 'ОПЕРАТИВНОСТЬ',
    paragraphs: [
      'Конечно, можно сэкономить и по-другому - например, нанять фрилансера, однако он не располагает теми возможностями и ресурсами, которые есть у агентства. За счёт распределения работы между несколькими специалистами, каждый из которых выполняет свою задачу, производительность повышается в разы. Каким бы ни был объём задач, команда справится с ними в срок, без ущерба качеству.',
      'При аутсорсинге на прицеле буквально всё: отчётность, оптимизация, общение с налоговиками, расчёт зарплат и т.д., в то время как перегруженный обязанностями фрилансер (а у него, кроме вас, есть и другие клиенты) постепенно будет «выгорать», допуская ошибки, которые обнаружатся лишь при проверках.',
    ],
  },
  {
    title: 'СНИЖЕНИЕ РИСКОВ',
    paragraphs: [
      'Вы перестаёте зависеть от человеческого фактора: аутсорсеры не исчезают в ответственный момент, вовремя сдают отчётность, всегда в курсе последних изменений в законодательстве и умеют работать по международным стандартам. И это не просто слова. Гарантии прописаны в договоре на оказание бухгалтерских услуг - заключая его, вы страхуете себя от чужих ошибок. Например, если налоговая выявит ошибки в декларации, вся ответственность (выплата штрафов и прочие компенсации) ложится на агентство аутсорсинга. И, конечно, вам не придётся платить штраф за бухгалтера, «забывшего» или «не успевшего» сдать отчёт в ПФР.',
    ],
  },
  {
    title: 'ВЫСОКИЙ СТАНДАРТ КАЧЕСТВА',
    paragraphs: [
      'Аутсорсеры обладают навыками решения любых задач - как типовых, так и сложных. В штате компании есть юристы, профессионалы в разных областях права - это значит, что любая спорная ситуация будет улажена в самые короткие сроки, и вам не придётся искать экспертов где-то на стороне.',
    ],
  },
  {
    title: 'ПОЛНАЯ ПРОЗРАЧНОСТЬ',
    paragraphs: [
      'В отсутствие специальных знаний вы либо слепо доверяете штатному бухгалтеру, либо постигаете азы бухучёта, чтобы хоть как-то контролировать процесс. Специалисты-аутсорсеры объяснят простым языком любую тонкость, поскольку консультации - это часть комплексной услуги. Кроме того, агентство отчитывается о проделанной работе, высылает уведомления и письма. А уведомляет ли вас бухгалтер о каждом своём шаге?',
    ],
  },
];

const OUTRO =
  'Все эти причины взаимосвязаны, и экономия является первой, но не главной среди них. Со временем клиенты обнаруживают преимущество в том, чтобы платить за объём и качество выполненной работы, а не за рабочее время сотрудника - для тех, кто понимает важность оперативной, грамотной и скоординированной работы бухгалтерии, это становится главным аргументом в пользу аутсорсинга.';

type RelatedArticle = {
  title: string;
  date: string;
  image: string;
  target: 'article-1' | 'article-2' | 'article-3' | 'news';
};

const RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: 'Субсидиарная ответственность - мифы и реальность',
    date: '01.03.2019',
    image: imgArticleLiability,
    target: 'article-2',
  },
  {
    title: 'Оптимизация налоговой нагрузки компании',
    date: '01.04.2019',
    image: imgArticleTax,
    target: 'article-3',
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="article-first-related__arrow-svg">
      <path d="M2.5 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RelatedMoreButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="article-first-related__more" aria-label="Подробнее" onClick={onClick}>
      <span className="article-first-related__more-text">Подробнее</span>
      <span className="article-first-related__more-icon">
        <ArrowIcon />
      </span>
    </button>
  );
}

export default function ArticleFirstPage({ onNavigate, onOpenArticle }: ArticleFirstPageProps) {
  return (
    <div className="article-first-page">
      <main className="article-first-page__main">
        <section className="article-first-hero">
          <img src={imgHero} alt="" className="article-first-hero__image" />
          <div className="article-first-hero__overlay" />
          <h1 className="article-first-hero__title">Бухгалтерский и наловой консалтинг</h1>
          <p className="article-first-hero__date">08.04.2019</p>
        </section>

        <section className="article-first-content">
          <div className="article-first-content__inner">
            <p className="article-first-content__intro">{INTRO}</p>

            <ol className="article-first-content__list">
              {BENEFITS.map((item) => (
                <li key={item.title} className="article-first-content__list-item">
                  <h2 className="article-first-content__list-title">{item.title}</h2>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="article-first-content__paragraph">
                      {paragraph}
                    </p>
                  ))}
                </li>
              ))}
            </ol>

            <p className="article-first-content__outro">{OUTRO}</p>
          </div>
        </section>

        <section className="article-first-related">
          <h2 className="article-first-related__title">другие статьи</h2>
          <div className="article-first-related__cards">
            {RELATED_ARTICLES.map((article) => (
              <article key={article.title} className="article-first-related__card">
                <img src={article.image} alt="" className="article-first-related__image" />
                <div className="article-first-related__overlay" />
                <p className="article-first-related__date">{article.date}</p>
                <h3 className="article-first-related__card-title">{article.title}</h3>
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
