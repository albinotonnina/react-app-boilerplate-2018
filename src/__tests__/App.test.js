import React from 'react'
import {shallow} from 'enzyme'
import Component from '../App'

describe('App', () => {
  it('should match its empty snapshot', () => {
    const shallowed = shallow(<Component />)
    expect(shallowed).toMatchSnapshot()
  })
})
