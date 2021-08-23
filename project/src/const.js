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

const Percentage = {
  AUTO_DEFAULT: 16,
  AUTO_DISCOUNT: 15,
  AUTO_WITH_OPTION: 8.5,
  AUTO_MIN: 3.5,
  HOME_DEFAULT: 9.4,
  HOME_DISCOUNT: 8.5,
};

const MinLoanSum = {
  auto: 200000,
  home: 500000,
};

const AUTO_TOTAL_PRICE_FOR_DISCOUNT = 2000000;
const HOME_FIRST_PAYMENT_RATE_FOR_DISCOUNT = 15;
const MAT_CAPITAL = 470000;
const INCOME_RATE = 0.45;

export {AppRoute, AUTO_TOTAL_PRICE_FOR_DISCOUNT, Breakpoint, CreditType, FOOTER_LINKS, HEADER_LINKS, HOME_FIRST_PAYMENT_RATE_FOR_DISCOUNT, INCOME_RATE, MAT_CAPITAL, MinLoanSum, Navigation, OptionType, Percentage, TabType, TabTypeToData, Viewport};
