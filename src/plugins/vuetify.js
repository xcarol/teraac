// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../assets/main.scss'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#003253',
          secondary: '#FFFFFF',
        },
      },
    },
  },
})
