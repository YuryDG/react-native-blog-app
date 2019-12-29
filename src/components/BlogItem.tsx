import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BlogPost } from '../interfaces/interfaces';
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E9EBEE',
    borderBottomWidth: 1
  },

  title: {
    fontSize: 15
  },
  content: {
    color: 'gray',
  }
});

const BlogItem: React.FC<{ item: BlogPost }> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}


export default BlogItem;
