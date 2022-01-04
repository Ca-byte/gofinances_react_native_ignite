import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { StatusBar } from "react-native";
import { AuthProvider, useAuth } from "./src/hooks/Auth";
import { ThemeProvider } from "styled-components/native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Routes } from "./src/routes";
import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
