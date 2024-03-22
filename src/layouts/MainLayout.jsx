import React from 'react';
import {Text} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <>
      {children}
      <Text style={{fontSize: 16, textAlign: 'center', marginTop: 15}}>
        Footer &copy;
      </Text>
    </>
  );
};

export default MainLayout;
