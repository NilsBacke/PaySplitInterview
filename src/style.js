import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Elevations from 'react-native-elevation';

export const Card = ({ style, children }) => {
  return (
    <View style={[{ backgroundColor: 'white', ...Elevations[5] }, style]}>
      {children}
    </View>
  );
};

export const StyledContainer = styled.Pressable`
  flex: 1;
  padding: 16px 0px;
  border-radius: 4px;
`;

export const StyledSearchContainer = styled(Card)`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin: 4px 14px;
  border-radius: 8px;
`;

export const StyledTextInput = styled.TextInput`
  margin-left: 8px;
  flex: 1;
`;

export const StyledCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const StyledTitleText = styled.Text`
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 22px;
`;

export const StyledSubtitleText = styled.Text`
  font-size: 16px;
  letter-spacing: 0.25px;
  text-align: center;
  margin-top: 8px;
`;
