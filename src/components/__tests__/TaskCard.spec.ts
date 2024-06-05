import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskCard from '../TaskCard.vue'

describe('TaskCard', () => {
  it('renders a title and a description', () => {
    const title = 'Task Card'
    const description = 'Card Description'
    const wrapper = mount(TaskCard, { props: { title, description } })
    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(description)
  })
})
