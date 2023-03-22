import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import Countries from './Countries'

describe('Countries component', () => {
  test('renders correctly', () => {
    const props = {
      num: 1,
      flag: { png: 'flag.png', alt: 'Flag' },
      name: 'Country Name',
      capital: 'Capital City',
      population: '1000000',
      region: 'Region',
    }
    const tree = renderer
      .create(
        <MemoryRouter>
          <Countries {...props} />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
