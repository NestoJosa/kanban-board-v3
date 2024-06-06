import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import StatusColumn from '../StatusColumn.vue'
import TaskCard from '../TaskCard.vue'

describe('StatusColumn', () => {
  // Declare a variable 'wrapper' of type VueWrapper
  // to hold the instance of the mounted Vue component
  let wrapper: VueWrapper<any>

  const title = 'Status Column Title'
  const cardsList = [
    { id: 1, title: 'Task 1', description: 'Task 1 description' },
    { id: 2, title: 'Task 2', description: 'Task 2 description' },
    { id: 3, title: 'Task 3', description: 'Task 3 description' },
    { id: 4, title: 'Task 4', description: 'Task 4 description' }
  ]

  beforeEach(() => {
    wrapper = mount(StatusColumn, { props: { title, cardsList } })
  })

  it('renders a title', () => {
    expect(wrapper.text()).toContain(title)
  })

  it('renders a list of task cards', () => {
    const foundTaskCards = wrapper.findAllComponents(TaskCard)
    expect(foundTaskCards.length).toBe(cardsList.length)
  })
})
