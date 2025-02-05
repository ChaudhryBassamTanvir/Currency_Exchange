import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useState } from 'react';
import { currencyByRupee } from './constants';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter Value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertValue.toFixed(2)}`;
      setResult(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Enter a valid number',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeeContainer}>
            <Text style={styles.rupee}>PAK RUPEE</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter amount in Rupees"
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>
          {result && <Text style={styles.resultTxt}>{result}</Text>}
        </View>

        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.button, targetCurrency === item.name && styles.selected]}
                onPress={() => buttonPressed(item)}
              >
                <View style={styles.flagContainer}>
                  <Text style={styles.flag}>{item.flag}</Text>
                </View>
                <Text style={styles.currencyName}>{item.name}</Text>
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Dark background
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  rupeeContainer: {
    alignItems: 'center',
  },
  rupee: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    backgroundColor: '#333',
    color: '#FFFFFF',
    fontSize: 16,
  },
  resultTxt: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for result
    marginTop: 20,
  },
  bottomContainer: {
    flex: 3,
    padding: 20,
  },
  button: {
    flex: 1,
    margin: 8,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  selected: {
    backgroundColor: '#4CAF50', // Green background for selected currency
  },
  flagContainer: {
    backgroundColor: '', // White background for flag
    borderRadius: 8,
    padding: 5,
    marginBottom: 5,
  },
  flag: {
    fontSize: 30,
  },
  currencyName: {
    fontSize: 14,
    color: '#FFFFFF', // White text
    textAlign: 'center',
  },
});