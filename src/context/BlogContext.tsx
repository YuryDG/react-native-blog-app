import React, { useState, useReducer } from 'react';
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

enum ActionsType {
  ADD_BLOG = 'ADD_BLOG'
}

type Action = {
  type: ActionsType,
  payload: any
}

const initialState = generateBlogPosts();

const blogReducer = (state: BlogPost[], action: Action): BlogPost[] => {
  switch (action.type){
    case ActionsType.ADD_BLOG:
      return [ ...state, action.payload];
    default:
      return state;
  }
};

export const BlogProvider: React.FC<{}> = ({ children }) => {

  const [blogPosts, dispatch] = useReducer(blogReducer, initialState);

  const addBlogPost = () => {
    const newBlogPost = {
      id: generateId(),
      title: `New Blog ${blogPosts.length + 1}`,
      content: `Content ${blogPosts.length + 1}`,
    };
    dispatch({ type: ActionsType.ADD_BLOG, payload: newBlogPost });
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {children}
  </BlogContext.Provider>;
};

export default BlogContext;
