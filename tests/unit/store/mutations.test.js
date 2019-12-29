import mutations from '@/store/mutations'
import photosResponse from '#/fixtures/services/content/photosResponse'

describe('Mutations should', () => {
  let cardList
  let state

  beforeEach(() => {
    cardList = [
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
    state = {
      cardList
    }
  })

  it('Add new cards to cardList', () => {    
    const newCards = [photosResponse[2]]
    const result = [...cardList, ...newCards]

    mutations.cards(state, newCards)

    expect(state.cardList).toEqual(result)
  })

  it('delete specific card of the cardList', () => {
    const result = [{
      'albumId': 1,
      'id': 2,
      'title': 'reprehenderit est deserunt velit ipsam',
      'url': 'https://via.placeholder.com/600/771796',
      'thumbnailUrl': 'https://via.placeholder.com/150/771796'
    }]

    mutations.deleteCard(state, 1)

    expect(state.cardList).toEqual(result)
  })
})
