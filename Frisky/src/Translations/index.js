import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './resources'
import * as RNLocalize from "react-native-localize";

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    return callback(RNLocalize.getLocales()[0].languageCode)
  },
  init: () => { },
  cacheUserLanguage: () => { }
}
i18n.use(languageDetector).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  fallbackLng: ["en", "ko", "hi"],
})

export default i18n
