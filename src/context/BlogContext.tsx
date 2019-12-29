import React from 'react';

type ContextType = {
  data: number;
}

const contextInitialValue: ContextType = {
  data: 10,
}

const BlogContext = React.createContext<ContextType>({ data: 0 });

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={contextInitialValue} >
    {children}
  </BlogContext.Provider >
}
