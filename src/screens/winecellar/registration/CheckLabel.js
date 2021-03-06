import React from 'react';
import Styled from 'styled-components';
import {Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CheckLabel = ({ navigation, route }) => {
  const img = route.params.img;
  const label = route.params.label;
  return (
    <Container>
      <LabelBox>
        <Image
          source={{
            uri: img,
          }}
        />
      </LabelBox>
      <ButtonBox>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Button title="Try again" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LabelRegistration', {
              img: img,
              label: label,
              location: route.params.location,
            })
          }>
          <Button title="Use" />
        </TouchableOpacity>
      </ButtonBox>
    </Container>
  );
};

export default CheckLabel;

const Container = Styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  flex: 1;
  margin-top: 120px;
`;

const LabelBox = Styled.View`
  width: 100%;
  padding: 10px;
  align-items: center;
`;

const Image = Styled.Image`
  width: 350;
  height: 350;
  margin: auto;
`;

const ButtonBox = Styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
