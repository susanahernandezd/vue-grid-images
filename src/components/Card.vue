<template>
  <b-row>
    <b-col cols="4">
      <div class="card">
        <b-img class="card__image img-responsive" fluid src="https://via.placeholder.com/600/92c952" alt=""></b-img>
        <div class="card__text">
          <h2 class="card__title">accusamus beatae ad facilis cum similique qui sunt</h2>
          <button class="card__button">
            <span>Remove image</span>
          </button>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss">
@import './src/styles/components/_card';
</style>
