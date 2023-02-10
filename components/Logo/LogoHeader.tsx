import { Image, StyleSheet } from 'react-native'

export const LogoHeader = () => {
  return (
    <Image
      source={require('../../assets/images/eduapps-logo.png')}
      style={styles.logo}
      testID='logo'
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    aspectRatio: 3 / 2,
    height: 120,
    width: '90%',
  },
})
