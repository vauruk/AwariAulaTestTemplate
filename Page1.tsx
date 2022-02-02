import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Page1: React.FC<any> = ({ navigation, route }) => {
  console.log('Navigation', route);

  const { param } = route.params;
  return (
    <>
      <View style={styles.centerText}>
        <Text>Esta é Page 1 => {param}</Text>
        <Text />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text>Back To Top</Text>
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

export default Page1;
