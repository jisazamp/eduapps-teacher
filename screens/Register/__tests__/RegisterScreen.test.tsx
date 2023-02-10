import { RegisterScreen } from '../RegisterScreen'
import { render, screen } from '@testing-library/react-native'

describe('RegisterScreen', () => {
  test('should render the logo correctly', () => {
    render(<RegisterScreen />)

    const logo = screen.getByTestId('logo')
    expect(logo).toBeTruthy()
  })
})
