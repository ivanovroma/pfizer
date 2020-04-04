import Validation from '../../modules/Validation'

import DepartmentModel from './model'


export const Create = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'label_required', 'label_invalid'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const label = req.body.label
  
  // Создаем подразделение
  try {
    const createdDepartment = DepartmentModel.create({
      label
    })

    return res.json({
      success: true,
      response: createdDepartment
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'create_department',
        message: 'create_error'
      }
    })
  }
}

export const GetList = (req, res) => {
  try {
    const departments = DepartmentModel.find()

    return res.json({
      success: true,
      response: departments
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'get_list_department',
        message: 'get_list_error'
      }
    })
  }
}

export const Update = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'department_id_required', 'department_id_invalid', 'department_not_found_by_id',
      'label_required', 'label_invalid'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const label = req.body.label
  const departmentId = req.body.departmentId
  
  // Обновляем подразделение
  try {
    const department = DepartmentModel.findOne({ _id: departmentId })
    department.label = label
    department.save()

    return res.json({
      success: true,
      response: department
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'update_department',
        message: 'update_error'
      }
    })
  }
}

export const Remove = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'department_id_required', 'department_id_invalid',
      'department_not_found_by_id', 'department_id_used'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const departmentId = req.body.departmentId

  // Удаляем подразделение
  try {
    DepartmentModel.deleteOne({ _id: departmentId })
    
    return res.json({
      success: true
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'delete_department',
        message: 'delete_error'
      }
    })
  }
}