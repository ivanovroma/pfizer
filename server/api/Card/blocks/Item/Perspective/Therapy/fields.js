export default {
  fields: [
    {
      name: 'DrugName',
      nameLang: 'Препарат',
      required: true,
      type: 'String'
    },
    {
      name: 'Dosage',
      nameLang: 'Дозировка (мкг)',
      required: true,
      type: 'Number'
    },
    {
      name: 'ReceptionPerDay',
      nameLang: 'Кратность приема в день',
      required: true,
      type: 'Number'
    },
    {
      name: 'DrugEnd',
      nameLang: 'Прием окончен',
      required: true,
      type: 'Boolean'
    }
  ]
}
