import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskCard from '../TaskCard.vue'

describe('TaskCard', () => {
  it('renders task title and description', () => {
    const task = {
      title: 'Test Task',
      description: 'This is a test task'
    }
    const wrapper = mount(TaskCard, { props: { task } })
    expect(wrapper.text()).toContain(task.title)
    expect(wrapper.text()).toContain(task.description)
  })
})
