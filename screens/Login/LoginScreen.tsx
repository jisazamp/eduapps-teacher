import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Formik } from 'formik'
import { loginValidationSchema } from './schema/loginValidationSchema'
import React from 'react'

export const LoginScreen = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        values,
      }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <Image
            source={require('../../assets/images/eduapps-logo.png')}
            style={styles.logo}
            testID='logo'
          />

          <View style={styles.inputsContainer}>
            <TextInput
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              placeholder='Correo electrónico'
              placeholderTextColor={errors.email ? '#ff0033' : '#c5c3c5'}
              style={{
                ...styles.input,
                borderColor: errors.email ? '#ff0033' : '#c5c3c5',
              }}
              testID='email-input'
              value={values.email}
              keyboardType='email-address'
            />
            {errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}

            <TextInput
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              placeholder='Contraseña'
              placeholderTextColor={errors.password ? 'red' : '#c5c3c5'}
              secureTextEntry
              style={{
                ...styles.input,
                borderColor: errors.password ? '#ff0033' : '#c5c3c5',
              }}
              testID='password-input'
              value={values.password}
            />
            {errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}

            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.registerText}>
                ¿No tienes cuenta aún? Crea una
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!isValid}
            style={{ ...styles.loginButton, opacity: isValid ? 1 : 0.5 }}
            testID='login-button'
            onPress={() => handleSubmit()}
          >
            <Text style={styles.loginButtonText}>Ingresar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 180,
    width: 'auto',
  },
  inputsContainer: {
    marginTop: 20,
    paddingVertical: 20,
  },
  input: {
    alignSelf: 'center',
    borderRadius: 9,
    borderWidth: 1,
    height: 44,
    margin: 8,
    padding: 12,
    paddingLeft: 20,
    width: '80%',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#2a53a4',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    margin: 8,
    marginTop: 12,
    width: '80%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    alignSelf: 'center',
    color: '#ff0033',
    fontSize: 12,
    width: '78%',
  },
  registerText: {
    alignSelf: 'center',
    color: '#307444',
    fontWeight: 'bold',
    marginTop: 4,
  },
})
