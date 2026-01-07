import { StyleSheet, Text, View } from 'react-native'

export default function contact() {
  return (
    <View>
      <Text style={styles.contact}>contact</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
})