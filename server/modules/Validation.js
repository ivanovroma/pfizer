import UserModel from '../api/User/model'
import DepartmentModel from '../api/Department/model'
import CardModel from '../api/Card/model'
import ItemModel from '../api/Card/blocks/Item/model'

export default {
  async Check(data) {
    const fields = data.fields
    const user = data.user
    const rules = data.rules

    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i]
      let subject = this.Rules[rule].subject
      let Rule = this.Rules[rule]

      if (Rule.required) {
        if (!fields[subject] || fields[subject].length === 0)
          return {
            object: 'validation',
            subject,
            message: rule
          }
      } else if (Rule.objectId) {
        if (fields[subject].length !== 24)
          return {
            object: 'validation',
            subject,
            message: rule
          }
      } else if (Rule.date) {
        if (fields[subject].length !== 8)
          return {
            object: 'validation',
            subject,
            message: rule
          }
      } else {
        let result = await Rule.check(fields, user)
        if (result) {
          return {
            object: 'validation',
            subject,
            message: rule
          }
        }
      }
    }

    return false
  },

  Rules: {
    label_required: {
      subject: 'label',
      required: true
    }, 
    
    label_invalid: {
      subject: 'label',
      check: async (fields) => {
        const regValidLabel = /[^A-Za-zА-Яа-я,?!()0-9\s<>%.#№:-]/
        const testedLabel = regValidLabel.test(fields.label)
        if (testedLabel)
          return true

        return false
      }
    },

    name_required: {
      subject: 'name',
      required: true
    }, 
    
    name_invalid: {
      subject: 'name',
      check: async (fields) => {
        const regValidName = /[^А-Яа-я\s]/
        const testedName = regValidName.test(fields.name)
        if (testedName)
          return true

        return false
      }
    },

    login_required: {
      subject: 'login',
      required: true
    },

    login_invalid: {
      subject: 'login',
      check: async (fields) => {
        const regValidLogin = /[^A-Za-z0-9]/
        const testedLogin = regValidLogin.test(fields.login)
        if (testedLogin)
          return true

        return false
      }
    },

    login_already_exist: {
      subject: 'login',
      check: async (fields) => {
        const existUser = await UserModel.findOne({ login: fields.login })
        if (existUser) return true
      }
    },

    password_required: {
      subject: 'password',
      required: true
    },

    password_invalid: {
      subject: 'password',
      check: async (fields) => {
        const regValidPassword = /^[a-zA-Z0-9]\w{3,14}$/
        const testedPassword = regValidPassword.test(fields.password)
        if (!testedPassword)
          return true

        return false
      }
    },

    role_required: {
      subject: 'role',
      required: true
    },

    role_invalid: {
      subject: 'role',
      check: async (fields) => {
        if (fields.role !== 'admin' && fields.role !== 'researcher' && fields.role !== 'curator')
          return true
        
        return false
      }
    },

    user_id_required: {
      subject: 'userId',
      required: true
    },

    user_id_invalid: {
      subject: 'userId',
      objectId: true
    },

    user_not_found_by_id: {
      subject: 'userId',
      check: async (fields) => {
        const user = await UserModel.findOne({ _id: fields.userId })
        if (!user)
          return true
      }
    },

    card_id_required: {
      subject: 'cardId',
      required: true
    },

    card_id_invalid: {
      subject: 'cardId',
      objectId: true
    },

    card_not_found_by_id: {
      subject: 'cardId',
      check: async (fields) => {
        const card = await CardModel.findOne({ _id: fields.cardId })
        if (!card)
          return true
      }
    },

    department_id_required: {
      subject: 'departmentId',
      required: true
    },

    department_id_invalid: {
      subject: 'departmentId',
      objectId: true
    },

    department_not_found_by_id: {
      subject: 'departmentId',
      check: async (fields) => {
        const department = await DepartmentModel.findOne({ _id: fields.departmentId })
        if (!department)
          return true
      }
    },

    department_id_used: {
      subject: 'departmentId',
      check: async (fields) => {
        const users = await UserModel.find({ departmentId: fields.departmentId })
        if (users.length > 0)
          return true
      }
    },

    item_id_required: {
      subject: 'itemId',
      required: true
    },

    item_id_invalid: {
      subject: 'itemId',
      objectId: true
    },

    item_not_found_by_id: {
      subject: 'itemId',
      check: async (fields) => {
        const item = await ItemModel.findOne({ _id: fields.itemId })
        if (!item)
          return true
      }
    },

    birth_day_required: {
      subject: 'birthDay',
      required: true
    },

    birth_day_invalid: {
      subject: 'birthDay',
      date: true
    },

    form_required: {
      subject: 'form',
      required: true
    },

    item_required: {
      subject: 'item',
      required: true
    }
  }
}