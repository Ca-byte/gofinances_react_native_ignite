import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import LogoSvg from "../../assets/logo.svg";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
} from "./style";

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito mais simples
          </Title>
          <SignInTitle>
            Faça seu login com {"\n"} uma das contas abaixo
          </SignInTitle>
        </TitleWrapper>
      </Header>
      <Footer></Footer>
    </Container>
  );
}
