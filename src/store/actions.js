import { contentService } from '@/infrastructure/Factory'

export default {
  async getCards ({ commit }, { start, limit }) {
    const images = await contentService.getPhotos({ start, limit })
    commit('cards', images)
  },

  async deleteCard ({ commit }, cardId) {
    await contentService.deletePhoto(cardId)
    commit('deleteCard', cardId)
  }
}
