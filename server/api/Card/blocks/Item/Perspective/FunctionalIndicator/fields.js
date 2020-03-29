export default {
  fields: [
    {
      name: 'EventDate',
      nameLang: 'Дата проведения',
      required: true,
      type: 'Date'
    },
    {
      name: 'Result',
      nameLang: 'Результат (%)',
      required: true,
      type: 'Number'
    },
    {
      name: 'Conclusion',
      nameLang: 'Заключение',
      required: false,
      type: 'String'
    }
  ]
}