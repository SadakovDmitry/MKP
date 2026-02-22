export type SitePage = 'home' | 'about' | 'services' | 'cases' | 'news' | 'useful' | 'contacts';

export const PAGE_LABELS: Record<SitePage, string> = {
  home: 'Главная',
  about: 'О компании',
  services: 'Услуги',
  cases: 'Кейсы',
  news: 'Статьи и новости',
  useful: 'Полезное',
  contacts: 'Контакты',
};

export const NAV_ORDER: SitePage[] = ['home', 'about', 'services', 'cases', 'news', 'useful', 'contacts'];
