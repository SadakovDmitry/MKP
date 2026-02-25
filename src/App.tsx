import { useEffect, useState, type ReactNode } from 'react';
import DesktopPage from './DesktopPage';
import DesktopConstructionPage from './DesktopConstructionPage';
import AboutPage from './AboutPage';
import AboutPageAdaptive from './AboutPageAdaptive';
import AboutPageMobile, { ABOUT_MOBILE_FRAME_HEIGHT, ABOUT_MOBILE_FRAME_WIDTH } from './AboutPageMobile';
import MobilePage, { getMobileFrameHeight, MOBILE_FRAME_WIDTH } from './MobilePage';
import FloatingHeader from './FloatingHeader';
import CasesPage, { CASES_PAGE_PRELOAD_IMAGES } from './CasesPage';
import UsefulPage from './UsefulPage';
import type { SitePage } from './navigation';
import CaseDetailsPage from './CaseDetailsPage';
import { CASE_ROUTE_ORDER, type CaseId } from './caseDetailsData';
import CaseExpertisePage from './CaseExpertisePage';
import CaseRecoveryPage from './CaseRecoveryPage';
import CaseInitiativePage from './CaseInitiativePage';
import CaseAutomationOpsPage from './CaseAutomationOpsPage';
import CaseAutomationFinancePage from './CaseAutomationFinancePage';
import NewsPage from './NewsPage';
import getViewportWidth from './getViewportWidth';
import type { CasesFilterLabel } from './casesFilters';
import ArticleFirstPage from './ArticleFirstPage';
import ArticleSecondPage from './ArticleSecondPage';
import ArticleThirdPage from './ArticleThirdPage';
import ContactsPage from './ContactsPage';
import ServicesPage from './ServicesPage';
import ServiceAccountingPage from './ServiceAccountingPage';
import ServiceAuditPage from './ServiceAuditPage';
import ServiceLegalPage from './ServiceLegalPage';
import ServiceManagementPage from './ServiceManagementPage';
import ServiceProjectsPage from './ServiceProjectsPage';
import { preloadImages } from './preloadImages';

const MOBILE_LAYOUT_BREAKPOINT = 1200;
const ABOUT_DESKTOP_BREAKPOINT = 1280;
const DESKTOP_BASE_WIDTH = 1400;
const HOME_CONTACT_SECTION_ID = 'home-contact-section';
const CASE_ROUTE_SET = new Set<string>(CASE_ROUTE_ORDER);
const ARTICLE_ROUTE_ORDER = ['article-1', 'article-2', 'article-3'] as const;
const ARTICLE_ROUTE_SET = new Set<string>(ARTICLE_ROUTE_ORDER);
const SERVICE_ROUTE_ORDER = [
  'service-accounting',
  'service-audit',
  'service-legal',
  'service-management',
  'service-projects',
] as const;
const SERVICE_ROUTE_SET = new Set<string>(SERVICE_ROUTE_ORDER);

type ArticlePage = (typeof ARTICLE_ROUTE_ORDER)[number];
type ServicePage = (typeof SERVICE_ROUTE_ORDER)[number];
type AppPage = SitePage | CaseId | ArticlePage | ServicePage;

const APP_PAGE_PATHS: Record<AppPage, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  cases: '/cases',
  news: '/news',
  useful: '/useful',
  contacts: '/contacts',
  'case-expertise': '/cases/expertise',
  'case-recovery': '/cases/recovery',
  'case-initiative': '/cases/initiative',
  'case-automation-1': '/cases/automation-ops',
  'case-automation-2': '/cases/automation-finance',
  'article-1': '/articles/accounting-outsourcing',
  'article-2': '/articles/subsidiary-liability',
  'article-3': '/articles/tax-optimization',
  'service-accounting': '/services/accounting',
  'service-audit': '/services/audit',
  'service-legal': '/services/legal',
  'service-management': '/services/management',
  'service-projects': '/services/projects',
};

const LEGACY_PAGE_PATHS: Record<string, AppPage> = {
  '/home': 'home',
  '/case-expertise': 'case-expertise',
  '/case-recovery': 'case-recovery',
  '/case-initiative': 'case-initiative',
  '/case-automation-1': 'case-automation-1',
  '/case-automation-2': 'case-automation-2',
  '/article-1': 'article-1',
  '/article-2': 'article-2',
  '/article-3': 'article-3',
  '/service-accounting': 'service-accounting',
  '/service-audit': 'service-audit',
  '/service-legal': 'service-legal',
  '/service-management': 'service-management',
  '/service-projects': 'service-projects',
};

