import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
