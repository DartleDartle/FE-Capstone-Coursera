import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getAllByRole("button");
    fireEvent.click(reserveButton[0]);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getAllByRole("button");
  fireEvent.click(reserveButton[0]);

  const testTime = []
  //userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  //expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);


})