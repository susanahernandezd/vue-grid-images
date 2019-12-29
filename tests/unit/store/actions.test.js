import { contentService } from '@/infrastructure/Factory'
import actions from '@/store/actions'
import photosResponse from '#/fixtures/services/content/photosResponse'

describe('Actions should', () => {
  let commit

  beforeEach(() => {
    contentService.getPhotos = jest.fn(() => Promise.resolve(photosResponse))
    contentService.deletePhoto = jest.fn(() => Promise.resolve({}))
    commit = jest.fn()
  })

  it('retrieve cards form content api', async () => {
    await actions.getCards({ commit }, { start: 0, limit: 16 })

    expect(commit).toHaveBeenCalledWith('cards', photosResponse)
  })

  it('delete image from content api', async () => {
    const photoId = 1
    await actions.deleteCard({ commit }, photoId)

    expect(commit).toHaveBeenCalledWith('deleteCard', photoId)
  })
})
