// Test away
import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import {render, cleanup,fireEvent} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Controls  from './Controls'


afterEach(cleanup)

describe('<Controls/>', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it('provided button to toggle closed and locked states', () => {
        const gateLock = render(<Controls />)
        expect(gateLock.getByTestId(/toggle-locked/i))
        expect(gateLock.getByTestId(/toggle-closed/i))
    })

    it('toggle-locked renders "lock gate"when unlocked, and "close gate" when gate is open', () => {
        const gate = render(<Controls locked={false}/>)
        expect(gate.getByText(/lock gate/i))
        expect(gate.getByText(/close gate/i))
    })

    it('toggle-closed renders "unlock gate" and "open gate"  when gate is locked/closed', () => {
        const gate = render(<Controls locked closed/>)
        expect(gate.getByText(/unlock gate/i))
        expect(gate.getByText(/open gate/i))
    })

    it('when gate is locked/open, toggle-closed is disabled', () => {
        const gate = render(<Controls locked/>)
        const closedButton = gate.getByTestId(/toggle-closed/i)
        const lockedButton = gate.getByTestId(/toggle-locked/i)
        expect(closedButton.disabled).toBe(true)
        expect(lockedButton.disabled).toBe(true)
    })

})