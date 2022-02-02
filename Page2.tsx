import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Page2: React.FC<any> = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'gray' }} />
      <View style={styles.centerText}>
        <Text>Esta é Page 2</Text>
        <Text />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Page1', { param: 'Cheguei Page 2' })
          }>
          <Text>Page1</Text>
        </TouchableOpacity>
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

export default Page2;
