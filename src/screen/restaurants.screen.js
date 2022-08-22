import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCardComponent } from "../feature/restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar />
      </SearchBarContainer>
      <RestaurantsContainer>
        <RestaurantInfoCardComponent />
      </RestaurantsContainer>
    </SafeArea>
  );
};
