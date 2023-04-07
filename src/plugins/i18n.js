import { createI18n } from 'vue-i18n'

import es from '../locales/es.json'
import ca from '../locales/ca.json'

export function getBrowserLang() {
  let browserLocale = navigator.language;

  if (navigator.languages !== undefined) {
    [browserLocale] = navigator.languages;
  }

  return browserLocale;
}

const locale = getBrowserLang() || import.meta.env.VUE_APP_I18N_LOCALE || 'es';
const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'es',
  messages: { es, ca }
})

export default i18n
