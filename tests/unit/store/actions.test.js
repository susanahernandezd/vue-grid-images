/* eslint-disable no-undef */
import { contentService } from '@/infrastructure/Factory'
import actions from '@/store/actions'
import imagesResponse from '#/fixtures/services/content/imagesResponse'

describe('Actions should', () => {
  let commit

  beforeEach(() => {
    contentService.getImages = jest.fn(() => Promise.resolve(imagesResponse))
    commit = jest.fn()
  })

  it('retrieve cards form api content', async () => {
    await actions.getCards({ commit })

    expect(commit).toHaveBeenCalledWith('cards', imagesResponse)
  })
})
