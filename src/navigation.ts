export type SitePage = 'home' | 'about' | 'services' | 'cases' | 'news' | 'contacts';

export const PAGE_LABELS: Record<SitePage, string> = {
  home: 'Главная',
  about: 'О компании',
  services: 'Услуги',
  cases: 'Кейсы',
  news: 'Статьи и новости',
  contacts: 'Контакты',
};

export const NAV_ORDER: SitePage[] = ['home', 'about', 'services', 'cases', 'news', 'contacts'];
