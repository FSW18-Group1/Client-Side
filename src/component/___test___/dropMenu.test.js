import React from 'react'
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom"
import DropMenu from '../dropMenu'

afterEach(() => {
    cleanup();
})

test('title header ', () => {
    render(
        <Router>
            <DropMenu/>
        </Router>
    );
    const title = screen.getByTestId('dropMenu-title')
    expect(title).toHaveTextContent('Letitgo-game| home')
    expect(title).not.toBeEmptyDOMElement()
})
 
test('drop menu setting', () => {
    render(
        <Router>
            <DropMenu/>
        </Router>
    );
    const parent = screen.getByTestId('dropMenu')
    const child_1 = screen.getByTestId('dropMenu-toggle')
    expect(parent).toContainElement(child_1)
    expect(child_1).not.toBeEmptyDOMElement()
})


