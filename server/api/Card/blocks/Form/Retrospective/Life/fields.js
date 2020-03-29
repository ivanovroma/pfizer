export default {
  fields: [
    {
      name: 'ProfessionName',
      nameLang: 'Род деятельности (профессия)',
      required: true,
      type: 'String'
    },
    {
      name: 'PresenceHazards',
      nameLang: 'Наличие профессиональных факторов вредности',
      required: true,
      type: 'Boolean'
    },
    {
      name: 'PresenceHazardsList',
      nameLang: 'Профессиональные вредности',
      required: false,
      type: 'Checklist'
    },
    {
      name: 'CombinationHazards',
      nameLang: 'Сочетание профессиональных факторов',
      required: false,
      type: 'Selectlist'
    },
    {
      name: 'OccupationalPhysician',
      nameLang: 'Состоит на учете у профпатолога',
      required: true,
      type: 'Boolean'
    },
    {
      name: 'OccupationalPhysicianDiagnoz',
      nameLang: 'Диагноз',
      required: false,
      type: 'String'
    },

    {
      name: 'Smoking',
      nameLang: 'Курение',
      required: true,
      type: 'Boolean'
    },
    {
      name: 'SmokingExpirience',
      nameLang: 'Стаж курения',
      required: false,
      type: 'Number'
    },
    {
      name: 'NumberCigarettes',
      nameLang: 'Кол-во сигарет в день',
      required: false,
      type: 'Number'
    },
    {
      name: 'SmokingIndex',
      nameLang: 'Индекс курильщика (пачка-лет)',
      required: false,
      type: 'Number'
    },

    {
      name: 'HeightCm',
      nameLang: 'Рост (см)',
      required: true,
      type: 'Number'
    },
    {
      name: 'WeightKg',
      nameLang: 'Вес (кг)',
      required: true,
      type: 'Number'
    },
    {
      name: 'WeightIndex',
      nameLang: 'Индекс массы тела',
      required: true,
      type: 'Number'
    }
  ]
}