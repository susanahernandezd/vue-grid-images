<template>
  <b-col v-if="card" cols="4" md="3" xl="2" class="mb-4">
    <div class="card" @click="removeCard">
      <div v-if="removing" class="card__spinner">
        <b-spinner label="Loading"></b-spinner>
      </div>
      <b-img class="card__image img-responsive" fluid :src="card.url" :alt="card.title"></b-img>
      <div class="card__text">
        <h2 class="card__title d-none d-md-block">{{ card.title }}</h2>
        <button class="card__button">
          <span class="sr-only">Remove photo</span>
        </button>
      </div>
    </div>
    <h2 class="card__title--sm d-md-none">{{ card.title }}</h2>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Card',
  data: () => ({
    removing: false
  }),
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['deleteCard']),
    async removeCard () {
      if (!this.removing) {
        this.removing = true
        try {
          await this.deleteCard(this.card.id)
        } finally {
          this.removing = false
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import './src/styles/components/_card';
</style>
