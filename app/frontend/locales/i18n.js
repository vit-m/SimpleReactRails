import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './ru.json'
import en from './en.json'

i18n.
  use(initReactI18next).
  init({
    resources: {
      en: {
        common: en
      },
      ru: {
        common: ru
      },
    },
    lng: 'ru',
  })

  export default i18n
