/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'SW ready >> App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered (registration) {
      console.log('SW registered >> Service worker has been registered.')
      // will automatically check for app updates on a routine basis
      setInterval(() => {
        registration.update()
      }, 1000 * 60 * 60) // e.g. hourly checks
    },
    cached () {
      console.log('SW cached >> Content has been cached for offline use.')
    },
    updatefound () {
      console.log('SW updatefound >> New content is downloading.')
    },
    updated (registration) {
      console.log('SW updated >> New content is available; please refresh.')
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      )
    },
    offline () {
      console.log('OFFLINE MODE ON.')
      document.dispatchEvent(
        new CustomEvent('swOffline', { detail: 'Su app is offline' })
      )
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
