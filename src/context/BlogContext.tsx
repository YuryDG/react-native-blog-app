import React from 'react';

type ContextType = {
  data: number;
}

// initial value of the context
const contextInitialValue: ContextType = {
  data: 10,
}

const BlogContext = React.createContext<ContextType>({ data: 0 });

// eslint-disable-next-line react/prop-types
export const BlogProvider: React.FC<{}> = ({ children }) => {
  return <BlogContext.Provider value={contextInitialValue} >
    {children}
  </BlogContext.Provider >
}

export default BlogContext;
