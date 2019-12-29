export default {
  cards: ({ cards = undefined }) => {
    if (!cards) {
      return
    }
    return cards.map(({ id, title, url }) => ({ id, title, url }))
  }
}
