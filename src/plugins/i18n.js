import { createI18n } from 'vue-i18n'

import es from '../locales/es.json'
import ca from '../locales/ca.json'

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || 'es',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'es',
  messages: { es, ca }
})

export default i18n
