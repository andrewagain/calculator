// import styles same way as `src/index.js` - they describe
// the HTML page style
import '../../src/index.css'

import { mount } from 'cypress-react-unit-test'
import App from '../../src/component/App'
import React from 'react'

// a few utility page functions

// individual numbers
const press = caption => cy.contains('.component-button', caption).click()
// function buttons
const op = caption => cy.contains('button', caption).click()
// result node
const result = () => cy.get('.component-display')

describe('App', () => {
  beforeEach(() => {
    mount(<App />)
    debugger
  })

  it('shows 7', () => {
    cy.contains('.component-button', '7').click()
    cy.contains('.component-display', '7')
  })

  it('shows 8', () => {
    cy.contains('.component-button', '8').click()
    cy.contains('.component-display', '8')
  })

  it.skip('multiplies', () => {
    // the simplest test without any helper functions
    cy.contains('.component-button', '7').click()
    // cy.contains('button', 'x').click()
    // cy.contains('.component-button', '2').click()
    // cy.contains('button', '=').click()
    // cy.contains('.component-display', '14')
  })

  it.skip('multiplies 2', () => {
    // the simplest test without any helper functions
    cy.contains('.component-button', '7').click()
    cy.contains('button', 'x').click()
    cy.contains('.component-button', '2').click()
    cy.contains('button', '=').click()
    cy.contains('.component-display', '14')
  })

  it.skip('computes modulo', () => {
    // lets use "page functions"
    press('2')
    press('5')
    op('%')
    press('1')
    press('0')
    result().contains('5')
  })
})
