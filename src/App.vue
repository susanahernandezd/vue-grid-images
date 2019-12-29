<template>
  <b-container fluid>
    <PageTitle>
      <template v-slot:title>My Photos</template>
    </PageTitle>
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
    busy: false
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
    }
  },
  async created () {
    AOS.init()
    this.loadMore()
  }
}
</script>
