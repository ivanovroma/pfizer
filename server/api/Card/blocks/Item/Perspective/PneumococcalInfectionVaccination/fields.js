export default {
  fields: [
    {
      name: 'EventDate',
      nameLang: 'Дата проведения',
      required: true,
      type: 'Date'
    },
    {
      name: 'Vaccina',
      nameLang: 'Вакцина',
      required: true,
      type: 'Selectlist'
    },
    {
      name: 'VaccineReactions',
      nameLang: 'Поствакцинальные реакции',
      required: true,
      type: 'Selectlist'
    }
  ]
}