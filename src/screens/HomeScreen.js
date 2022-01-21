import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  console.log('props', props);
  return (
    <View>
      <Text style={styles.a}>Native Project!</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log('list pressed!!')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
