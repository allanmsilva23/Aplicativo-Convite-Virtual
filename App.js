import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Tela1 from './src/tela1';
import Tela2 from './src/tela2';
import Tela3 from './src/tela3';

const TexturaFundo = () => (
  <View style={StyleSheet.absoluteFillObject}>
    <FontAwesome5 name="birthday-cake" size={170} color="#151515" style={{ position: 'absolute', top: -30, left: -50, transform: [{ rotate: '-15deg' }] }} />
    
    <FontAwesome5 name="gift" size={150} color="#151515" style={{ position: 'absolute', top: -10, right: -40, transform: [{ rotate: '45deg' }] }} />
    
    <FontAwesome5 name="star" size={160} color="#151515" style={{ position: 'absolute', bottom: 40, left: -60, transform: [{ rotate: '-10deg' }] }} />
    
    <FontAwesome5 name="glass-cheers" size={160} color="#151515" style={{ position: 'absolute', bottom: -30, right: -40, transform: [{ rotate: '15deg' }] }} />
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TexturaFundo />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Tela1 />
          <Tela2 />
          <Tela3 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    borderWidth: 2,
    borderColor: '#B8860B',
    borderRadius: 15,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(20, 20, 20, 0.85)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
});