// import styles same way as `src/index.js` - they describe
// the HTML page style
import '../../src/index.css'

import { mount } from 'cypress-react-unit-test'
import App from '../../src/component/App'
import React from 'react'

describe('App', () => {
  beforeEach(() => {
    mount(<App />)
  })

  it('loads calculator', () => {})
})
