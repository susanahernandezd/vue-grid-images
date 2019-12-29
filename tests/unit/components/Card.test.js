import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import photosResponse from '#/fixtures/services/content/photosResponse'
import { BCol, BImg, BSpinner } from 'bootstrap-vue'
import Card from '@/components/Card'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Card Should', () => {
  let wrapper

  beforeEach(() => {
    const store = new Vuex.Store({
      state: {
        loading: {
          delete: 0
        }
      }
    })
    wrapper = shallowMount(Card, {
      stubs: {
        'b-col': BCol,
        'b-img': BImg,
        'b-spinner': BSpinner
      },
      localVue,
      store,
      propsData: {
        card: photosResponse[0]
      }
    })
  })

  it('display card image and title', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
