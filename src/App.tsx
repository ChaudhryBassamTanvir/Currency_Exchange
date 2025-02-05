import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
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

    <>

      <StatusBar/>
    <View style={styles.container}>
      <View style={styles.topContainer}>

        <View style={styles.rupeeContainer}>
          <Text style={styles.rupee}>PAK RUPEE</Text>

          <TextInput 
          maxLength={14}
          value={inputValue}
          clearButtonMode='always'
          onChangeText={setInputValue}
          keyboardType='number-pad'
          placeholder='Enter amount in Rupees'
          />
        </View>


        {result &&(

          <Text style={styles.resultTxt}></Text>
        )}
      </View>

<View style={styles.bottomContainer}>

<FlatList  
numColumns={3}
data={currencyByRupee}
keyExtractor={item=>item.name}
renderItem={({item})=>(

<Pressable  style={[styles.button,targetCurrency===item.name && styles.selected]}  
onPress={()=> buttonPressed(item)}
>

<Button {...item}/>


</Pressable>


)}
/>

</View>

    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({})