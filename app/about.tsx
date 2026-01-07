import { StyleSheet, Text, View } from 'react-native'

export default function about() {
  return (
    <View>
      <Text style={styles.about}>about</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  about: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
})