import { render, screen, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';
// import Main from './components/Main';
import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI } from './mockAPI';
import * as api from './mockAPI';
import userEvent from '@testing-library/user-event';
import Signup from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';




//mocking the fetchAPI and submitAPI functions
jest.mock('./mockAPI', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));


/* ****************** test a static test in Bookingform component ***************** */
test('a static text in the booking form page', async () => {
  // Mock fetchAPI to return a promise resolved with an array
  api.fetchAPI.mockResolvedValue(['choose Time', '10:00', '11:00', '12:00']);
  const mockState = {
    day: ["Choose Day",
           "Mon, 08/04/24", 
           "Tue, 09/04/24", 
           "Wed, 10/04/24", 
           "Thr, 11/04/24", 
           "Fri, 12/04/24",
           "Sat, 13/04/24", 
           "Son, 14/04/24", 
           "Mon, 15/04/24", 
           "Teu, 16/04/24", 
           "Wed, 17/04/24"
          ],
    hour: fetchAPI('day'),
    date: "",
    time: "",
    numberOfGeusts: 0,
    whereToSeat: "",
    typeOfCeremony: "",
    customerdescription: "",}


  render(<BookingForm state={mockState} />);
  const headingElement = screen.getByText("Reservation Details")
  expect(headingElement).toBeInTheDocument();
});



/* ****************** initializeTimes function ***************** */

describe('initializeTimes', () => {
  it('initializes the state with the correct structure and default values', async () => {
    // Mock the fetchAPI call to return a specific value
    api.fetchAPI.mockResolvedValue(['choose Time', '10:00', '11:00', '12:00']);

    const initialState = initializeTimes();
    // We need to wait for the promise to resolve
    await expect(initialState.hour).resolves.toEqual(['choose Time', '10:00', '11:00', '12:00']);
    expect(initialState).toMatchObject({
      day: expect.any(Array),
      date: "",
      time: "",
      numberOfGeusts: 0,
      whereToSeat: "",
      typeOfCeremony: "",
      customerdescription: "",
    });
  });
});



/* ****************** updateTimes function ***************** */

describe('updateTimes', () => {
  // Setup mock implementation before each test
  beforeEach(() => {
    api.fetchAPI.mockImplementation(date =>
      Promise.resolve(['choose Time', '12:00', '13:00', '15:00'])
    );
  });

  it('updates the date and hours based on the selected day', async () => {
    const state = { date: "", hour: Promise.resolve([]) }; // hour should be a promise
    const action = { type: 'day', daySelected: 'Tue, 09/04/24' };

    // Call the updateTimes function
    const updatedState = updateTimes(state, action);

    // If updateTimes sets a promise on hour, await it
    updatedState.hour = await updatedState.hour;

    // After awaiting the promise, updatedState.hour should now be the resolved array
    expect(updatedState.date).toEqual('Tue, 09/04/24');
    expect(updatedState.hour).toEqual(['choose Time', '12:00', '13:00', '15:00']);
  });
});

/* ****************************** form input validation test ******************* */
// Initial formData state for testing
const initialFormData = {
  nameAndFamily: '',
  phone: '',
  email: '',
  pass: '',
  passConf: '',
  address: '',
  signedFlag: 0,
};

// Mock functions
const mockSetFormData = jest.fn();
const mockSetNameAndFamily = jest.fn();

describe('Signup Form Input Validations', () => {
  beforeEach(() => {
    render(
      <Router>
        <Signup
          formData={initialFormData}
          setformData={mockSetFormData}
          setNameAndFamily={mockSetNameAndFamily}
          disable={false}
        />
      </Router>
    );
  });

  it('validates name input attributes', () => {
    const nameInput = screen.getByPlaceholderText('David Beckham');
    expect(nameInput).toHaveAttribute('type', 'text');
    expect(nameInput).toHaveAttribute('minLength', '3');
    expect(nameInput).toBeRequired();
  });

  it('validates phone number input attributes', () => {
    const phoneInput = screen.getByPlaceholderText('015123456789');
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(phoneInput).toHaveAttribute('pattern', '[0-9]{12}');
  });

  it('validates email input attributes', () => {
    const emailInput = screen.getByPlaceholderText('example@example.com');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toBeRequired();
  });

  it('validates password input attributes', () => {
    const passwordInput = screen.getByPlaceholderText('Your Password');
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('pattern', '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
    expect(passwordInput).toBeRequired();
  });

  it('validates password confirmation input attributes', () => {
    const passwordConfInput = screen.getByLabelText('PASSWORD CONFIRMATION* (Repeat Password)');
    expect(passwordConfInput).toHaveAttribute('type', 'password');
    expect(passwordConfInput).toHaveAttribute('pattern', '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$');
    expect(passwordConfInput).toBeRequired();
  });

  it('validates address input attributes', () => {
    const addressInput = screen.getByPlaceholderText('Type here...');
    expect(addressInput).toHaveAttribute('name', 'address');
  });

  it('validates submit button is disabled by default', () => {
    const submitButton = screen.getByRole('button', { name: 'submit' });
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when name, email, and password are valid', async () => {
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText('David Beckham'), 'John Doe');
    await user.type(screen.getByPlaceholderText('example@example.com'), 'john@example.com');
    await user.type(screen.getByPlaceholderText('Your Password'), 'Qwerty@123');
    await user.type(screen.getByLabelText('PASSWORD CONFIRMATION* (Repeat Password)'), 'Qwerty@123');

    await waitFor(() => {
      const submitButton = screen.getByRole('button', { name: 'submit' });
      expect(submitButton).not.toBeDisabled();
    });
  });
});
//the test environment isn't perfectly mimicking the app's behavior. in Fact when I test it manually, submitt button will be enable