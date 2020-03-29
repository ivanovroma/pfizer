export default {
  fields: [
    {
      name: 'EventDate',
      nameLang: 'Дата проведения',
      required: true,
      type: 'Date'
    },
    {
      name: 'Indicator',
      nameLang: 'Показатель',
      required: true,
      type: 'Number'
    },
    {
      name: 'FenotipHOBL',
      nameLang: 'Фенотип ХОБЛ',
      required: true,
      type: 'Selectlist'
    }
  ]
}
