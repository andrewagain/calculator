import { mount } from 'cypress-react-unit-test'
import App from '../../src/component/App'
import React from 'react'
import './index.css'

describe('App', () => {
  beforeEach(() => {
    mount(<App />)
  })

  it('loads calculator', () => {})
})
