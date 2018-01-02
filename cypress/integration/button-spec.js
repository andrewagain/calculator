import { mount } from 'cypress-react-unit-test'
import Button from '../../src/component/Button'
import React from 'react'

describe('Button', () => {
  it('clicks', () => {
    const clicked = cy.spy()
    mount(<Button name="Test Button" clickHandler={clicked} />)
    cy
      .get('.component-button')
      .click()
      .then(() => {
        expect(clicked).to.have.been.calledOnce
      })
  })

  it('has a label', () => {
    mount(<Button name="My Button" />)
    cy.contains('My Button')
  })
})
