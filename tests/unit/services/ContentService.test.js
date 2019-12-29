/* eslint-env jest */
import axiosClient from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { contentService } from '@/infrastructure/Factory'
import imagesResponse from '#/fixtures/services/content/imagesResponse'
import { contentApi } from '@/infrastructure/Configuration'

const axios = new MockAdapter(axiosClient)

describe('Content Service Should', () => {
  it('retrieve images', async () => {
    const url = `${contentApi}/photos`

    axios.onGet(url).reply(200, imagesResponse)
    const result = await contentService.getImages()

    expect(result).toEqual(imagesResponse)
  })
})
