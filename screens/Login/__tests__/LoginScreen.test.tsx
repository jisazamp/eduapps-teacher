import { LoginScreen } from '../LoginScreen'
import { render, screen } from '@testing-library/react-native'

describe('LoginScreen', () => {
  test('should render the logo correctly', () => {
    render(<LoginScreen />)

    const logo = screen.getByTestId('logo')
    expect(logo).toBeTruthy()
  })

  test('should render the login form correctly', () => {
    render(<LoginScreen />)

    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')
    const loginButton = screen.getByTestId('login-button')

    expect(emailInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
    expect(loginButton).toBeTruthy()
  })
})
