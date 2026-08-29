import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Tela1() {
  return (
    <View style={styles.header}>
      <Text style={styles.preTitle}>VENHA COMEMORAR COMIGO O</Text>
      
      <Text style={styles.mainTitle}>ANIVERSÁRIO</Text>
      <Text style={styles.subtitle}>do Allan</Text>
      
      <View style={styles.ageBadge}>
        <FontAwesome5 name="birthday-cake" size={18} color="#B8860B" />
        <Text style={styles.ageText}>meus 21 anos!</Text>
        <FontAwesome5 name="birthday-cake" size={18} color="#B8860B" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  preTitle: {
    color: '#888',
    fontSize: 12,
    letterSpacing: 3,
    marginBottom: 15,
  },
  mainTitle: {
    color: '#333', 
    fontSize: 42,
    fontWeight: '900',
    fontFamily: 'serif',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#DAA520',
    fontSize: 54,
    fontFamily: 'serif',
    fontStyle: 'italic',
    marginTop: -35, 
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  ageBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#B8860B',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  ageText: {
    color: '#E0E0E0',
    fontSize: 22,
    fontFamily: 'serif',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginHorizontal: 15,
    letterSpacing: 1,
  },
});