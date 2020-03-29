export default {
  fields: [
    {
      name: 'EventDate',
      nameLang: 'Дата проведения',
      required: true,
      type: 'Date'
    },
    {
      name: 'OfvBefore',
      nameLang: 'ОФВ1 до бронхолитика',
      required: true,
      type: 'Number'
    },
    {
      name: 'OfvAfter',
      nameLang: 'ОФВ1 после бронхолитика',
      required: true,
      type: 'Number'
    },
    {
      name: 'FjelAfter',
      nameLang: 'ФЖЕЛ после бронхолитика',
      required: true,
      type: 'Number'
    },
    {
      name: 'OfvFjel',
      nameLang: 'ОФВ1/ФЖЕЛ',
      required: true,
      type: 'Number'
    }
  ]
}
