import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import Content from '../content'

afterEach(() => {
    cleanup();
})

test('render playable games collection', () => {
    render(
        <BrowserRouter>
            <Content/>
        </BrowserRouter>
    );
    const content_1 = screen.getByTestId('content-1');
    expect(content_1).toBeInTheDocument();
    expect(content_1).toHaveTextContent('pingsut')
    expect(content_1).not.toContainHTML("<strike />")
})

test('render unplayable games collection', () => {
    render(
        <BrowserRouter>
            <Content/>
        </BrowserRouter>
    );
    const content_2 = screen.getByTestId('content-2');
    const content_3 = screen.getByTestId('content-3');
    const content_4 = screen.getByTestId('content-4');
    const content_5 = screen.getByTestId('content-5');
    for (let i = 2; i <= 5; i++) {
        expect(screen.getByTestId(`content-${i}`)).toContainHTML("<strike></strike>") 
    }
})