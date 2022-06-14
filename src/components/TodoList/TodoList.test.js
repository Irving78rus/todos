import {render, screen, fireEvent} from '@testing-library/react';
import TodoList from './TodoList';
import App from "../../App";

describe('TodoList component', () => {
    test('render TodoList component', () => {
        render(<App><TodoList/></App>)
        const inputElement = screen.getByPlaceholderText(/What needs to be done/i);
        expect(inputElement).toBeInTheDocument();
    })

    test("render todo", () => {
        render(<App><TodoList/></App>)
        const input = screen.queryByTestId('input-id')
        expect(screen.queryByTestId('input-id')).toContainHTML('')
        fireEvent.input(input, {
            target: {value: 'test tasks'}
        })
        expect(screen.queryByTestId('input-id')).toContainHTML('test tasks')

    })
    test("Add todo", () => {
        render(<App><TodoList/></App>)
        const input = screen.queryByTestId('input-id')
        fireEvent.input(input, {
            target: {value: 'my tasks'}
        })
        const btn = screen.getByText(/Add todo/i);
        fireEvent.click(btn)
        const todo = screen.queryByText(/my tasks/i);
        expect(todo).toBeInTheDocument()
    })

    test("Add error", () => {
        render(<App><TodoList/></App>)
        const error = screen.queryByText(/The task cannot be empty/i);
        const btn = screen.getByText(/Add todo/i);
        expect(error).toBeNull()

        fireEvent.click(btn)
        const error2 = screen.queryByText(/The task cannot be empty/i);
        expect(error2).toBeInTheDocument()
    })

})


