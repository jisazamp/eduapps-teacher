import { Formik } from 'formik'
import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { LogoHeader } from '../../components'
import { HeaderText } from '../../components/HeaderText/HeaderText'
import { styles } from '../Login/LoginScreen'
import { useNavigation } from '@react-navigation/native'
import { registerValidationSchema } from './schema/registerValidationSchema'
import axios from 'axios'
import { useMutation } from 'react-query'

export const RegisterScreen = () => {
  const register = async (values: {
    email: string
    firstName: string
    lastName: string
    password: string
  }) => {
    try {
      await axios.post('http://localhost:3000/register', values).then((res) => {
        console.log('Response', res.data)
      })
    } catch (error: any) {
      console.log('Error', error.response.data)
    }
  }

  const { mutate, isLoading } = useMutation(register)

  return (
    <Formik
      initialValues={{
        confirmEmail: '',
        confirmPassword: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      }}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => mutate(values)}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        submitCount,
        values,
      }) => {
        const navigation = useNavigation()

        return (
          <SafeAreaView>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <ScrollView
                style={{
                  marginTop: StatusBar.currentHeight
                    ? StatusBar.currentHeight
                    : 0,
                }}
              >
                <LogoHeader />

                <HeaderText message={'Registro de docente'} />

                <View
                  style={{
                    ...styles.inputsContainer,
                  }}
                >
                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Nombres </Text>
                    <TextInput
                      onBlur={handleBlur('firstName')}
                      onChangeText={handleChange('firstName')}
                      placeholder='Juan Pablo'
                      placeholderTextColor={
                        errors.firstName && submitCount > 0
                          ? '#ff003340'
                          : '#c5c3c5'
                      }
                      style={{
                        ...styles.input,
                        borderColor:
                          errors.firstName && submitCount > 0
                            ? '#ff0033'
                            : '#c5c3c5',
                      }}
                      testID='firstName-input'
                      value={values.firstName}
                    />
                    {errors.firstName && submitCount > 0 && (
                      <Text style={styles.errorMessage}>
                        {errors.firstName}
                      </Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Apellidos </Text>
                    <TextInput
                      onBlur={handleBlur('lastName')}
                      onChangeText={handleChange('lastName')}
                      placeholder='Mosquera G??mez'
                      placeholderTextColor={
                        errors.lastName && submitCount > 0
                          ? '#ff003340'
                          : '#c5c3c5'
                      }
                      style={{
                        ...styles.input,
                        borderColor:
                          errors.lastName && submitCount > 0
                            ? '#ff0033'
                            : '#c5c3c5',
                      }}
                      testID='lastName-input'
                      value={values.lastName}
                    />
                    {errors.lastName && submitCount > 0 && (
                      <Text style={styles.errorMessage}>{errors.lastName}</Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Correo electr??nico </Text>
                    <TextInput
                      onBlur={handleBlur('email')}
                      onChangeText={handleChange('email')}
                      placeholder='juanmosquera@gmail.com'
                      placeholderTextColor={
                        errors.email && submitCount > 0
                          ? '#ff003340'
                          : '#c5c3c5'
                      }
                      style={{
                        ...styles.input,
                        borderColor:
                          errors.email && submitCount > 0
                            ? '#ff0033'
                            : '#c5c3c5',
                      }}
                      testID='email-input'
                      keyboardType='email-address'
                      value={values.email}
                    />
                    {errors.email && submitCount > 0 && (
                      <Text style={styles.errorMessage}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>
                      Confirmar correo electr??nico
                    </Text>
                    <TextInput
                      onBlur={handleBlur('confirmEmail')}
                      onChangeText={handleChange('confirmEmail')}
                      placeholder='juanmosquera@gmail.com'
                      placeholderTextColor={
                        errors.confirmEmail && submitCount > 0
                          ? '#ff003340'
                          : '#c5c3c5'
                      }
                      style={{
                        ...styles.input,
                        borderColor:
                          errors.confirmEmail && submitCount > 0
                            ? '#ff0033'
                            : '#c5c3c5',
                      }}
                      testID='confirmEmail-input'
                      keyboardType='email-address'
                      value={values.confirmEmail}
                    />
                    {errors.confirmEmail && submitCount > 0 && (
                      <Text style={styles.errorMessage}>
                        {errors.confirmEmail}
                      </Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Contrase??a</Text>
                    <TextInput
                      onBlur={handleBlur('password')}
                      onChangeText={handleChange('password')}
                      placeholder='*******'
                      placeholderTextColor={
                        errors.password && submitCount > 0
                          ? '#ff003340'
                          : '#c5c3c5'
                      }
                      style={{
                        ...styles.input,
                        borderColor:
                          errors.password && submitCount > 0
                            ? '#ff0033'
                            : '#c5c3c5',
                      }}
                      testID='password-input'
                      secureTextEntry
                      value={values.password}
                    />
                    {errors.password && submitCount > 0 && (
                      <Text style={styles.errorMessage}>{errors.password}</Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Confirmar contrase??a</Text>
                    <TextInput
                      onBlur={handleBlur('confirmPassword')}
                      onChangeText={handleChange('confirmPassword')}
                      placeholder='*******'
                      placeholderTextColor={
                        errors.confirmPassword && submitCount > 0
                          ? '#ff003340'
                          : '#c5c3c5'
                      }
                      style={{
                        ...styles.input,
                        borderColor:
                          errors.confirmPassword && submitCount > 0
                            ? '#ff003340'
                            : '#c5c3c5',
                      }}
                      testID='confirmPassword-input'
                      secureTextEntry
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && submitCount > 0 && (
                      <Text style={styles.errorMessage}>
                        {errors.confirmPassword}
                      </Text>
                    )}
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      ...styles.loginButton,
                      backgroundColor: '#a6d96a',
                      marginTop: 20,
                    }}
                    onPress={() => handleSubmit()}
                  >
                    {isLoading ? (
                      <ActivityIndicator size='small' color='#fff' />
                    ) : (
                      <Text style={styles.loginButtonText}>Registrarse</Text>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      ...styles.loginButton,
                      backgroundColor: 'transparent',

                      marginTop: 10,
                    }}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text
                      style={{ ...styles.loginButtonText, color: '#307444' }}
                    >
                      Volver
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </SafeAreaView>
        )
      }}
    </Formik>
  )
}
