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

export {AppRoute, HEADER_LINKS, FOOTER_LINKS, Navigation};
