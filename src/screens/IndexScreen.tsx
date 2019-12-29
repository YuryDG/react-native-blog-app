import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';
import BlogItem from '../components/BlogItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
});

type IndexScreenProps = {
}

const IndexScreen: React.FC<IndexScreenProps> = () => {
  const { data: blogPosts } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={blogPosts}
        keyExtractor={(blog) => String(blog.id)}
        renderItem={({ item }) => <BlogItem item={item} />}
      />
    </View>
  );
};

export default IndexScreen;
