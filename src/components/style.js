import styled from 'styled-components/native';
import { Card } from '../style';

export const StyledContainer = styled(Card)`
  padding: 8px 10px;
  margin: 6px 10px;
  border-radius: 8px;
`;

export const StyledHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const StyledHeaderTextContainer = styled.View`
  margin-left: 8px;
`;

export const StyledNameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2px;
`;

export const StyledSubtitleText = styled.Text`
  font-size: 14px;
  letter-spacing: 0.2px;
`;

export const StyledBottomContainer = styled.View`
  margin-top: 8px;
`;

export const StyledBottomText = styled.Text``;

export const StyledCaptionText = styled.Text`
  font-size: 12px;
  opacity: 0.6;
`;
