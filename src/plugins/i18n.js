// eslint-disable-next-line import/no-extraneous-dependencies
import VueCookies from 'vue-cookies';
import { createI18n } from 'vue-i18n';

import es from '../locales/es.json';
import ca from '../locales/ca.json';

function getUserLanguage() {
  return VueCookies.get('locale');
}

export function getBrowserLang() {
  let browserLocale = navigator.language;

  if (navigator.languages !== undefined) {
    [browserLocale] = navigator.languages;
  }

  if (browserLocale === 'ca-ES') {
    browserLocale = 'ca';
  }

  return browserLocale;
}

const locale = getUserLanguage() || getBrowserLang() || import.meta.env.VITE_I18N_LOCALE || 'ca';
const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'ca',
  messages: { es, ca },
});

export default i18n;
