import { mount } from 'cypress-react-unit-test'
import Display from '../../src/component/Display'
import React from 'react'

describe('Display', () => {
  it('shows prop value', () => {
    debugger
    mount(<Display value="100" />)
    cy.contains('.component-display', '100')
  })
})
