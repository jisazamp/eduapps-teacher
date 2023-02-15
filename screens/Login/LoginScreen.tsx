import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { LogoHeader } from '../../components'
import { HeaderText } from '../../components/HeaderText/HeaderText'
import { loginValidationSchema } from './schema/loginValidationSchema'
import { useMutation } from 'react-query'
import axios from 'axios'

export const LoginScreen = () => {
  const navigation = useNavigation()

  const login = async (values: { email: string; password: string }) => {
    try {
      await axios.post('http://localhost:3000/login', values).then((res) => {
        console.log('Response', res.data)
      })
    } catch (error: any) {
      console.log('Error', error.response.data)
    }
  }

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: () => {
      console.log('Success')
    },
  })

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => mutate(values)}
      validationSchema={loginValidationSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        submitCount,
        values,
      }) => {
        return (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <LogoHeader />

            <HeaderText message={'Inicio de sesión'} />

            <View style={styles.inputsContainer}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Correo electrónico</Text>
                <TextInput
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  placeholder='yefferson@gmail.com'
                  placeholderTextColor={
                    errors.email && submitCount > 0 ? '#ff003340' : '#c5c3c5'
                  }
                  style={{
                    ...styles.input,
                    borderColor:
                      errors.email && submitCount > 0 ? '#ff0033' : '#c5c3c5',
                  }}
                  testID='email-input'
                  value={values.email}
                  keyboardType='email-address'
                />
                {errors.email && submitCount > 0 && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Contraseña</Text>
                <TextInput
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  placeholder='*******'
                  placeholderTextColor={
                    errors.password && submitCount > 0 ? '#ff003340' : '#c5c3c5'
                  }
                  secureTextEntry
                  style={{
                    ...styles.input,
                    borderColor:
                      errors.password && submitCount > 0
                        ? '#ff0033'
                        : '#c5c3c5',
                  }}
                  testID='password-input'
                  value={values.password}
                />
                {errors.password && submitCount > 0 && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>

              <TouchableOpacity style={{ marginTop: 16 }} activeOpacity={0.8}>
                <Text style={styles.registerText}>
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...styles.loginButton,
                backgroundColor: '#2a53a4',
              }}
              testID='login-button'
              onPress={() => handleSubmit()}
            >
              {isLoading ? (
                <ActivityIndicator color='white' />
              ) : (
                <Text style={styles.loginButtonText}>Iniciar sesión</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{ ...styles.loginButton, backgroundColor: '#a6d96a' }}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.loginButtonText}>Registrarse</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )
      }}
    </Formik>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    color: '#2a53a4',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  inputsContainer: {
    marginTop: 10,
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
    width: '100%',
  },
  inputGroup: {
    alignItems: 'baseline',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 8,
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#2a53a4',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    margin: 4,
    width: '80%',
  },
  inputLabel: {
    color: '#2c2c2c',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    color: '#ff0033',
    fontSize: 12,
  },
  registerText: {
    alignSelf: 'center',
    color: '#307444',
    fontWeight: 'bold',
    marginTop: 4,
  },
})
