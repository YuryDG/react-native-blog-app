import React, { useState } from 'react';
import { BlogPost } from '../interfaces/interfaces';

type ContextType = {
  data: BlogPost[],
  addBlogPost?: () => void
}

const generateId = () => Math.floor(Math.random() * 9999);

const generateBlogPosts = (): BlogPost[] => {
  return Array.from({ length: 3 }, (v, k) => {
    return {
      id: generateId(),
      title: `Blog #${k + 1}`,
      content: `Content for Blog#${k + 1}`,
    };
  });
};

const BlogContext = React.createContext<ContextType>({ data: [] });

export const BlogProvider: React.FC<{}> = ({ children }) => {

  const [blogPosts, setBlogPosts] = useState(generateBlogPosts());

  const addBlogPost = () => {
    const newBlogPost = {
      id: generateId(),
      title: `New Blog ${blogPosts.length + 1}`,
      content: `Content ${blogPosts.length + 1}`,
    };

    setBlogPosts([...blogPosts, newBlogPost]);
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {children}
  </BlogContext.Provider>;
};

export default BlogContext;
