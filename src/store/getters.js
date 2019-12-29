export default {
  lastCardId: ({ cardList = [] }) => {
    return cardList.length > 0 ? cardList[cardList.length - 1].id : 0
  }
}
