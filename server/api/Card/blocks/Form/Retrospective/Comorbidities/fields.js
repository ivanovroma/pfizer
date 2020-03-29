export default {
  fields: [
    {
      name: 'Comorbidities',
      nameLang: 'Наличие коморбидной патологии',
      required: true,
      type: 'Boolean'
    },

    {
      name: 'Cachexia',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'CachexiaStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'CachexiaEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'Anemia',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'AnemiaStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'AnemiaEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'Depression',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'DepressionStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'DepressionEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'GERB',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'GERBStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'GERBEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'Osteoporosis',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'OsteoporosisStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'OsteoporosisEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'IBS',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'IBSStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'IBSEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'Hypertension',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'HypertensionStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'HypertensionEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'HSN',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'HSNStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'HSNEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'Diabet',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'DiabetStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'DiabetEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    },

    {
      name: 'Other',
      nameLang: 'Патология присутствует',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'Pathology',
      nameLang: 'Укажите паталогию',
      required: false,
      type: 'String'
    },
    {
      name: 'OtherStart',
      nameLang: 'Год начала',
      required: false,
      type: 'Year'
    },
    {
      name: 'OtherEnd',
      nameLang: 'Год окончания',
      required: false,
      type: 'Year'
    }
  ]
}