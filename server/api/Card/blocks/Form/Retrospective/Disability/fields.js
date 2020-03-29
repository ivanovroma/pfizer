export default {
  fields: [
    {
      name: 'Disability',
      nameLang: 'Инвалидность',
      required: true,
      type: 'Boolean'
    },
    {
      name: 'Group',
      nameLang: 'Группа инвалидности',
      required: false,
      type: 'String'
    },
    {
      name: 'Cause',
      nameLang: 'Причина инвалидности - ХОБЛ',
      required: false,
      type: 'Boolean'
    }
  ]
}