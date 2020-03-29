export default {
  fields: [
    {
      name: 'ClinicDiagnoz',
      nameLang: 'Клинический диагноз',
      required: true,
      type: 'String'
    },
    {
      name: 'ProductionDate',
      nameLang: 'Дата постановки',
      required: true,
      type: 'Date'
    },
    {
      name: 'ClassificationGOLD',
      nameLang: 'Классификация по GOLD',
      required: true,
      type: 'Boolean'
    },
    {
      name: 'ClassificationGOLDRisk',
      nameLang: 'Риск по GOLD на момент включения в исследование',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'SeverityGOLD',
      nameLang: 'Степень тяжести по GOLD на момент включения в исследование',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'DiagnozDefault',
      nameLang: 'Диагноз основного заболевания',
      required: true,
      type: 'String'
    }
  ]
}