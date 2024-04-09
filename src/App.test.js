import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
// import Main from './components/Main';
import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI } from './mockAPI';
import * as api from './mockAPI';

/* ****************** test a static test in Bookingform component ***************** */
test('a static text in the booking form page', () => {
  const mockState = {
    time: ["Day and Hour", "Mon, 25/03/24-12:00", "Mon, 25/03/24-13:00", "Mon, 25/03/24-15:00", "Tue, 26/03/24-12:00", "Tue, 26/03/24-13:00", "Tue, 26/03/24-15:00", "Tue, 26/03/24-16:00", "Tue, 26/03/24-17:00", "Tue, 26/03/24-18:00", "Tue, 26/03/24-19:00", "Tue, 26/03/24-20:00", "Tue, 26/03/24-21:00", "Wed, 27/03/24-16:00", "Wed, 27/03/24-19:00", "Wed, 27/03/24-20:00", "Thr, 28/03/24-13:00", "Thr, 28/03/24-14:00", "Thr, 28/03/24-21:00", "Fri, 29/03/24-12:00", "Fri, 29/03/24-17:00", "Fri, 29/03/24-18:00", "Fri, 29/03/24-20:00"]
  }
  render(<BookingForm state={mockState} />);
  const headingElement = screen.getByText("Reservation Details")
  expect(headingElement).toBeInTheDocument();
});


/* ****************** updateTimes function ***************** */
describe('updateTimes', () => {
  it('should handle the day action', () => {
    const state = { date: "", hour: ["12:00", "13:00", "15:00"]  };
    const action = { type: 'day', daySelected: "Tue, 26/03/24"};
    const updatedState = updateTimes(state, action);
    expect(updatedState).toEqual({ date: "Tue, 26/03/24", hour: expect.any(Array) });
  })


  it('should update the hours', () => {
    const state = { time: "", hour: ['12:00', '13:00', '15:00'] };
    const action = { type: 'hour', hourSelected: "13:00" };
    const updatedState = updateTimes(state, action);
    expect(updatedState).toEqual({ time: "13:00", hour: ['12:00', '13:00', '15:00'] });
  });


//   it('should update available times after a reservation', async () => {
//     // Initial state before making a reservation
//     const initialState = {
//       date: "Tue, 26/03/24",
//       time: "13:00",
//       hour: ['choose Time','12:00', '13:00', '15:00'],
//     };
//     const action = { type: 'reservationSlot' };
//     const updatedState = updateTimes(initialState, action);
//     // await expect(fetchAPI(initialState.date)).resolves.toEqual(['choose Time','12:00', '15:00']); //'13:00' should be removed
//     expect(updatedState).toEqual(expect.objectContaining({
//       date: "Tue, 26/03/24",
//       time: "13:00",
//       hour: ['choose Time','12:00', '15:00'],
//     }));
// });
})

/* ****************** initializeTimes function ***************** */


// describe('initializeTimes', () => {
//   it('should initialize the times correctly', () => {
//     // Mock fetchAPI here to return a predictable value for 'hour'
//     const initialState = initializeTimes();
//     expect(initialState).toEqual({
//       // day: expect.any(Array), // Since the day array is static, we could directly compare it if needed
//       day: ["Choose Day",
//            "Mon, 25/03/24", 
//            "Tue, 26/03/24", 
//            "Wed, 27/03/24", 
//            "Thr, 28/03/24", 
//            "Fri, 29/03/24",
//            "Sat, 30/03/24", 
//            "Son, 31/03/24", 
//            "Mon, 01/04/24", 
//            "Teu, 02/04/24", 
//            "Wed, 03/04/24"
//           ],
//       hour: expect.any(Array), // Mocked fetchAPI response
//       date: "",
//       time: "",
//       numberOfGeusts: 0,
//       whereToSeat: "",
//       typeOfCeremony: "",
//       customerdescription: "",
//     });
//   });
// });