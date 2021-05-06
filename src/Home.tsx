import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, FlatList, Keyboard } from 'react-native';
import {
  StyledContainer,
  StyledSearchContainer,
  StyledTextInput,
  StyledCenter,
  StyledImage,
  StyledTitleText,
  StyledSubtitleText,
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchBusinesses } from './api';
import Item from './components/Item';
import { debounce } from 'lodash';
import { IItem } from './types';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [businesses, setBusinesses] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(false);

  // fetch data on search
  useEffect(() => {
    searchText && debouncedFetch(searchText);
  }, [searchText]);

  const fetchData = (text: string) => {
    setLoading(true);
    fetchBusinesses(text)
      .then(({ result, error }) => {
        if (result) {
          setBusinesses(result);
          setLoading(false);
        } else if (error) {
          // could do error handling here
          console.error(error);
          setLoading(false);
        }
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  };

  // wait a half second for the user to stop typing before making request
  const debouncedFetch = useCallback(
    debounce(text => fetchData(text), 500),
    [],
  );

  const renderItem = ({ item, index }: { item: IItem; index: number }) => {
    return <Item item={item} index={index} />;
  };

  let contents;
  if (loading) {
    contents = (
      <StyledCenter>
        <ActivityIndicator />
      </StyledCenter>
    );
  } else if (!searchText || businesses.length === 0) {
    // view if no search text is present
    contents = (
      <StyledCenter>
        <StyledImage source={require('./assets/yelp.png')} />
        <StyledTitleText>Yelp Search</StyledTitleText>
        <StyledSubtitleText>
          Begin typing in the search box above to search all businesses in the
          Los Angeles area!
        </StyledSubtitleText>
      </StyledCenter>
    );
  } else {
    contents = (
      <FlatList<IItem>
        data={businesses}
        renderItem={renderItem}
        onScroll={Keyboard.dismiss}
      />
    );
  }

  return (
    <StyledContainer onPress={Keyboard.dismiss}>
      <StyledSearchContainer>
        <Icon name="search" size={25} color="black" />
        <StyledTextInput
          placeholder="Search businesses..."
          onChangeText={setSearchText}
          value={searchText}
        />
      </StyledSearchContainer>
      {contents}
    </StyledContainer>
  );
};

export default Home;
