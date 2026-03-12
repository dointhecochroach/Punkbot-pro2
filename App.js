
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { theme } from './app/theme';
import { generateSignal } from './core/signalEngine';

export default function App() {

  const demoSignal = generateSignal({
    price: 68250,
    sweep: true,
    type: "sell_side_liquidity_taken"
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PUNKBOT PRO</Text>

      <View style={styles.terminal}>
        <Text style={styles.text}>Signal: {demoSignal.direction}</Text>
        <Text style={styles.text}>Entry: {demoSignal.entry}</Text>
        <Text style={styles.text}>SL: {demoSignal.stoploss}</Text>
        <Text style={styles.text}>TP1: {demoSignal.targets[0]}</Text>
        <Text style={styles.text}>TP2: {demoSignal.targets[1]}</Text>
        <Text style={styles.text}>TP3: {demoSignal.targets[2]}</Text>
        <Text style={styles.text}>Confidence: {demoSignal.confidence}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0a0a0f",
    padding:20
  },
  title:{
    color:"#00ff9c",
    fontSize:28,
    marginBottom:20
  },
  terminal:{
    backgroundColor:"#10131a",
    padding:20,
    borderRadius:8
  },
  text:{
    color:"#d6faff",
    marginBottom:6
  }
});
