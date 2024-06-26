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

  // Before each test, mount the StatusColumn component with the given props
  // and assign the resulting VueWrapper instance to the 'wrapper' variable
  beforeEach(() => {
    wrapper = mount(StatusColumn, { props: { title, cardsList } })
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders a title', () => {
    expect(wrapper.text()).toContain(title)
  })

  it('renders a list of task cards', () => {
    const foundTaskCards = wrapper.findAllComponents(TaskCard)
    expect(foundTaskCards.length).toBe(cardsList.length)
  })

  it('renders TaskCard components with correct props', () => {
    cardsList.forEach((card, index) => {
      // Find all TaskCard components in the StatusColumn,
      // select the one at the current index,
      // and assign it to 'taskCard'
      const taskCard = wrapper.findAllComponents(TaskCard)[index]
      expect(taskCard.props().title).toBe(card.title)
      expect(taskCard.props().description).toBe(card.description)
    })
  })
})
