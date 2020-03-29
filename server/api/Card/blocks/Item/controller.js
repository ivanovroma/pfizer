import Validation from '../../../../modules/Validation'
import ValidationFields from '../../../../modules/ValidationFields'
import ValidationModels from '../../../../modules/ValidationModels'

import Model from './model'


export const Create = async (req, res) => {
  // Валидируем полученные данные
  const error = await Validation.Check({
    fields: req.body,
    rules: [
      'user_id_required', 'user_id_invalid', 'user_not_found_by_id',
      'card_id_required', 'card_id_invalid', 'card_not_found_by_id',
      'item_required'
    ]
  })
  if (error) return res.json({
    success: false,
    response: error
  })

  
  // Валидируем форму
  const Fields = ValidationModels.getModel(req.body.item)
  const errorForm = await ValidationFields.Check(Fields, req.body.fields)
  
  if (errorForm) return res.json({
    success: false,
    response: errorForm
  })
  
  // Создаем запись
  try {
    const created = await Model.create({
      item: req.body.item,
      userId: req.body.userId,
      cardId: req.body.cardId,
      partId: req.body.partId,
      fields: req.body.fields
    })

    return res.json({
      success: true,
      response: created
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'create_doc',
        message: 'create_error'
      }
    })
  }
}

export const GetList = async (req, res) => {
  // Валидируем полученные данные
  const error = await Validation.Check({
    fields: req.body,
    rules: [
      'card_id_required', 'card_id_invalid', 'card_not_found_by_id',
      'item_required'
    ]
  })
  if (error) return res.json({
    success: false,
    response: error
  })

  try {
    const items = await Model.find({
      item: req.body.item,
      cardId: req.body.cardId,
      partId: req.body.partId
    })

    return res.json({
      success: true,
      response: items
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'get_doc_card',
        message: 'get_doc_error'
      }
    })
  }
}

export const Update = async (req, res) => {
  // Валидируем полученные данные
  const error = await Validation.Check({
    fields: req.body,
    rules: [
      'item_id_required', 'item_id_invalid', 'item_not_found_by_id',
      'item_required'
    ]
  })
  if (error) return res.json({
    success: false,
    response: error
  })



  const Fields = ValidationModels.getModel(req.body.item)
  
  // Валидируем форму
  const errorForm = await ValidationFields.Check(Fields, req.body.fields)
  
  if (errorForm) return res.json({
    success: false,
    response: errorForm
  })



  try {
    const item = await Model.findOne({ _id: req.body.itemId })

    item.fields = req.body.fields

    const updatedItem = await item.save()

    return res.json({
      success: true,
      response: updatedItem
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'update_doc_card',
        message: 'update_doc_error'
      }
    })
  }
}

export const Remove = async (req, res) => {
  // Валидируем полученные данные
  const error = await Validation.Check({
    fields: req.body,
    rules: [
      'item_id_required', 'item_id_invalid', 'item_not_found_by_id'
    ]
  })
  if (error) return res.json({
    success: false,
    response: error
  })

  try {
    const item = await Model.findOneAndRemove({
      _id: req.body.itemId
    })

    return res.json({
      success: true,
      response: item
    })
  } catch (e) {
    return res.json({
      success: false,
      response: {
        object: 'database',
        subject: 'remove_doc_card',
        message: 'remove_doc_error'
      }
    })
  }
}