const PATH_TO_APP_PAGE = new Map<string, AppPage>(
  [
    ...(Object.entries(APP_PAGE_PATHS) as Array<[AppPage, string]>).map(([page, path]) => [path, page] as const),
    ...Object.entries(LEGACY_PAGE_PATHS),
  ],
);

function normalizePathname(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed.length === 0 ? '/' : trimmed;
}

function resolveAppPageFromLocation(): AppPage {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    const hashPath = normalizePathname(hash.slice(1));
    return PATH_TO_APP_PAGE.get(hashPath) ?? 'home';
  }

  const pathname = normalizePathname(window.location.pathname);
  return PATH_TO_APP_PAGE.get(pathname) ?? 'home';
}

function shouldPreserveHomeContactHash(page: AppPage) {
  return page === 'home' && window.location.hash === `#${HOME_CONTACT_SECTION_ID}`;
}

function buildUrlForPage(page: AppPage) {
  const pathname = APP_PAGE_PATHS[page];
  if (shouldPreserveHomeContactHash(page)) {
    return `${pathname}#${HOME_CONTACT_SECTION_ID}`;
  }
  return pathname;
}

function isCaseId(page: AppPage): page is CaseId {
  return CASE_ROUTE_SET.has(page);
}

function isArticlePage(page: AppPage): page is ArticlePage {
  return ARTICLE_ROUTE_SET.has(page);
}

function isServicePage(page: AppPage): page is ServicePage {
  return SERVICE_ROUTE_SET.has(page);
}

function shouldUseAppDesktopScale(page: AppPage) {
  return page === 'news' || isArticlePage(page);
}

