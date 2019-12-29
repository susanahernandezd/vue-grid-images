import { contentApi } from '@/infrastructure/Configuration'

export default class ContentService {
  constructor (httpClient) {
    this._httpClient = httpClient
  }

  async getImages () {
    const url = `${contentApi}/photos`
    const { data } = await this._httpClient.get(url)

    return data
  }
}
