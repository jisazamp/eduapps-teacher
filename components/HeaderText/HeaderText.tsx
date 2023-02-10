import { StyleSheet, Text, View } from 'react-native'

interface IProps {
  message: string
  color?: string
}

export const HeaderText = ({ message, color = '#2a53a4' }: IProps) => {
  return (
    <View>
      <Text style={{ ...styles.headerText, color }}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    alignSelf: 'center',

    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
})
