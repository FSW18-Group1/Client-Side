import { render, screen, cleanup } from "@testing-library/react";
import Upload from '../uploadImage'

test('render upload image component', () => {
    render(<Upload/>);
    const input = screen.getByLabelText('upload img')
    const component = screen.getByTestId('upload');
    const setImage = screen.getByTestId('image')
    expect(component).toBeInTheDocument();
    expect(input).toHaveDisplayValue('')
    expect(setImage).toHaveClass('upload-image')

})