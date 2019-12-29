import axiosClient from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { contentService } from '@/infrastructure/Factory'
import photosResponse from '#/fixtures/services/content/photosResponse'
import { contentApi } from '@/infrastructure/Configuration'

const axios = new MockAdapter(axiosClient)

describe('Content Service Should', () => {
  it('retrieve images', async () => {
    const start = 0
    const limit = 7
    const url = `${contentApi}/photos?_start=${start}&_limit=${limit}`

    axios.onGet(url, { start, limit }).reply(200, photosResponse)
    const result = await contentService.getPhotos({ start, limit })

    expect(result).toEqual(photosResponse)
  })

  it('delete image', async () => {
    const photoId = 1
    const url = `${contentApi}/photos/${photoId}`

    axios.onDelete(url, photoId).reply(200, {})
    const result = await contentService.deletePhoto(photoId)

    expect(result).toEqual({})
  })
})
