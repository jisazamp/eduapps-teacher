import { LoginScreen } from '../LoginScreen'
import { act, render, screen, fireEvent } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

describe('LoginScreen', () => {
  test('should render the logo correctly', () => {
    render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    )

    const logo = screen.getByTestId('logo')
    expect(logo).toBeTruthy()
  })

  test('should render the login form correctly', () => {
    render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    )

    const emailInput = screen.getByTestId('email-input')
    const passwordInput = screen.getByTestId('password-input')
    const loginButton = screen.getByTestId('login-button')

    expect(emailInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
    expect(loginButton).toBeTruthy()
  })

  test('should show an error message when the email is invalid', async () => {
    render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    )

    const emailInput = screen.getByTestId('email-input')
    const loginButton = screen.getByTestId('login-button')

    await act(async () => {
      fireEvent.changeText(emailInput, 'invalid-email')
      fireEvent.press(loginButton)
    })

    const errorMessage = await screen.getByText(
      'Por favor ingresa un correo electrónico válido'
    )
    expect(errorMessage).toBeTruthy()
  })

  test('should show an error message when the password is invalid', async () => {
    render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    )

    const passwordInput = screen.getByTestId('password-input')
    const loginButton = screen.getByTestId('login-button')

    await act(async () => {
      fireEvent.changeText(passwordInput, '123')
      fireEvent.press(loginButton)
    })

    const errorMessage = await screen.getByText(
      'La contraseña debe tener mínimo 8 caracteres'
    )
    expect(errorMessage).toBeTruthy()
  })
})
