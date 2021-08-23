import { OptionType } from '../const';
const Credit = {
  home: {
    minLoanSum: 500000,
    messageText: 'ипотечные кредиты',
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
    minLoanSum: 200000,
    messageText: 'автокредиты',
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

export {Credit};
