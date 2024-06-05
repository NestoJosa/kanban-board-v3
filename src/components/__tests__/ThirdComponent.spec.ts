import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ThirdComponent from '../ThirdComponent.vue'

describe('ThirdComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(ThirdComponent, { props: { msg: 'Hello ThirdComponent' } })
    expect(wrapper.text()).toContain('Hello ThirdComponent')
  })
})
