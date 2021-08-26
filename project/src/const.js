const AUTO_TOTAL_PRICE_FOR_DISCOUNT = 2000000;
const ESC_KEY = 'Escape';
const HOME_FIRST_PAYMENT_RATE_FOR_DISCOUNT = 15;
const INCOME_RATE = 0.45;
const MAT_CAPITAL = 470000;

const AppRoute = {
  ROOT: '/',
  CONTACTS: '/contacts',
  CURRENCY: '/currency',
  LOGIN: '/login',
  SERVICES: '/services',
  QUESTION: '/query',
};

const Breakpoint = {
  DESKTOP: 1024,
  TABLET: 768,
};

const CreditType = {
  AUTO: 'auto',
  HOME: 'home',
};

const MinLoanSum = {
  auto: 200000,
  home: 500000,
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

const PopupType = {
  LOGIN: 'login',
  THANK_YOU: 'thank-you',
};

const StorageField = {
  EMAIL: 'email',
  LOGIN: 'login',
  NAME: 'name',
  PASSWORD: 'password',
  PHONE: 'phone',
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

const CreditData = {
  home: {
    totalSum: {
      label: 'Стоимость недвижимости',
      min: 1200000,
      max: 25000000,
      step: 100000,
    },
    initialPayment: {
      label: 'Первоначальный взнос',
      min: 10,
      max: 100,
      step: 5,
      unit: '%',
    },
    period: {
      label: 'Срок кредитования',
      min: 5,
      max: 30,
      step: 1,
      unit: 'лет',
    },
    options: [
      {
        title: OptionType.MAT_CAPITAL,
        label: 'Использовать материнский капитал',
      },
    ],
  },
  auto: {
    totalSum: {
      label: 'Стоимость автомобиля',
      min: 500000,
      max: 5000000,
      step: 50000,
    },
    initialPayment: {
      label: 'Первоначальный взнос',
      min: 20,
      max: 100,
      step: 5,
      unit: '%',
    },
    period: {
      label: 'Срок кредитования',
      min: 1,
      max: 5,
      step: 1,
      unit: 'лет',
    },
    options: [
      {
        title: OptionType.CASCO,
        label: 'Оформить КАСКО в нашем банке',
      },
      {
        title: OptionType.LIFE_INSURANCE,
        label: 'Оформить Страхование жизни в нашем банке',
      },
    ],
  },
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

export {
  AppRoute,
  AUTO_TOTAL_PRICE_FOR_DISCOUNT,
  Breakpoint,
  CreditData,
  CreditType,
  ESC_KEY,
  FOOTER_LINKS,
  HEADER_LINKS,
  HOME_FIRST_PAYMENT_RATE_FOR_DISCOUNT,
  INCOME_RATE,
  MAT_CAPITAL,
  MinLoanSum,
  Navigation,
  OptionType,
  Percentage,
  PopupType,
  StorageField,
  TabType,
  TabTypeToData,
  Viewport
};
