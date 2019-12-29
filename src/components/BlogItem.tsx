import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BlogPost } from '../interfaces/interfaces';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // shadow
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
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
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  )
}


export default BlogItem;
