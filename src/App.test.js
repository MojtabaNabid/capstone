import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
// import Main from './components/Main';
import { initializeTimes, updateTimes } from './components/Main';

test('renders learn react link', () => {
  
  const mockState = {
    time: ["Day and Hour", "Mon, 25/03/24-12:00", "Mon, 25/03/24-13:00", "Mon, 25/03/24-15:00", "Tue, 26/03/24-12:00", "Tue, 26/03/24-13:00", "Tue, 26/03/24-15:00", "Tue, 26/03/24-16:00", "Tue, 26/03/24-17:00", "Tue, 26/03/24-18:00", "Tue, 26/03/24-19:00", "Tue, 26/03/24-20:00", "Tue, 26/03/24-21:00", "Wed, 27/03/24-16:00", "Wed, 27/03/24-19:00", "Wed, 27/03/24-20:00", "Thr, 28/03/24-13:00", "Thr, 28/03/24-14:00", "Thr, 28/03/24-21:00", "Fri, 29/03/24-12:00", "Fri, 29/03/24-17:00", "Fri, 29/03/24-18:00", "Fri, 29/03/24-20:00"]
  }
  render(<BookingForm state={mockState} />);
  const headingElement = screen.getByText("Reservation Details")
  expect(headingElement).toBeInTheDocument();
});

describe('updateTimes', () => {
  it('should handle the time selection', () => {
    const state = { time: ["Mon, 25/03/24-12:00", "Tue, 26/03/24-12:00"], timeSelected: '' };
    const action = { type: 'time', daySelected: "Tue, 26/03/24-12:00" };
    const updatedState = updateTimes(state, action);
    expect(updatedState).toEqual({ time: ["Mon, 25/03/24-12:00", "Tue, 26/03/24-12:00"], timeSelected: "Tue, 26/03/24-12:00" });
  });

  it('should handle the reservation slot', () => {
    const state = { time: ["Mon, 25/03/24-12:00", "Tue, 26/03/24-12:00"], timeSelected: "Tue, 26/03/24-12:00" };
    const action = { type: 'reservationSlot' };
    const updatedState = updateTimes(state, action);
    expect(updatedState).toEqual({ time: ["Mon, 25/03/24-12:00"], timeSelected: "Tue, 26/03/24-12:00" });
  });

});


describe('initializeTimes', () => {
  it('should initialize the times correctly', () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual({
      time: ["Day and Hour", "Mon, 25/03/24-12:00", "Mon, 25/03/24-13:00", "Mon, 25/03/24-15:00", "Tue, 26/03/24-12:00", "Tue, 26/03/24-13:00", "Tue, 26/03/24-15:00", "Tue, 26/03/24-16:00", "Tue, 26/03/24-17:00", "Tue, 26/03/24-18:00", "Tue, 26/03/24-19:00", "Tue, 26/03/24-20:00", "Tue, 26/03/24-21:00", "Wed, 27/03/24-16:00", "Wed, 27/03/24-19:00", "Wed, 27/03/24-20:00", "Thr, 28/03/24-13:00", "Thr, 28/03/24-14:00", "Thr, 28/03/24-21:00", "Fri, 29/03/24-12:00", "Fri, 29/03/24-17:00", "Fri, 29/03/24-18:00", "Fri, 29/03/24-20:00"],
      timeSelected: "",
    });
  });
});