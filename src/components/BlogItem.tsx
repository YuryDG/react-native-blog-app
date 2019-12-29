import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BlogPost } from '../interfaces/interfaces';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  }
});

const BlogItem: React.FC<{ item: BlogPost }> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  )
}


export default BlogItem;
