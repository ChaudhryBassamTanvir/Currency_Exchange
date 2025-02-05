import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'


type CurrencyButtonProps= PropsWithChildren<{name:"string",flag:"string"}>


const Button = (props:CurrencyButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({



    buttonContainer:{
        alignItems:'center'
    }
    ,
    flag:{

        fontSize:28,
        color:"FFFFFF",
        marginBottom:5
    },
    country:{
        fontSize:14,
        color:"2d3436",
    }
})