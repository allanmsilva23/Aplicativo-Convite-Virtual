import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Tela3() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.row}>
        <View style={styles.column}>
          <FontAwesome5 name="calendar-alt" size={20} color="#D4AF37" style={styles.iconSpacing} />
          <Text style={styles.highlight}>31/12</Text>
          <Text style={styles.subHighlight}>2026</Text>
        </View>

        <View style={styles.verticalLine}></View>

        <View style={[styles.column, { flex: 1.5 }]}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#D4AF37" style={styles.iconSpacing} />
          <Text style={styles.infoTitle}>LOCAL:</Text>
          <Text style={styles.infoText}>MINHA CASA</Text>
          <Text style={styles.addressText}>Rua Alegre, 123</Text>
        </View>

        <View style={styles.verticalLine}></View>

        <View style={styles.column}>
          <FontAwesome5 name="clock" size={20} color="#D4AF37" style={styles.iconSpacing} />
          <Text style={styles.highlight}>20:00</Text>
          <Text style={styles.subHighlight}>Horas</Text>
        </View>
      </View>

      <View style={styles.rsvpContainer}>
        <FontAwesome5 name="whatsapp" size={25} color="#D4AF37" />
        <Text style={styles.rsvp}>CONFIRME SUA PRESENÇA COM CARLA: (11) 98765-4321</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  iconSpacing: {
    marginBottom: 10,
  },
  verticalLine: {
    width: 1,
    height: 70,
    backgroundColor: '#D4AF37',
    opacity: 0.5,
  },
  highlight: {
    color: '#D4AF37',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHighlight: {
    color: '#F8F8F8',
    fontSize: 14,
  },
  infoTitle: {
    color: '#D4AF37',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#D4AF37',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  addressText: {
    color: '#F8F8F8',
    fontSize: 10,
    textAlign: 'center',
  },
  rsvpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    width: '100%',
  },
  rsvp: {
    flex: 1,
    color: '#F8F8F8',
    fontSize: 11,
    letterSpacing: 1,
    marginLeft: 10,
    textAlign: 'center',
  }
});