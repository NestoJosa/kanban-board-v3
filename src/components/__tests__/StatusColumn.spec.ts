import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusColumn from '../StatusColumn.vue'
import TaskCard from '../TaskCard.vue'

describe('StatusColumn', () => {
  const title = 'Status Column Title'
  const cardsList = [
    { id: 1, title: 'Task 1', description: 'Task 1 description' },
    { id: 2, title: 'Task 2', description: 'Task 2 description' },
    { id: 3, title: 'Task 3', description: 'Task 3 description' },
    { id: 4, title: 'Task 4', description: 'Task 4 description' }
  ]

  it('renders a title', () => {
    const wrapper = mount(StatusColumn, { props: { title, cardsList } })
    expect(wrapper.text()).toContain(title)
  })

  it('renders a list of task cards', () => {
    const wrapper = mount(StatusColumn, { props: { title, cardsList } })
    const foundTaskCards = wrapper.findAllComponents(TaskCard)
    expect(foundTaskCards.length).toBe(cardsList.length)
  })
})
