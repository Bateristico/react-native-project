import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const names = 'Mirka & Lonia';

  return (
    <View>
      <Text style={styles.firstElemet}>Getting started with react native!</Text>
      <Text style={styles.secondElement}>Our names are {names}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstElemet: {
    fontSize: 45
  },
  secondElement: {
    fontSize: 20
  }
});

export default ComponentsScreen;
