/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('Home Page', () => {
  it('App shows button "Show User Details"', () => {
    const app = shallow(<App />)
    expect(app.find('#show').text()).toEqual('Show User Details')
  })
})
