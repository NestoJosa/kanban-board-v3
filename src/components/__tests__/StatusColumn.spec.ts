import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusColumn from '../StatusColumn.vue'

describe('StatusColumn', () => {
  it('renders a title', () => {
    const title = 'Status Column Title'
    const wrapper = mount(StatusColumn, { props: { title } })
    expect(wrapper.text()).toContain(title)
  })
})
