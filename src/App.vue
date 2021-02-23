<template>
  <b-container fluid>
    <PageTitle>
      <template v-slot:title>My Photos</template>
    </PageTitle>
    <div>refreshing >> {{ refreshing }}</div>
    <div>registration >> {{ registration }}</div>
    <div>updateExists >> {{ updateExists }}</div>
    <div>offline >> {{ offline }}</div>
    <button v-if="updateExists" @click="refreshApp">
      New version available! Click to update
    </button>
    <div class="row"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      :infinite-scroll-distance="CARD_LIMIT">
        <Card v-for="card in cardList"
          :key="card.id"
          :card="card"
          data-aos="fade-up"
          data-aos-offset="100"/>
    </div >
  </b-container>
</template>

<script>
/* eslint-disable no-console */
import Card from './components/Card'
import PageTitle from './components/PageTitle'
import { mapActions, mapState, mapGetters } from 'vuex'
import { CARD_LIMIT } from './infrastructure/Configuration'
import AOS from 'aos'

export default {
  name: 'app',
  components: {
    Card,
    PageTitle
  },
  data: () => ({
    start: 0,
    busy: false,
    refreshing: false,
    registration: null,
    updateExists: false,
    offline: false
  }),
  computed: {
    ...mapState(['cardList']),
    CARD_LIMIT: () => CARD_LIMIT
  },
  methods: {
    ...mapActions(['getCards']),
    ...mapGetters(['lastCardId']),
    loadMore: async function () {
      this.busy = true
      await this.getCards({ start: this.start })
      this.start = this.lastCardId()
      this.busy = false
    },
    showRefreshUI (e) {
      console.log('showRefreshUI :>> ', e)
      // Display a button inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      this.registration = e.detail
      this.updateExists = true
    },
    refreshApp () {
      console.log('refreshApp :>> ')
      // Handle a user tap on the update app button.
      this.updateExists = false
      // Protect against missing registration.waiting.
      if (!this.registration || !this.registration.waiting) { return }
      this.registration.waiting.postMessage('skipWaiting')
    },
    offlineMode (e) {
      console.log('offlineMode :>> ', e)
      this.offline = true
    }
  },
  async created () {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener(
      'swUpdated', this.showRefreshUI, { once: true }
    )

    document.addEventListener(
      'swOffline', this.offlineMode, { once: true }
    )

    // Refresh all open app tabs when a new service worker is installed.
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener(
        'controllerchange', () => {
          if (this.refreshing) return
          this.refreshing = true
          window.location.reload()
        }
      )
    }
    AOS.init()
    this.loadMore()
  }
}
</script>
