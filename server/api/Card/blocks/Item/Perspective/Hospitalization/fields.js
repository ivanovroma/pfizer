export default {
  fields: [
    {
      name: 'Cause',
      nameLang: 'Причина',
      required: true,
      type: 'Selectlist'
    },
    {
      name: 'OtherCause',
      nameLang: 'Другая причина',
      required: false,
      type: 'String'
    },
    {
      name: 'HospitalizationStart',
      nameLang: 'Дата госпитализации',
      required: true,
      type: 'Date'
    },
    {
      name: 'HospitalizationEnd',
      nameLang: 'Дата выписки',
      required: true,
      type: 'Date'
    },
    {
      name: 'NumberDays',
      nameLang: 'Количество койко-дней',
      required: true,
      type: 'Number'
    }
  ]
}