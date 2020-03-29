export default {
  fields: [
    {
      name: 'Cause',
      nameLang: 'Причина',
      required: true,
      type: 'Selectlist'
    },
    {
      name: 'VisitDate',
      nameLang: 'Дата визита',
      required: true,
      type: 'Date'
    },
    {
      name: 'VisitResult',
      nameLang: 'Итог визита',
      required: true,
      type: 'Selectlist'
    }
  ]
}