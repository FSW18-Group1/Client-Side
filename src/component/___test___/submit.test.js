import React from 'react'
import ReactDOM  from 'react-dom';
import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import "@testing-library/jest-dom"
import Submit from '../submit'

afterEach(() => {
    cleanup();
})

test('render Sign in in login page ', () => {
    const {getByTestId} = render(<Submit command="Sign In"/>);
    expect(getByTestId('submit')).toHaveTextContent("Sign In")
})

test('render Create Account in signup page ', () => {
    const {getByTestId} = render(<Submit command="Create Account"/>);
    expect(getByTestId('submit')).toHaveTextContent("Create Account")
})

test('matches snapshot signup submit component', () => {
    const tree = renderer.create(<Submit command="Create Account"/>).toJSON();
    expect(tree).toMatchSnapshot();
})