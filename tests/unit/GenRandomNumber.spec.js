import GenRandomNumber from '@/components/GenRandomNumber.vue'
import { mount } from '@vue/test-utils'

describe('GenRandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(GenRandomNumber)
    expect(wrapper.html()).toContain('<h3>0</h3>')
  })

  test('If button is clicked, randomNumber should be between 1 and 10', async () => {
    const wrapper = mount(GenRandomNumber)
    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()

    const num = parseInt(wrapper.find('h3').element.textContent)
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(10)
  })

  test('If button is clicked, randomNumber should be between 200 and 300', async () => {
    const wrapper = mount(GenRandomNumber, {
      propsData: {
        min: 55,
        max: 66
      }
    })
    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()

    const num = parseInt(wrapper.find('h3').element.textContent)
    expect(num).toBeGreaterThanOrEqual(55)
    expect(num).toBeLessThanOrEqual(66)
  })
})
