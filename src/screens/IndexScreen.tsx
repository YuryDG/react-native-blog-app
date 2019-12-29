import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

type IndexScreenProps = {
}

const IndexScreen: React.FC<IndexScreenProps> = () => {
  const value = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text>Index Screen {value.data}</Text>
    </View>
  );
};

export default IndexScreen;
