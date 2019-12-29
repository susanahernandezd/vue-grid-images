import { contentApi, CARD_LIMIT } from '@/infrastructure/Configuration'

export default class ContentService {
  constructor (httpClient) {
    this._httpClient = httpClient
  }

  async getPhotos ({ start = 0, limit = CARD_LIMIT }) {
    const url = `${contentApi}/photos?_start=${start}&_limit=${limit}`
    const { data } = await this._httpClient.get(url)

    return data
  }

  async deletePhoto (photoId) {
    if (!photoId) {
      return
    }
    const url = `${contentApi}/photos/${photoId}`
    const { data } = await this._httpClient.delete(url)

    return data
  }
}
