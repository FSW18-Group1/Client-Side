import { render, screen, cleanup } from "@testing-library/react";
import Upload from '../uploadImage'

test('should render upload component', () => {
    render(<Upload/>);
    const component = screen.getByTestId('upload');
    expect(component).toBeInTheDocument();
})