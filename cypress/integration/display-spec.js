import { mount } from 'cypress-react-unit-test'
import Display from '../../src/component/Display'
import React from 'react'

describe('Display', () => {
  beforeEach(() => {
    mount(<Display value="100" />)
  })

  it('shows prop value', () => {
    cy.contains('.component-display', '100')
  })
})
