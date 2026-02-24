import './MobileNewsPage.css';

const imgArticleOutsource = '/assets/news-figma-article-outsource.png';
const imgArticleTax = '/assets/news-figma-article-tax.png';
const imgArticleLiability = '/assets/news-figma-article-liability.png';
const imgMoreButtonBg = '/assets/news-figma-button-bg.png';
const imgMoreArrow = '/assets/news-figma-icon-exclude.png';
const imgNewsArrow = '/assets/news-figma-group-125.svg';

type MobileNewsPageProps = {
  onOpenFirstArticle: () => void;
  onOpenSecondArticle: () => void;
  onOpenThirdArticle: () => void;
};

type ArticleCard = {
  className: string;
  imageClassName: string;
  image: string;
  title: string;
  date: string;
};

const ARTICLE_CARDS: ArticleCard[] = [
  {
    className: 'mobile-news-page__article-card mobile-news-page__article-card--1',
    imageClassName: 'mobile-news-page__article-image mobile-news-page__article-image--1',
    image: imgArticleOutsource,
    title: 'Бухгалтерия\nна аутсорсинге',
    date: '08.04.2019',
  },
  {
    className: 'mobile-news-page__article-card mobile-news-page__article-card--2',
    imageClassName: 'mobile-news-page__article-image mobile-news-page__article-image--2',
    image: imgArticleTax,
    title: 'Оптимизация налоговой нагрузки компании',
    date: '01.04.2019',
  },
  {
    className: 'mobile-news-page__article-card mobile-news-page__article-card--3',
    imageClassName: 'mobile-news-page__article-image mobile-news-page__article-image--3',
    image: imgArticleLiability,
    title: 'Субсидиарная ответственность\n— мифы и реальность',
    date: '01.03.2019',
  },
];

type NewsCard = {
  className: string;
  titleClassName?: string;
  title: string;
  color: 'blue' | 'teal' | 'dark';
};

const NEWS_CARDS: NewsCard[] = [
  {
    className: 'mobile-news-page__news-card mobile-news-page__news-card--1',
    titleClassName: 'mobile-news-page__news-title mobile-news-page__news-title--1',
    title: 'Регламентирован порядок рассмотрения ПФР заявлений',
    color: 'blue',
  },
  {
    className: 'mobile-news-page__news-card mobile-news-page__news-card--2',
    titleClassName: 'mobile-news-page__news-title',
    title: 'Закон о страховании вкладов физических лиц в банках',
    color: 'teal',
  },
  {
    className: 'mobile-news-page__news-card mobile-news-page__news-card--3',
    titleClassName: 'mobile-news-page__news-title',
    title: 'Федеральный закон от 19.06.2000\nN 82-ФЗ\n«О минимальном размере оплаты труда»',
    color: 'teal',
  },
  {
    className: 'mobile-news-page__news-card mobile-news-page__news-card--4',
    titleClassName: 'mobile-news-page__news-title mobile-news-page__news-title--4',
    title: 'С января 2019 года вступают в силу новые правила регистрации ТС',
    color: 'blue',
  },
];

function MoreButton({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className="mobile-news-page__article-more" aria-label="Подробнее" onClick={onClick}>
      <img src={imgMoreButtonBg} alt="" className="mobile-news-page__article-more-bg" />
      <span className="mobile-news-page__article-more-text">Подробнее</span>
      <img src={imgMoreArrow} alt="" className="mobile-news-page__article-more-arrow" />
    </button>
  );
}

export default function MobileNewsPage({ onOpenFirstArticle, onOpenSecondArticle, onOpenThirdArticle }: MobileNewsPageProps) {
  return (
    <section className="mobile-news-page">
      <h2 className="mobile-news-page__section-title mobile-news-page__section-title--articles">статьи</h2>
      <h2 className="mobile-news-page__section-title mobile-news-page__section-title--news">новости</h2>

      {ARTICLE_CARDS.map((card, index) => (
        <article key={card.title} className={card.className}>
          <img src={card.image} alt="" className={card.imageClassName} />
          <h3 className="mobile-news-page__article-title">{card.title}</h3>
          <p className="mobile-news-page__article-date">{card.date}</p>
          <MoreButton onClick={index === 0 ? onOpenFirstArticle : index === 1 ? onOpenThirdArticle : index === 2 ? onOpenSecondArticle : undefined} />
        </article>
      ))}

      {NEWS_CARDS.map((card) => (
        <article key={card.title} className={`${card.className} mobile-news-page__news-card--${card.color}`}>
          <h3 className={card.titleClassName}>{card.title}</h3>
          <button type="button" className="mobile-news-page__news-more" aria-label="Подробнее">
            <img src={imgNewsArrow} alt="" className="mobile-news-page__news-arrow" />
          </button>
        </article>
      ))}
    </section>
  );
}
