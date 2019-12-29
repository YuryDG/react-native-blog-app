import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

const IndexScreen: React.FC<{}> = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>IndexScreen</Text>
    </View>
  );
};

export default IndexScreen;
