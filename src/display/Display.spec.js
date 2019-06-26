import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Display from './Display'
afterEach(cleanup)

describe('<Display  />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it('should display closed if closed prop is true', () =>{

        const {getByText, queryByText} = render(<Display closed = {true}/>)

        getByText(/Closed/i)
    })

    it('should display open if closed prop is false', () => {
        const {getByText, queryByText} = render(<Display/>)

        getByText(/Open/i)

    })

    it('should display Locked if locked prop is true', () => {
        const {getByText, queryByText} = render(<Display locked={true}/>)

        getByText(/Locked/i)
    })

    it('should display Unlocked if locked prop is false', () => {
        const {getByText,  queryByText} = render(<Display locked={false}/>)

        getByText(/Unlocked/i)
    })

    it("when locked or closed use the red-led class", () => {
        const display = render(<Display locked = {true} closed = {true} />)
        const lockedDiv = display.getByTestId(/locked-div/i)
        const closedDiv = display.getByTestId(/closed-div/i)

        expect(lockedDiv.classList[1]).toBe('red-led')
        expect(closedDiv.classList[1]).toBe('red-led')
    })

    it('closes panel sets classname to green-led when open or unlocked', () => {
        const display = render(<Display locked = {false} closed = {false} />)
        
        const lockedDiv = display.getByTestId(/locked-div/i)
        const closedDiv = display.getByTestId(/closed-div/i)

        expect(lockedDiv.classList[1]).toBe('green-led')
        expect(closedDiv.classList[1]).toBe('green-led')
    })
})