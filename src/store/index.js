import {
  createStore as _createStore,
  createLogger as _createLogger
} from 'vuex'

import paymentStore from './modules/payment'

const isProd = process.env.NODE_ENV !== 'production'

export function createStore() {
  return _createStore({
    modules: {
      paymentStore
    },
    strict: isProd,
    plugins: isProd ? [] : [_createLogger()]
  })
}
