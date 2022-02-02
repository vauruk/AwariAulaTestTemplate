import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home: React.FC<any> = ({ navigation }) => {
  return (
    <>
      <View style={styles.centerText}>
        <Text>Minha primeira navegação</Text>
        <Text />
        <TouchableOpacity
          onPress={() => navigation.navigate('Page1', { param: 'Cheguei Home' })}>
          <Text>Page1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
          <Text>Page2</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centerText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
