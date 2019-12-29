export default {
  cards (state, cards) {
    state.cardList.push(...cards)
  },

  deleteCard (state, cardId) {
    state.cardList = state.cardList.filter((card) => card.id !== cardId)
  }
}
