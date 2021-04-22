import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const names = ["Alex", "Bob", "Charlie", "Derrick"];

const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{names[0]}</Text>
      <Text>{names[1]}</Text>
      <Text>{names[2]}</Text>
      <Text>{names[3]}</Text>
      <Text>{names[4]}</Text>
      <Text>{names[5]}</Text>
      <Text>{names[6]}</Text>
      <Text>{names[7]}</Text>
      <Text>{names[8]}</Text>
      <Text>{names[9]}</Text>
      <Text>{names[10]}</Text>
      <Text>{names[11]}</Text>
      <Text>{names[12]}</Text>
      <Text>{names[13]}</Text>
      <Text>{names[14]}</Text>
      <Text>{names[15]}</Text>
      <Text>{names[16]}</Text>
      <Text>{names[17]}</Text>
      <Text>{names[18]}</Text>
      <Text>{names[19]}</Text>
      <Text>{names[20]}</Text>
      <Text>{names[21]}</Text>
      <Text>{names[22]}</Text>
      <Text>{names[23]}</Text>
      <Text>{names[24]}</Text>
      <Text>{names[25]}</Text>
      <Text>{names[26]}</Text>
      <Text>{names[27]}</Text>
      <Text>{names[28]}</Text>
      <Text>{names[29]}</Text>
      <Text>{names[30]}</Text>
      <Text>{names[31]}</Text>
      <Text>{names[32]}</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
