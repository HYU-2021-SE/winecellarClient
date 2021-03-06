import React from 'react';
import Styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';

export const ShareWineCellar = () => {
  return (
    <SafeAreaView>
      <MainText> Share my WineCellar </MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
    </SafeAreaView>
  );
};

const MainText = Styled.Text`
  font-size: 40px;
  text-align: center;
  justifyContent: center;
  color: #B52E58;
`;
