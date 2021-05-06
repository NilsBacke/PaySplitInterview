import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import {
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledHeaderTextContainer,
  StyledNameText,
  StyledSubtitleText,
  StyledBottomContainer,
  StyledBottomText,
  StyledCaptionText,
} from './style';
import { IItem } from '../types';

interface Props {
  item: IItem;
  index: number;
}

const Item: React.FC<Props> = ({ item, index }) => {
  // can open yelp site by tapping on an item
  return (
    <TouchableOpacity onPress={() => item.url && Linking.openURL(item.url)}>
      <StyledContainer key={`${item.alias}-${index}`}>
        <StyledHeader>
          {!!item.image_url && <StyledImage source={{ uri: item.image_url }} />}
          <StyledHeaderTextContainer>
            <StyledNameText>{item.name}</StyledNameText>
            <StyledSubtitleText>
              {item.rating} Stars - {item.review_count} Reviews
            </StyledSubtitleText>
          </StyledHeaderTextContainer>
        </StyledHeader>
        <StyledBottomContainer>
          <StyledBottomText>
            {item.price}
            {!!item.price && !!item.categories.length ? ' • ' : ''}
            {item.categories.map(c => c.title).join(', ')}
          </StyledBottomText>
          <StyledCaptionText>
            {item.location.address1 + ', ' + item.location.city}
          </StyledCaptionText>
        </StyledBottomContainer>
      </StyledContainer>
    </TouchableOpacity>
  );
};

export default Item;
