import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const pets = [
    { name: 'Mirka' },
    { name: 'Lonia' },
    { name: 'Laika' },
    { name: 'Chispa' },
    { name: 'Yuya' }
  ];
  return (
    <FlatList
      horizontal
      showsVerticalScrollIndicator={false}
      keyExtractor={pet => pet.name}
      data={pets}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
