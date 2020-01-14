import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';
import BlogItem from '../components/BlogItem';

type IndexScreenProps = {
}

const IndexScreen: React.FC<IndexScreenProps> = () => {
  const { data: blogPosts, addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Button title="Add" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={(blog) => String(blog.id)}
        renderItem={({ item }) => <BlogItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default IndexScreen;
