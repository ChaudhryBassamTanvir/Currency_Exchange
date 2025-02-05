import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'


type CurrencyButtonProps= PropsWithChildren<{name:"string",flag:"string"}>


const Button = (props:CurrencyButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Text>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({



    buttonContainer:{}
})