import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constants'
import Button from './components/Button'
import Snackbar from 'react-native-snackbar'

const App = () => {

const [inputValue,setInputValue]=useState('')
const [result,setResult]=useState('')
const [targetCurrency,settargetCurrency]=useState('')

const buttonPressed=(targetValue:Currency)=>{
  if(!inputValue){

    return Snackbar.show({
      text:"Enter Value to convert",
      backgroundColor:"#EA7773",
      textColor:'#000000'

    })
  }

const inputAmount=parseFloat(inputValue)
if (!isNaN(inputAmount)) {
  const convertValue= inputAmount* targetValue.value
  const result=`${targetValue.symbol} ${convertValue.toFixed(2)}`
  setResult(result)
  settargetCurrency(targetValue.name)
}
else{
  return Snackbar.show({
    text:"Enter Value to convert",
    backgroundColor:"#EA7773",
    textColor:'#000000'

  })

}


}



  return (
    <View>
      <Text>App text</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})