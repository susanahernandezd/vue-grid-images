import getters from '@/store/getters'

describe('Getters should', () => {
  it('retrieve last cardId of cardList', () => {
    const cardList = [
      {
        'albumId': 1,
        'id': 1,
        'title': 'accusamus beatae ad facilis cum similique qui sunt',
        'url': 'https://via.placeholder.com/600/92c952',
        'thumbnailUrl': 'https://via.placeholder.com/150/92c952'
      },
      {
        'albumId': 1,
        'id': 2,
        'title': 'reprehenderit est deserunt velit ipsam',
        'url': 'https://via.placeholder.com/600/771796',
        'thumbnailUrl': 'https://via.placeholder.com/150/771796'
      }
    ]
    const state = { cardList }

    expect(getters.lastCardId(state)).toBe(2)
  })

  it('retrieve 0 if cardList is empty', () => {
    const state = { 
      cardList: []
    }

    expect(getters.lastCardId(state)).toBe(0)
  })
})
