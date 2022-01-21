import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const pets = [
    { name: 'Mirka', age: 5 },
    { name: 'Lonia', age: 1 },
    { name: 'Laika', age: 8 },
    { name: 'Chispa', age: 5 },
    { name: 'Yuya', age: 5 }
  ];
  return (
    <FlatList
      keyExtractor={pet => pet.name}
      data={pets}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
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
