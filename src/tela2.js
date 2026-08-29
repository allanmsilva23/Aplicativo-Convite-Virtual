import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Tela2() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    const targetDate = new Date(2026, 11, 31, 20, 0, 0).getTime(); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seg: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.timerContainer}>
      <View style={styles.titleRow}>
        <FontAwesome5 name="clock" size={14} color="#B8860B" />
        <Text style={styles.timerTitle}> CONTAGEM REGRESSIVA</Text>
      </View>
      
      <View style={styles.timeRow}>
        <View style={styles.timeBox}><Text style={styles.number}>{timeLeft.dias}</Text><Text style={styles.label}>DIAS</Text></View>
        <Text style={styles.separator}>:</Text>
        <View style={styles.timeBox}><Text style={styles.number}>{timeLeft.horas}</Text><Text style={styles.label}>HORAS</Text></View>
        <Text style={styles.separator}>:</Text>
        <View style={styles.timeBox}><Text style={styles.number}>{timeLeft.min}</Text><Text style={styles.label}>MIN</Text></View>
        <Text style={styles.separator}>:</Text>
        <View style={styles.timeBox}><Text style={styles.number}>{timeLeft.seg}</Text><Text style={styles.label}>SEG</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  timerTitle: {
    color: '#B8860B',
    fontSize: 12,
    letterSpacing: 2,
    marginLeft: 8,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBox: {
    alignItems: 'center',
    width: 60,
  },
  number: {
    color: '#E0E0E0',
    fontSize: 28,
    fontWeight: 'bold',
  },
  label: {
    color: '#888',
    fontSize: 10,
    marginTop: 4,
    letterSpacing: 1,
  },
  separator: {
    color: '#B8860B',
    fontSize: 24,
    marginHorizontal: 2,
    paddingBottom: 15, 
  },
});