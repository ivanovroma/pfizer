import jsonwebtoken from 'jsonwebtoken'

import Validation from '../../modules/Validation'

import UserModel from './model'
import DepartmentModel from '../Department/model'


export const SignIn = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'login_required', 'login_invalid',
      'password_required', 'password_invalid'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })
  
  // Инициализируем полученные данные
  const login = req.body.login
  const password = req.body.password

  // Проверяем наличие пользователя в базе
  const user = UserModel.findOne({ login })
  if (!user) return res.json({
    success: false,
    response: {
      object: 'auth',
      subject: 'database',
      message: 'user_not_found'
    }
  })

  // Проверяем не заблокирован ли пользователь
  if (user.blocked) return res.json({
    success: false,
    response: {
      object: 'auth',
      subject: 'access',
      message: 'user_is_blocked'
    }
  })

  // Проверяем пароль
  const comparePassword = user.ComparePassword(password)
  if (!comparePassword) return res.json({
    success: false,
    response: {
      object: 'auth',
      subject: 'password',
      message: 'password_incorrect'
    }
  })

  user.password = 0

  const token = jsonwebtoken.sign({ _id: user._id }, 'secret')
  
  return res.json({
    success: true,
    response: {
      user,
      token
    }
  })
}

export const GetCurrentUserByJwt = (req, res) => {
  return res.json({
    success: true,
    response: req.user
  })
}

export const Create = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'login_required', 'login_invalid', 'login_already_exist',
      'name_required', 'name_invalid',
      'department_id_required', 'department_id_invalid', 'department_not_found_by_id',
      'password_required', 'password_invalid',
      'role_required', 'role_invalid'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const login = req.body.login
  const name = req.body.name
  const departmentId = req.body.departmentId
  const password = req.body.password
  const role = req.body.role

  try {
    const createdUser = UserModel.create({
      login,
      name,
      password,
      role,
      departmentId
    })

    createdUser.password = 0

    return res.json({
      success: true,
      response: createdUser
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'create_user',
        message: 'create_error'
      }
    })
  }
}

export const GetList = (req, res) => {
  try {
    const users = UserModel.find()

    for (let i = 0; i < users.length; i++) {
      let user = users[i]
      user.password = 0
    }

    return res.json({
      success: true,
      response: users
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'get_list_user',
        message: 'get_list_error'
      }
    })
  }
}

export const Remove = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'user_id_required', 'user_id_invalid', 'user_not_found_by_id'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const userId = req.body.userId

  // Удаляем пользователя
  try {
    await UserModel.deleteOne({ _id: userId })
    
    return res.json({
      success: true
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'delete_user',
        message: 'delete_error'
      }
    })
  }
}

export const Block = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'user_id_required', 'user_id_invalid', 'user_not_found_by_id'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const userId = req.body.userId

  // Блокируем пользователя
  try {
    const user = UserModel.findOne({ _id: userId })
    user.blocked = !user.blocked
    await user.save()

    user.password = 0
    
    return res.json({
      success: true,
      response: user
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'block_user',
        message: 'block_error'
      }
    })
  }
}

export const UpdatePassword = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'user_id_required', 'user_id_invalid', 'user_not_found_by_id',
      'password_required', 'password_invalid'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const userId = req.body.userId
  const password = req.body.password

  // Заменяем пароль пользователя в БД
  try {
    const user = UserModel.findOne({ _id: userId })
    user.password = password
    await user.save()

    user.password = 0

    return res.json({
      success: true,
      response: user
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'update_password_user',
        message: 'update_password_error'
      }
    })
  }
}

export const Update = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'name_required', 'name_invalid',
      'user_id_required', 'user_id_invalid', 'user_not_found_by_id',
      'department_id_required', 'department_id_invalid', 'department_not_found_by_id'
    ]
  })

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const userId = req.body.userId
  const departmentId = req.body.departmentId
  const name = req.body.name
  const blocked = req.body.blocked

  // Заменяем подразделение пользователя в БД
  try {
    const user = UserModel.findOne({ _id: userId })
    user.departmentId = departmentId
    user.name = name
    user.blocked = blocked
    await user.save()

    user.password = 0

    return res.json({
      success: true,
      response: user
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'update_department_user',
        message: 'update_department_error'
      }
    })
  }
}

// export const CreateSuperUser = (req, res) => {
//   const createdDepartment = await DepartmentModel.create({
//     label: 'admin'
//   })
//   // Инициализируем полученные данные
//   const login = 'superuser'
//   const name = 'Super User'
//   const departmentId = createdDepartment._id
//   const password = 'sdvsdvsvsdv'
//   const role = 'admin'

//   try {
//     const createdUser = await UserModel.create({
//       login,
//       name,
//       password,
//       role,
//       departmentId
//     })

//     createdUser.password = 0

//     return res.send('success')
//   } catch (e) {
//     return res.json({
//       success: false,
//       response: {
//         object: 'database',
//         subject: 'create_user',
//         message: 'create_error'
//       }
//     })
//   }
// }
