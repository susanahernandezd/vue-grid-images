import { contentService } from '@/infrastructure/Factory'

export default {
  async getCards ({ commit }) {
    const images = await contentService.getImages()
    commit('cards', images)
  }
}
