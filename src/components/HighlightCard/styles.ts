import "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFValue(300)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: 42px;
  margin-right: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;
export const Footer = styled.View``;
export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: 38px;
`;
export const LastTransaction = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
