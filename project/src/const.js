const AppRoute = {
  ROOT: '/',
  CONTACTS: '/contacts',
  CURRENCY: '/currency',
  LOGIN: '/login',
  SERVICES: '/services',
  QUESTION: '/query',
};


const Navigation = {
  CONTACTS: {
    link: AppRoute.CONTACTS,
    title: 'Контакты',
  },
  CREDIT: {
    link: AppRoute.ROOT,
    title: 'Рассчитать кредит',
  },
  CURRENCY:   {
    link: AppRoute.CURRENCY,
    title: 'Конвертер валют',
  },

  QUESTION: {
    link: AppRoute.QUESTION,
    title: 'Задать вопрос',
  },
  SERVICES: {
    link: AppRoute.SERVICES,
    title: 'Услуги',
  },
};

const HEADER_LINKS = [Navigation.SERVICES, Navigation.CREDIT, Navigation.CURRENCY, Navigation.CONTACTS];

const FOOTER_LINKS = [Navigation.SERVICES, Navigation.CREDIT, Navigation.CONTACTS, Navigation.QUESTION];

const CreditType = {
  AUTO: 'auto',
  HOME: 'home',
};

const TabType = {
  DEPOSIT: 'deposit',
  CREDIT: 'credit',
  INSURANCE: 'insurance',
  SERVICES: 'services',
};

const TabTypeToData = {
  credit: {
    title: 'Кредиты',
    imgId: '#cards',
  },
  deposit: {
    title: 'Вклады',
    imgId: '#vault',
  },
  insurance: {
    title: 'Страхование',
    imgId: '#security',
  },
  services: {
    title: 'Онлайн-сервисы',
    imgId: '#phone',
  },
};

const Viewport = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

const Breakpoint = {
  DESKTOP: 1024,
  TABLET: 768,
};

const OptionType = {
  CASCO: 'casco',
  LIFE_INSURANCE: 'life-insurance',
  MAT_CAPITAL: 'mat-capital',
};

export {AppRoute, Breakpoint, CreditType, HEADER_LINKS, FOOTER_LINKS, Navigation, OptionType, TabType, TabTypeToData, Viewport};
