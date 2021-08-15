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
      min: 10,
      step: 5,
      unit: '%',
    },
    period: {
      min: 5,
      max: 30,
      unit: 'лет',
    },
    chekboxes: [
      {
        name: 'motherCapital',
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
      min: 20,
      step: 5,
      unit: '%',
    },
    period: {
      min: 1,
      max: 5,
      unit: 'лет',
    },
    chekboxes: [
      {
        name: 'casco',
        label: 'Оформить КАСКО в нашем банке',
      },
      {
        name: 'life-insurance',
        label: 'Оформить Страхование жизни в нашем банке',
      },
    ],
  },
};

export {Credit};
