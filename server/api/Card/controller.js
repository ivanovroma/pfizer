import Validation from '../../modules/Validation'
import Iterator from '../../modules/Iterator'

import CardModel from './model'
import FormModel from './blocks/Form/model'
import ItemModel from './blocks/Item/model'


export const Create = (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'name_required', 'name_invalid',
      'birth_day_required', 'birth_day_invalid',
      'user_id_required', 'user_id_invalid', 'user_not_found_by_id',
      'department_id_required', 'department_id_invalid', 'department_not_found_by_id'
    ]
  })

  console.log(error)

  if (error) return res.json({
    success: false,
    response: error
  })

  // Инициализируем полученные данные
  const name = req.body.name
  const birthDay = req.body.birthDay
  const userId = req.body.userId
  const departmentId = req.body.departmentId

  const cards = CardModel.find()
  const index = Iterator.getIndex(cards)
  
  // Создаем карту
  const createdCard = CardModel.create({
    name,
    birthDay,
    userId,
    departmentId,
    index
  })

  return res.json({
    success: true,
    response: createdCard
  })
}

export const GetList = (req, res) => {

  let searchQueryName = req.body.searchQueryName
  
  if (searchQueryName && searchQueryName.length > 0) {
    const cards = CardModel.find( { 'name' : { '$regex' : searchQueryName, '$options' : 'i' } })

    return res.json({
      success: true,
      response: {
        cards,
        length: cards.length,
        pages: 1,
        page: 1
      }
    })
  }
  
  try {
    let cards = CardModel.find()
    
    let pages = 1
    let length = cards.length
    let limit = 20

    if (length > limit) {
      pages = Math.ceil( (length / limit) )
    }

    let page = req.body.page
    if (!page) page = pages

    const skip = (page - 1) * limit

    cards = CardModel.find().skip(skip).limit(limit)

    return res.json({
      success: true,
      response: {
        cards,
        length,
        pages,
        page
      }
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'get_list_card',
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
      'test_id_required', 'test_id_invalid', 'test_not_found_by_id',
      'label_required', 'label_invalid'
    ]
  })

  if (error) return res.json({
    success: false,
    error: error
  })

  // Инициализируем полученные данные
  const label = req.body.label
  const testId = req.body.testId
  
  // Обновляем тест
  try {
    const test = CardModel.findOne({ _id: testId })
    test.label = label
    test.save()

    return res.json({
      success: true,
      response: test
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'update_test',
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
      'card_id_required', 'card_id_invalid',
      'card_not_found_by_id'
    ]
  })

  if (error) return res.json({
    success: false,
    message: error
  })

  // Инициализируем полученные данные
  const cardId = req.body.cardId

  // Удаляем карту
  try {
    CardModel.deleteOne({ _id: cardId })
    FormModel.deleteMany({ cardId: cardId })
    ItemModel.deleteMany({ cardId: cardId })
    
    return res.json({
      success: true
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'delete_test',
        message: 'delete_error'
      }
    })
  }
}