export default function App() {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState<AppPage>(() => resolveAppPageFromLocation());
  const [pendingCasesFilter, setPendingCasesFilter] = useState<CasesFilterLabel | null>(null);

  useEffect(() => {
    preloadImages(CASES_PAGE_PRELOAD_IMAGES, { addPreloadLinks: true });
  }, []);

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

  useEffect(() => {
    const syncPageFromLocation = () => {
      const locationPage = resolveAppPageFromLocation();
      setPendingCasesFilter(null);
      setCurrentPage(locationPage);
      return locationPage;
    };

    const initialPage = syncPageFromLocation();
    const canonicalUrl = buildUrlForPage(initialPage);
    const currentPath = normalizePathname(window.location.pathname);
    const hasLegacyHashRoute = window.location.hash.startsWith('#/');
    const currentComparableUrl = `${currentPath}${shouldPreserveHomeContactHash(initialPage) ? window.location.hash : ''}`;

    if (hasLegacyHashRoute || currentComparableUrl !== canonicalUrl) {
      window.history.replaceState({ page: initialPage }, '', canonicalUrl);
    }

    const handlePopState = () => {
      syncPageFromLocation();
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage !== 'home') {
      return;
    }

    if (window.location.hash !== `#${HOME_CONTACT_SECTION_ID}`) {
      return;
    }

    const scrollToContactSection = () => {
      const target = document.getElementById(HOME_CONTACT_SECTION_ID);
      if (!target) {
        return;
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToContactSection);
    });
  }, [currentPage]);

  const handleNavigateToAppPage = (page: AppPage, replaceHistory = false) => {
    setPendingCasesFilter(null);
    setCurrentPage(page);
    const nextUrl = buildUrlForPage(page);
    const currentPath = normalizePathname(window.location.pathname);
    const currentComparableUrl = `${currentPath}${shouldPreserveHomeContactHash(page) ? window.location.hash : ''}`;

    if (currentComparableUrl !== nextUrl) {
      if (replaceHistory) {
        window.history.replaceState({ page }, '', nextUrl);
      } else {
        window.history.pushState({ page }, '', nextUrl);
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleNavigate = (page: SitePage) => {
    handleNavigateToAppPage(page);
  };

  const handleNavigateToCasesWithFilter = (filter: CasesFilterLabel) => {
    setPendingCasesFilter(filter);
    setCurrentPage('cases');
    const nextUrl = APP_PAGE_PATHS.cases;
    if (normalizePathname(window.location.pathname) !== nextUrl) {
      window.history.pushState({ page: 'cases' }, '', nextUrl);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleOpenCase = (caseId: CaseId) => {
    handleNavigateToAppPage(caseId);
  };

  const handleOpenArticle = (articlePage: ArticlePage) => {
    handleNavigateToAppPage(articlePage);
  };

  const handleOpenService = (servicePage: ServicePage) => {
    handleNavigateToAppPage(servicePage);
  };

  const headerPage: SitePage = isCaseId(currentPage)
    ? 'cases'
    : isArticlePage(currentPage)
      ? 'news'
      : isServicePage(currentPage)
        ? 'services'
        : currentPage;

  const isMobileLayout = viewportWidth > 0 && viewportWidth < MOBILE_LAYOUT_BREAKPOINT;

  const withHeader = (content: ReactNode) => {
    if (isMobileLayout) {
      return (
        <>
          <FloatingHeader currentPage={headerPage} onNavigate={handleNavigate} />
          {content}
        </>
      );
    }

    const measuredDesktopWidth = viewportWidth > 0 ? viewportWidth : getViewportWidth();
    const desktopScale = measuredDesktopWidth > 0 ? measuredDesktopWidth / DESKTOP_BASE_WIDTH : 1;
    const headerDesktopScale = shouldUseAppDesktopScale(currentPage) ? 1 : Math.max(1, desktopScale);

    if (!shouldUseAppDesktopScale(currentPage)) {
      return (
        <div className="w-full overflow-x-hidden bg-white">
          <FloatingHeader currentPage={headerPage} onNavigate={handleNavigate} desktopScale={headerDesktopScale} />
          {content}
        </div>
      );
    }

    return (
      <div className="w-full overflow-x-hidden bg-white">
        <div style={{ width: `${DESKTOP_BASE_WIDTH}px`, zoom: desktopScale }}>
          <FloatingHeader currentPage={headerPage} onNavigate={handleNavigate} />
          {content}
        </div>
      </div>
    );
  };

  if (currentPage === 'case-expertise') {
    return withHeader(<CaseExpertisePage onNavigate={handleNavigate} onOpenCase={handleOpenCase} />);
  }

  if (currentPage === 'case-recovery') {
    return withHeader(<CaseRecoveryPage onNavigate={handleNavigate} onOpenCase={handleOpenCase} />);
  }

  if (currentPage === 'case-initiative') {
    return withHeader(<CaseInitiativePage onNavigate={handleNavigate} onOpenCase={handleOpenCase} />);
  }

  if (currentPage === 'case-automation-1') {
    return withHeader(<CaseAutomationOpsPage onNavigate={handleNavigate} onOpenCase={handleOpenCase} />);
  }

  if (currentPage === 'case-automation-2') {
    return withHeader(<CaseAutomationFinancePage onNavigate={handleNavigate} onOpenCase={handleOpenCase} />);
  }

  if (isCaseId(currentPage)) {
    return withHeader(<CaseDetailsPage caseId={currentPage} onNavigate={handleNavigate} onOpenCase={handleOpenCase} />);
  }

  if (currentPage === 'article-1') {
    return withHeader(<ArticleFirstPage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />);
  }

  if (currentPage === 'article-2') {
    return withHeader(<ArticleSecondPage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />);
  }

  if (currentPage === 'article-3') {
    return withHeader(<ArticleThirdPage onNavigate={handleNavigate} onOpenArticle={handleOpenArticle} />);
  }

  if (currentPage === 'service-accounting') {
    return withHeader(<ServiceAccountingPage onNavigate={handleNavigateToAppPage} />);
  }

  if (currentPage === 'service-audit') {
    return withHeader(<ServiceAuditPage onNavigate={handleNavigateToAppPage} />);
  }

  if (currentPage === 'service-legal') {
    return withHeader(<ServiceLegalPage onNavigate={handleNavigateToAppPage} />);
  }

  if (currentPage === 'service-management') {
    return withHeader(<ServiceManagementPage onNavigate={handleNavigateToAppPage} />);
  }

  if (currentPage === 'service-projects') {
    return withHeader(<ServiceProjectsPage onNavigate={handleNavigateToAppPage} />);
  }

  if (currentPage === 'about') {
    if (isMobileLayout) {
      const scale = viewportWidth > 0 ? Math.min(1, viewportWidth / ABOUT_MOBILE_FRAME_WIDTH) : 1;

      return withHeader(
        <div className="w-full overflow-x-hidden bg-white">
          <div
            className="mx-auto relative"
            style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH * scale}px`, height: `${ABOUT_MOBILE_FRAME_HEIGHT * scale}px` }}
          >
            <div
              className="absolute left-0 top-0"
              style={{ width: `${ABOUT_MOBILE_FRAME_WIDTH}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
            >
              <AboutPageMobile onNavigate={handleNavigate} />
            </div>
          </div>
        </div>,
      );
    }

    const isDesktopAbout = viewportWidth >= ABOUT_DESKTOP_BREAKPOINT;
    return withHeader(isDesktopAbout ? <AboutPage onNavigate={handleNavigate} /> : <AboutPageAdaptive onNavigate={handleNavigate} />);
  }

  if (currentPage === 'news' && !isMobileLayout) {
    return withHeader(
      <NewsPage
        onNavigate={handleNavigate}
        onOpenFirstArticle={() => handleOpenArticle('article-1')}
        onOpenSecondArticle={() => handleOpenArticle('article-2')}
        onOpenThirdArticle={() => handleOpenArticle('article-3')}
      />,
    );
  }

  if (currentPage === 'useful') {
    return withHeader(<UsefulPage onNavigate={handleNavigate} />);
  }

  if (currentPage === 'services') {
    return withHeader(
      <ServicesPage
        onNavigate={handleNavigate}
        onOpenFirstService={() => handleOpenService('service-accounting')}
        onOpenSecondService={() => handleOpenService('service-audit')}
        onOpenThirdService={() => handleOpenService('service-legal')}
        onOpenFourthService={() => handleOpenService('service-management')}
        onOpenFifthService={() => handleOpenService('service-projects')}
      />,
    );
  }

  if (currentPage === 'contacts' && !isMobileLayout) {
    return withHeader(<ContactsPage onNavigate={handleNavigate} />);
  }

  if (currentPage === 'cases') {
    return withHeader(
      <CasesPage onNavigate={handleNavigate} onOpenCase={handleOpenCase} initialFilter={pendingCasesFilter} />,
    );
  }

  if (!isMobileLayout) {
    if (currentPage === 'home') {
      return withHeader(
        <DesktopPage
          onNavigate={handleNavigate}
          onOpenCasesByFilter={handleNavigateToCasesWithFilter}
          onOpenFirstService={() => handleOpenService('service-accounting')}
          onOpenSecondService={() => handleOpenService('service-audit')}
          onOpenThirdService={() => handleOpenService('service-legal')}
          onOpenFourthService={() => handleOpenService('service-management')}
          onOpenFifthService={() => handleOpenService('service-projects')}
          onOpenFirstArticle={() => handleOpenArticle('article-1')}
          onOpenSecondArticle={() => handleOpenArticle('article-2')}
          onOpenThirdArticle={() => handleOpenArticle('article-3')}
        />,
      );
    }

    return withHeader(<DesktopConstructionPage currentPage={currentPage} onNavigate={handleNavigate} />);
  }

  const scale = viewportWidth > 0 ? Math.min(1, viewportWidth / MOBILE_FRAME_WIDTH) : 1;
  const mobileFrameHeight = getMobileFrameHeight(currentPage);

  return withHeader(
    <div className="w-full overflow-x-hidden bg-white">
      <div
        className="mx-auto relative"
        style={{ width: `${MOBILE_FRAME_WIDTH * scale}px`, height: `${mobileFrameHeight * scale}px` }}
      >
        <div
          className="absolute left-0 top-0"
          style={{ width: `${MOBILE_FRAME_WIDTH}px`, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          <MobilePage
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenCasesByFilter={handleNavigateToCasesWithFilter}
            onOpenFirstService={() => handleOpenService('service-accounting')}
            onOpenSecondService={() => handleOpenService('service-audit')}
            onOpenThirdService={() => handleOpenService('service-legal')}
            onOpenFourthService={() => handleOpenService('service-management')}
            onOpenFifthService={() => handleOpenService('service-projects')}
            onOpenFirstArticle={() => handleOpenArticle('article-1')}
            onOpenSecondArticle={() => handleOpenArticle('article-2')}
            onOpenThirdArticle={() => handleOpenArticle('article-3')}
          />
        </div>
      </div>
    </div>,
  );
}
