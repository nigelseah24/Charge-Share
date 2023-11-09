import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={{flex: 1, marginTop: 50}}>
        <Text>Maps</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})