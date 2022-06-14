import {fireEvent, render, screen} from '@testing-library/react';
import App from '../../App';
import Setting from './Setting';

describe ('Setting component',()=>{

    test('render Setting component', () => {
        render(<App ><Setting /></App>)
      const divElement = screen.getByText(/active/i);
      expect(divElement).toBeInTheDocument();
    });
    // Остальные тесты фильтрации списка задач писать не стал, т.к. это была бы почти копипаста
    test("Select active todo", () => {
        render(<App ><Setting  /></App>)
        const todo = screen.getByText(/Tasks 2/i)
        expect(todo).toBeInTheDocument()
        const btn = screen.getByText(/active/i);
        fireEvent.click(btn)
        const todo2 = screen.queryByText(/Tasks 2/i);
        expect(todo2).toBeNull()
    })
})

