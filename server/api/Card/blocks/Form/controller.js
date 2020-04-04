import Validation from '../../../../modules/Validation'
import ValidationFields from '../../../../modules/ValidationFields'
import ValidationModels from '../../../../modules/ValidationModels'

import Model from './model'


export const Write = async (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'user_id_required', 'user_id_invalid', 'user_not_found_by_id',
      'card_id_required', 'card_id_invalid', 'card_not_found_by_id',
      'form_required'
    ]
  })
  if (error) return res.json({
    success: false,
    response: error
  })
  
  // Валидируем форму
  const Fields = ValidationModels.getModel(req.body.form)
  const errorForm = ValidationFields.Check(Fields, req.body.fields)
  
  if (errorForm) return res.json({
    success: false,
    response: errorForm
  })

  // Проверяем есть ли уже такая запись
  const doc = Model.findOne({
    form: req.body.form,
    cardId: req.body.cardId,
    partId: req.body.partId
  })

  // Если запись есть, то перезаписываем
  if (doc) {
    doc.fields = req.body.fields

    const updatedDoc = doc.save()

    return res.json({
      success: true,
      response: updatedDoc
    })
  }
  
  // Если нет, то создаем запись
  try {
    const created = Model.create({
      form: req.body.form,
      userId: req.body.userId,
      cardId: req.body.cardId,
      fields: req.body.fields,
      partId: req.body.partId
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

export const Read = async (req, res) => {
  // Валидируем полученные данные
  const error = Validation.Check({
    fields: req.body,
    rules: [
      'card_id_required', 'card_id_invalid', 'card_not_found_by_id',
      'form_required'
    ]
  })
  if (error) return res.json({
    success: false,
    response: error
  })

  try {
    const card = Model.findOne({
      form: req.body.form,
      cardId: req.body.cardId,
      partId: req.body.partId
    })

    return res.json({
      success: true,
      response: card
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