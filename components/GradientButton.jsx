import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton(props) {
  return (
    <LinearGradient
      colors={['rgba(9, 181, 211, 0.9)', 'rgba(58, 131, 244,0.9)']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0.1, y: 0.2 }}
      style={[styles.container, props.containerStyle]}
    >
      <TouchableOpacity style={[styles.button, props.buttonStyle]}>
        <Text style={styles.buttonText}>{props.value}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
