export default {
  async Check(model, data) {
      
    // Перебираем поля в блоке
    for (let i = 0; i < model.fields.length; i++) {
      const modelField = model.fields[i]
      const dataField = data[modelField.name]

      if (modelField.required) {
        if (dataField === null || dataField === undefined || dataField.length === 0) {
          return {
            message: `${modelField.name}_is_required`,
            subject: modelField.name,
            object: 'validation-fields'
          }
        }
      }

      if (modelField.type == 'Boolean') {
        if (dataField != null && dataField != '') {
          if (typeof dataField != 'boolean') return {
            message: `${modelField.name}_is_invalid`,
            subject: modelField.name,
            object: 'validation-fields'
          }
        }
      }

      if (modelField.type == 'Checklist') {
        if (dataField != null && dataField != '') {
          if (!Array.isArray(dataField)) return {
            message: `${modelField.name}_is_invalid`,
            subject: modelField.name,
            object: 'validation-fields'
          }
        }
      }

      if (modelField.type == 'Date') {
        if (dataField != null && dataField != '') {
          if (dataField.length != 8) return {
            message: `${modelField.name}_is_invalid`,
            subject: modelField.name,
            object: 'validation-fields'
          }
        }
      }

      if (modelField.type == 'Number') {
        if (dataField != null && dataField != '') {
          
        }
      }

      if (modelField.type == 'Selectlist') {
        if (dataField != null && dataField != '') {
          if (typeof dataField != 'string') return {
            message: `${modelField.name}_is_invalid`,
            subject: modelField.name,
            object: 'validation-fields'
          }
        }
      }

      if (modelField.type == 'String') {
        if (dataField != null && dataField != '') {
        }
      }

      if (modelField.type == 'Year') {
        if (dataField != null && dataField != '') {
          if (dataField.length != 4) return {
            message: `${modelField.name}_is_invalid`,
            subject: modelField.name,
            object: 'validation-fields'
          }
        }
      }
    }

    return false
  }
}