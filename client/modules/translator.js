const errors = [
  // Анамнез жизни
  {
    error: 'ProfessionName_is_required',
    lang: 'Заполните поле "Род деятельности".'
  },
  {
    error: 'PresenceHazards_is_required',
    lang: 'Заполните поле "Наличие профессиональных факторов вредности".'
  },
  {
    error: 'OccupationalPhysician_is_required',
    lang: 'Заполните поле "Состоит на учете у профпатолога".'
  },
  {
    error: 'Smoking_is_required',
    lang: 'Заполните поле "Курение".'
  },
  {
    error: 'HeightCm_is_required',
    lang: 'Заполните поле "Рост, см".'
  },
  {
    error: 'WeightKg_is_required',
    lang: 'Заполните поле "Вес, кг".'
  },

  // Основной диагноз
  {
    error: 'ClinicDiagnoz_is_required',
    lang: 'Заполните поле "Клинический диагноз".'
  },
  {
    error: 'ProductionDate_is_required',
    lang: 'Заполните поле "Дата постановки".'
  },
  {
    error: 'ProductionDate_is_invalid',
    lang: 'Введите корректные данные в поле "Дата постановки".'
  },
  {
    error: 'ClassificationGOLD_is_required',
    lang: 'Заполните поле "Классификация по GOLD".'
  },
  {
    error: 'DiagnozDefault_is_required',
    lang: 'Заполните поле "Диагноз основного заболевания".'
  },

  // Сопутствующие диагнозы
  {
    error: 'Diagnoz_is_required',
    lang: 'Заполните поле "Диагноз".'
  },
  {
    error: 'Year_is_invalid',
    lang: 'Введите корректные данные в поле "Год".'
  },
  {
    error: 'Amount_is_required',
    lang: 'Заполните поле "Количество".'
  },

  // Анамнез заболевания
  {
    error: 'Year_is_required',
    lang: 'Заполните поле "Год".'
  },

  // Показатели
  {
    error: 'EventDate_is_required',
    lang: 'Заполните поле "Дата проведения".'
  },
  {
    error: 'EventDate_is_invalid',
    lang: 'Введите корректные данные в поле "Дата проведения".'
  },
  {
    error: 'OfvBefore_is_required',
    lang: 'Заполните поле "ОФВ1 до бронхолитика".'
  },
  {
    error: 'OfvAfter_is_required',
    lang: 'Заполните поле "ОФВ1 после бронхолитика".'
  },
  {
    error: 'FjelAfter_is_required',
    lang: 'Заполните поле "ФЖЕЛ после бронхолитика".'
  },
  {
    error: 'RiskGOLD_is_required',
    lang: 'Заполните поле "Риск по GOLD".'
  },
  {
    error: 'SeverityGOLD_is_required',
    lang: 'Заполните поле "Степень тяжести по GOLD".'
  },
  {
    error: 'Indicator_is_required',
    lang: 'Заполните поле "Показатель".'
  },
  {
    error: 'FenotipHOBL_is_required',
    lang: 'Заполните поле "Фенотип ХОБЛ".'
  },
  {
    error: 'Points_is_required',
    lang: 'Заполните поле "Баллы".'
  },
  {
    error: 'Stage_is_required',
    lang: 'Заполните поле "Степень".'
  },

  // Коморбидная патология
  {
    error: 'Comorbidities_is_required',
    lang: 'Заполните поле "Наличие коморбидной патологии".'
  },
  {
    error: 'CachexiaStart_is_invalid',
    lang: 'Введите корректные данные в поле "Кахексия - Год начала".'
  },
  {
    error: 'CachexiaEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Кахексия - Год окончания".'
  },
  {
    error: 'AnemiaStart_is_invalid',
    lang: 'Введите корректные данные в поле "Анемия - Год начала".'
  },
  {
    error: 'AnemiaEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Анемия - Год окончания".'
  },
  {
    error: 'DepressionStart_is_invalid',
    lang: 'Введите корректные данные в поле "Депрессия - Год начала".'
  },
  {
    error: 'DepressionEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Депрессия - Год окончания".'
  },
  {
    error: 'GERBStart_is_invalid',
    lang: 'Введите корректные данные в поле "ГЭРБ - Год начала".'
  },
  {
    error: 'GERBEnd_is_invalid',
    lang: 'Введите корректные данные в поле "ГЭРБ - Год окончания".'
  },
  {
    error: 'OsteoporosisStart_is_invalid',
    lang: 'Введите корректные данные в поле "Остеопороз - Год начала".'
  },
  {
    error: 'OsteoporosisEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Остеопороз - Год окончания".'
  },
  {
    error: 'IBSStart_is_invalid',
    lang: 'Введите корректные данные в поле "ИБС - Год начала".'
  },
  {
    error: 'IBSEnd_is_invalid',
    lang: 'Введите корректные данные в поле "ИБС - Год окончания".'
  },
  {
    error: 'HypertensionStart_is_invalid',
    lang: 'Введите корректные данные в поле "Артериальная гипертензия - Год начала".'
  },
  {
    error: 'HypertensionEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Артериальная гипертензия - Год окончания".'
  },
  {
    error: 'HSNStart_is_invalid',
    lang: 'Введите корректные данные в поле "ХСН - Год начала".'
  },
  {
    error: 'HSNEnd_is_invalid',
    lang: 'Введите корректные данные в поле "ХСН - Год окончания".'
  },
  {
    error: 'DiabetStart_is_invalid',
    lang: 'Введите корректные данные в поле "Сахарный диабет - Год начала".'
  },
  {
    error: 'DiabetEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Сахарный диабет - Год окончания".'
  },
  {
    error: 'OtherStart_is_invalid',
    lang: 'Введите корректные данные в поле "Другая патология - Год начала".'
  },
  {
    error: 'OtherEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Другая патология - Год окончания".'
  },

  // Инвалидность
  {
    error: 'Disability_is_required',
    lang: 'Заполните поле "Инвалидность".'
  },

  // Препараты
  {
    error: 'DrugName_is_required',
    lang: 'Заполните поле "Препарат".'
  },
  {
    error: 'Dosage_is_required',
    lang: 'Заполните поле "Дозировка".'
  },
  {
    error: 'ReceptionPerDay_is_required',
    lang: 'Заполните поле "Кратность приема в день".'
  },
  {
    error: 'YearStart_is_required',
    lang: 'Заполните поле "Год начала".'
  },
  {
    error: 'YearStart_is_invalid',
    lang: 'Введите корректные данные в поле "Год начала".'
  },
  {
    error: 'DrugEnd_is_required',
    lang: 'Заполните поле "Прием окончен".'
  },

  // Прививочный анамнез
  {
    error: 'Vaccina_is_required',
    lang: 'Заполните поле "Вакцина".'
  },

  // Дополнительная информация из анамнеза
  {
    error: 'Additional_is_required',
    lang: 'Заполните поле "Дополнительная информация из анамнеза".'
  },

  // Госпитализации
  {
    error: 'Cause_is_required',
    lang: 'Заполните поле "Причина".'
  },
  {
    error: 'HospitalizationStart_is_required',
    lang: 'Заполните поле "Дата госпитализации".'
  },
  {
    error: 'HospitalizationStart_is_invalid',
    lang: 'Введите корректные данные в поле "Дата госпитализации".'
  },
  {
    error: 'HospitalizationEnd_is_required',
    lang: 'Заполните поле "Дата выписки".'
  },
  {
    error: 'HospitalizationEnd_is_invalid',
    lang: 'Введите корректные данные в поле "Дата выписки".'
  },
  {
    error: 'NumberDays_is_required',
    lang: 'Заполните поле "Количество койко-дней".'
  },

  // Визиты
  {
    error: 'VisitDate_is_required',
    lang: 'Заполните поле "Дата визита".'
  },
  {
    error: 'VisitDate_is_invalid',
    lang: 'Введите корректные данные в поле "Дата визита".'
  },
  {
    error: 'VisitResult_is_required',
    lang: 'Введите корректные данные в поле "Итог визита".'
  },

  // Вакцинации
  {
    error: 'VaccineReactions_is_required',
    lang: 'Заполните поле "Поствакцинальные реакции".'
  },

  // Функциональные показатели
  {
    error: 'Result_is_required',
    lang: 'Заполните поле "Результат".'
  },
  {
    error: 'Conclusion_is_required',
    lang: 'Заполните поле "Заключение".'
  },

  // Исход терапии
  {
    error: 'ResultTherapy_is_required',
    lang: 'Заполните поле "Исход терапии".'
  }
]

export default {
  boolean (data) {
    if (data === true) {
      return 'Да'
    } else if (data === false) {
      return 'Нет'
    }
  },
  keyDate (data) {
    if (data) return data.substring(0, 2) + '.' + data.substring(2, 4) + '.' + data.substring(4, 8)
    else return data
  },
  error (data) {
    for (let i = 0; i < errors.length; i++) {
      const translit = errors[i]
      if (translit.error === data) {
        return translit.lang
      }
    }
    return data
  }
}
