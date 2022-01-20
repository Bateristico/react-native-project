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
      data={pets}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
