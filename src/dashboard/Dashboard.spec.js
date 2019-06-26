// Test away
import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import {render, fireEvent} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from './Dashboard'

import Display from '../display/Display'
import Control from '../controls/Controls'

describe('<Dashboard/>', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it('renders Display and Control component', () => {
        const renderDisplayTest = render(<Display/>)
        const renderControlTest = render(<Control/>)
    })

})